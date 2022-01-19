/*! For license information please see component---src-pages-writings-tsx-d6a73cb88a3ff524c5cc.js.LICENSE.txt */
(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[582],{5900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},6068:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),r=n(5937);var i=function(e){var t=e.imgUrl,n=e.title,i=e.linkUrl,l=e.liveUrl;return a.createElement("div",{className:"info-card"},a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a.createElement(r.Z,{src:t,alt:n})),a.createElement("div",{className:"info-card__title"},n,l&&a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Test it out",a.createElement("span",{className:"material-icons"},"navigate_next"))))};var l=function(e){var t=e.data;return a.createElement("div",{className:"cards"},t.map((function(e){return a.createElement(i,{title:e.title,linkUrl:e.link,imgUrl:e.imgPath,liveUrl:e.liveUrl})})))}},5937:function(e,t,n){"use strict";var a=n(7294),r=n(5900),i=n.n(r);t.Z=function(e){var t=e.src,n=e.alt,r=e.className,l=i()("image__container",r);return a.createElement("div",{className:l},a.createElement("img",{src:t,alt:n}))}},795:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5444),i=n(5900),l=n.n(i),c=[{name:"Home",path:"/",type:"internal"},{name:"Writings",path:"/writings",type:"internal"},{name:"Projects",path:"/projects",type:"internal"}];var s=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],i=(0,a.useState)(!1),s=i[0],o=i[1],m=(0,a.useRef)(null),u=l()("navigation",{"navigation--sticky":s}),f=l()("navigation__list",{"navigation__list--open":t}),v=function(){var e;window.scrollY>(null==m||null===(e=m.current)||void 0===e?void 0:e.getBoundingClientRect().height)?o(!0):o(!1)};return(0,a.useEffect)((function(){return document.addEventListener("scroll",v),function(){return document.removeEventListener("scroll",v)}})),a.createElement("nav",{className:u,ref:m},a.createElement("div",{className:"navigation__container"},a.createElement("h2",{className:"navigation__title"},"Evan Teague"),a.createElement("ul",{className:f},c.map((function(e){return a.createElement("li",{className:"navigation__item"},function(e){var t=e.name,n=e.path,i=e.type,l=e.children;switch(i){case"external":return a.createElement("a",{className:"navigation__link",href:n,target:"_blank",rel:"noopener noreferrer"},t,l&&a.createElement("span",{className:"material-icons"},"arrow_drop_down"));case"section":return a.createElement("a",{className:"navigation__link",href:"#"+n},t,l&&a.createElement("span",{className:"material-icons"},"arrow_drop_down"));case"none":return a.createElement("a",{className:"navigation__link"},t,l&&a.createElement("span",{className:"material-icons"},"arrow_drop_down"));default:return a.createElement(r.rU,{className:"navigation__link",to:n},t,l&&a.createElement("span",{className:"material-icons"},"arrow_drop_down"))}}(e))}))),a.createElement("button",{className:"navigation__menu-btn",onClick:function(){n((function(e){return!e}))}},a.createElement("span",{className:"material-icons"},t?"close":"menu"))))},o=function(){return a.createElement(s,null)};function m(e){var t=e.children;return a.createElement("main",{className:"main"},a.createElement(o,null),a.createElement("div",{className:"content-container"},t))}},9150:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(795),i=[{title:"Replacing the Water Cooler",link:"https://evanteague.medium.com/replacing-the-water-cooler-a8bc563fad6e",imgPath:"/mediumLogo.png"},{title:"Creating fake test events with Typescript + Jest",link:"https://evanteague.medium.com/creating-fake-test-events-with-typescript-jest-778018379d1e",imgPath:"/mediumLogo.png"}],l=n(6068);var c=function(){return a.createElement(r.Z,null,a.createElement(l.Z,{data:i}))}}}]);
//# sourceMappingURL=component---src-pages-writings-tsx-d6a73cb88a3ff524c5cc.js.map