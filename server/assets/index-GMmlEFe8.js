import { jsxs, jsx } from "react/jsx-runtime";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { R as Route } from "./router-DPnYBivh.js";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "lucide-react";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "./staticFunctionMiddleware-BSYOOfyN.js";
import "node:fs/promises";
import "node:path";
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden bg-gray-900 py-4 flex justify-between px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:eteague13@gmail.com",
        className: "text-white flex items-center",
        children: "Get in touch"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/evanteague13/", target: "_blank", children: /* @__PURE__ */ jsx(LinkedInLogoIcon, { color: "#fff", className: "w-12 h-12" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/evanteague", target: "_blank", children: /* @__PURE__ */ jsx(GitHubLogoIcon, { color: "#fff", className: "w-12 h-12" }) })
    ] })
  ] });
}
function Quote({ children }) {
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl lg:max-w-4xl", children: /* @__PURE__ */ jsx("figure", { className: "mt-10", children: /* @__PURE__ */ jsx("blockquote", { className: "text-center text-xl/8 font-semibold text-white sm:text-2xl/9", children: /* @__PURE__ */ jsx("p", { children }) }) }) })
  ] });
}
function Work$1({ title, link, image, gitHub }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-gray-900 py-24 sm:py-32", id: title, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:pt-4 lg:pr-8", children: /* @__PURE__ */ jsxs("div", { className: "lg:max-w-lg", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-base/7 font-semibold text-indigo-400",
          href: link,
          children: "Live demo"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("a", { className: "inline font-semibold text-white", href: gitHub, children: "See code" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Work screenshot",
        src: image,
        className: "w-full rounded-lg"
      }
    )
  ] }) }) });
}
function Work({ title, positions, timeLine, image }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-gray-900 py-24 sm:py-32", id: title, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "lg:max-w-lg", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base/7 font-semibold text-indigo-400", children: timeLine }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl", children: title }),
      /* @__PURE__ */ jsx("dl", { className: "mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none", children: positions.map((position) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("dt", { className: "inline font-semibold text-white", children: position.name }),
        " ",
        /* @__PURE__ */ jsx("dd", { className: "inline", children: position.timeLine })
      ] }, position.name)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Product screenshot",
        src: image,
        className: "w-full rounded-lg"
      }
    )
  ] }) }) });
}
function App() {
  const {
    works,
    projects
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-800 flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 px-6 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6 mb-6", children: [
          /* @__PURE__ */ jsx("img", { src: "/profile_pic.jpeg", alt: "Profile pic", className: "w-24 h-24 md:w-32 md:h-32 rounded-full object-cover" }),
          /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]", children: "Evan Teague" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl text-gray-300 mb-4 font-light", children: "Senior Software Engineer | Full Stack Web Developer | Scrum master" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "", children: /* @__PURE__ */ jsx(Quote, { children: "Whenever someone asks my mom about what I do for a living, she tends to begin by telling the story about how when I was a baby in the doctor's office, I was either taking apart legos or looking under a chair to see how the pieces connect together. I guess I have always been an engineer at heart!" }) }),
    /* @__PURE__ */ jsx("section", { className: "flex flex-col gap-4", children: works.map((work) => /* @__PURE__ */ jsx(Work, { title: work.title, positions: work.positions, timeLine: work.timeLine, image: work.image }, work.id)) }),
    /* @__PURE__ */ jsx("section", { className: "", children: /* @__PURE__ */ jsx(Quote, { children: "My focus as a Senior Software Engineer is on full stack web development. I have overseen the development of large scale, user facing applications with hundreds of thousands of users, guiding various teams with best frontend practices." }) }),
    /* @__PURE__ */ jsx("section", { className: "flex flex-col gap-4", children: projects.map((project) => /* @__PURE__ */ jsx(Work$1, { title: project.title, link: project.link, image: project.image, gitHub: project.gitHub }, project.id)) }),
    /* @__PURE__ */ jsx("section", { className: "", children: /* @__PURE__ */ jsx(Quote, { children: "Beyond coding, I've embraced mentorship and leadership. Part of growing up is realizing when you need to support others instead of just yourself, and nothing brings me more joy than seeing others excel in their careers." }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  App as component
};
