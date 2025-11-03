import { a as createServerRpc, c as createServerFn } from "../server.js";
import { s as staticFunctionMiddleware } from "./staticFunctionMiddleware-BSYOOfyN.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "node:fs/promises";
import "node:path";
const getWorks_createServerFn_handler = createServerRpc("50919c5e13a9191f93cc0684c4c7854948bc4aaa151654b6f916b6a1ab73e4b5", (opts, signal) => {
  return getWorks.__executeServer(opts, signal);
});
const getWorks = createServerFn({
  method: "GET"
}).middleware([staticFunctionMiddleware]).handler(getWorks_createServerFn_handler, async () => [{
  id: 1,
  title: "PlexTrac",
  positions: [{
    name: "Senior Software Engineer",
    timeLine: "2025-Present"
  }],
  timeLine: "2025-Present",
  image: "/plextrac logo.svg"
}, {
  id: 2,
  title: "SDL",
  positions: [{
    name: "Senior Software Engineer",
    timeLine: "2023-2024"
  }],
  timeLine: "2023-2024",
  image: "/sdl logo.webp"
}, {
  id: 3,
  title: "Frio",
  positions: [{
    name: "Senior Software Engineer",
    timeLine: "2022-2023"
  }],
  timeLine: "2023-2024",
  image: "frio logo.png"
}, {
  id: 4,
  title: "Aqua",
  positions: [{
    name: "Senior Software Engineer",
    timeLine: "2023"
  }],
  timeLine: "2023",
  image: "/Aqua Logo.png"
}, {
  id: 5,
  title: "Mythical Games",
  positions: [{
    name: "Technical Team Lead",
    timeLine: "2022-2023"
  }, {
    name: "Senior Software Engineer",
    timeLine: "2021-2022"
  }],
  timeLine: "2021-2023",
  image: "/mythical games.jpg"
}, {
  id: 5,
  title: "Vistaprint",
  positions: [{
    name: "Lead Software Engineer",
    timeLine: "2019-2021"
  }, {
    name: "Software Engineer II",
    timeLine: "2017-2019"
  }, {
    name: "Software Engineer I",
    timeLine: "2016-2017"
  }],
  timeLine: "2016-2021",
  image: "/vistaprint logo.png"
}, {
  id: 6,
  title: "Geico",
  positions: [{
    name: "Programmer Analyst",
    timeLine: "2015-2016"
  }],
  timeLine: "2015-2016",
  image: "/geico logo.webp"
}]);
const getProjects_createServerFn_handler = createServerRpc("273abfaf4e2a06a1895b57d4bd9b8984cb1f9a4030f1472bf2c1b6827c51c839", (opts, signal) => {
  return getProjects.__executeServer(opts, signal);
});
const getProjects = createServerFn({
  method: "GET"
}).middleware([staticFunctionMiddleware]).handler(getProjects_createServerFn_handler, async () => [{
  id: 1,
  title: "Countdown timer",
  link: "https://frontend-practice-countdown-timer.vercel.app/",
  gitHub: "https://github.com/evanteague/frontend-practice/tree/main/countdown-timer",
  image: "/countdown timer.png"
}, {
  id: 2,
  title: "Data storage",
  link: "https://frontend-practice-data-storage.vercel.app/",
  gitHub: "https://github.com/evanteague/frontend-practice/tree/main/data-storage",
  image: "data storage.png"
}, {
  id: 3,
  title: "Calculator",
  link: "https://frontend-practice-calculator-app-main.vercel.app/",
  gitHub: "https://github.com/evanteague/frontend-practice/tree/main/calculator-app-main",
  image: "calculator.png"
}]);
export {
  getProjects_createServerFn_handler,
  getWorks_createServerFn_handler
};
