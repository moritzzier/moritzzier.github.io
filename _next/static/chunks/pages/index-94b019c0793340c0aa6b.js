(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},7947:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(a=r(617))&&a.__esModule?a:{default:a},c=r(3367),l=r(4287),u=r(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var d=o.props[u],f=n[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),n[u]=f):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}function v(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}v.rewind=function(){};var x=v;t.default=x},617:function(e,t,r){"use strict";var n=r(3115),o=r(2553),a=r(2012),i=(r(450),r(9807)),s=r(7690),c=r(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),d=function(e){i(r,e);var t=l(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},4509:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),o=r(9008),a=r(6265),i=(r(7294),function(e){var t=e.children,r=e.className;return(0,n.jsx)("footer",{className:r,children:t})}),s=function(e){var t=e.href,r=e.title,o=e.children;return(0,n.jsx)("a",{href:t,title:r,children:(0,n.jsx)("span",{className:"flex h-12 w-12 bg-background rounded-full items-center justify-center",children:o})})},c=function(e){var t=e.menuItems;return(0,n.jsx)("nav",{className:"lg:fixed lg:bottom-0 lg:right-auto bg-paper absolute top-0 right-0 left-0",children:(0,n.jsx)("ul",{className:"lg:flex-col flex justify-center",children:null===t||void 0===t?void 0:t.map((function(e,t){return r=e,o=t,(0,n.jsx)("li",{className:"p-2",children:(0,n.jsx)(s,{href:r.href,title:r.name,children:r.icon})},o);var r,o}))})})};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.children,r=e.mainProps,o=e.navProps,a=e.footerProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,u({},o)),(0,n.jsx)("main",u(u({},r),{},{children:t})),(0,n.jsx)(i,u({},a))]})},f=function(e){return(0,n.jsx)("p",{className:"text-typo-dark bg-paper text-center",children:"Copyright \xa9 Moritz Zier 2021. All rights reserved."})};var p=function(){return(0,n.jsx)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})};var h=function(){return(0,n.jsx)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})};var m=function(){return(0,n.jsx)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})};var v=function(){return(0,n.jsx)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})};function x(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Portfolio - Moritz Zier"}),(0,n.jsx)("meta",{name:"description",content:"My Webdev Portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Comfortaa&family=Noto+Serif&display=swap",rel:"stylesheet"})]}),(0,n.jsxs)(d,{navProps:{menuItems:[{href:"#home",name:"Home",icon:(0,n.jsx)(m,{})},{href:"#about",name:"About",icon:(0,n.jsx)(h,{})},{href:"#contact",name:"Contact",icon:(0,n.jsx)(v,{})}]},mainProps:{className:"bg-background"},footerProps:{className:"",children:(0,n.jsx)(f,{})},children:[(0,n.jsxs)("section",{id:"home ",className:"h-screen flex flex-col",children:[(0,n.jsxs)("div",{className:"lg:pl-16 md:pl-12 pl-8 pt-32",children:[(0,n.jsxs)("h1",{className:"text-5xl text-typo-dark font-display",children:["Hi,",(0,n.jsx)("br",{}),"I'm Moritz!"]}),(0,n.jsx)("p",{className:"text-2xl text-typo-light font-body",children:"Fullstack Webdeveloper"})]}),(0,n.jsx)("span",{className:"text-typo-dark mt-16 flex justify-center animate-bounce",children:(0,n.jsx)(p,{})})]}),(0,n.jsx)("section",{id:"about",className:"h-screen",children:(0,n.jsxs)("div",{className:"pl-8 pt-32",children:[(0,n.jsx)("h2",{className:"text-4xl text-typo-dark font-display",children:"About"}),(0,n.jsx)("p",{className:"text-typo-light font-body text-justify pr-8",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam architecto deleniti quod. Eveniet dolorum quo doloribus reiciendis sapiente illo placeat hic unde corrupti. Ipsum adipisci fugiat at delectus sint."})]})}),(0,n.jsx)("section",{id:"contact",className:"h-screen",children:(0,n.jsxs)("div",{className:"pl-8 pt-32",children:[(0,n.jsx)("h2",{className:"text-4xl text-typo-dark font-display",children:"Contact"}),(0,n.jsx)("p",{className:"text-typo-light  font-body",children:"How to reach me:"}),(0,n.jsxs)("ul",{className:"text-typo-light font-body list-disc list-inside",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"mailto:moritz.zier@gmail.com",className:"underline",children:"Email"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/moritzzier",className:"underline",children:"Github"})})]})]})})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4509)}])},9008:function(e,t,r){e.exports=r(7947)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),a=r(3585),i=r(5725);e.exports=function(e){return n(e)||o(e)||a(e)||i()}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);