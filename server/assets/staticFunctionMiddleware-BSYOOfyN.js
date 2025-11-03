import fs from "node:fs/promises";
import path from "node:path";
import { g as getDefaultSerovalPlugins } from "../server.js";
import { fromJSON, toJSONAsync } from "seroval";
const createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { middleware })
      );
    },
    inputValidator: (inputValidator) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { inputValidator })
      );
    },
    client: (client) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { client })
      );
    },
    server: (server) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { server })
      );
    }
  };
};
async function sha1Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
const getStaticCacheUrl = async (opts) => {
  const filename = await sha1Hash(`${opts.functionId}__${opts.hash}`);
  return `/__tsr/staticServerFnCache/${filename}.json`;
};
const jsonToFilenameSafeString = (json) => {
  const sortedKeysReplacer = (key, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).sort().reduce((acc, curr) => {
    acc[curr] = value[curr];
    return acc;
  }, {}) : value;
  const jsonString = JSON.stringify(json ?? "", sortedKeysReplacer);
  return jsonString.replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_");
};
const staticClientCache = typeof document !== "undefined" ? /* @__PURE__ */ new Map() : null;
async function addItemToCache({
  functionId,
  data,
  response
}) {
  {
    const hash = jsonToFilenameSafeString(data);
    const url = await getStaticCacheUrl({
      functionId,
      hash
    });
    const clientUrl = "dist/client";
    const filePath = path.join(clientUrl, url);
    await fs.mkdir(path.dirname(filePath), {
      recursive: true
    });
    const stringifiedResult = JSON.stringify(await toJSONAsync({
      result: response.result,
      context: response.context.sendContext
    }, {
      plugins: getDefaultSerovalPlugins()
    }));
    await fs.writeFile(filePath, stringifiedResult, "utf-8");
  }
}
const fetchItem = async ({
  data,
  functionId
}) => {
  const hash = jsonToFilenameSafeString(data);
  const url = await getStaticCacheUrl({
    functionId,
    hash
  });
  let result = staticClientCache?.get(url);
  result = await fetch(url, {
    method: "GET"
  }).then((r) => r.json()).then((d) => fromJSON(d, {
    plugins: getDefaultSerovalPlugins()
  }));
  return result;
};
const staticFunctionMiddleware = createMiddleware({
  type: "function"
}).client(async (ctx) => {
  if (process.env.NODE_ENV === "production" && // do not run this during SSR on the server
  typeof document !== "undefined") {
    const response = await fetchItem({
      functionId: ctx.functionId,
      data: ctx.data
    });
    if (response) {
      return {
        result: response.result,
        context: {
          ...ctx.context,
          ...response.context
        }
      };
    }
  }
  return ctx.next();
}).server(async (ctx) => {
  const response = await ctx.next();
  if (process.env.NODE_ENV === "production") {
    await addItemToCache({
      functionId: ctx.functionId,
      response: {
        result: response.result,
        context: ctx
      },
      data: ctx.data
    });
  }
  return response;
});
export {
  staticFunctionMiddleware as s
};
