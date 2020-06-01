(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(119)),s={id:"01-hello-world",title:"Hello World",sidebar_label:"Hello World"},l={id:"01-hello-world",title:"Hello World",description:"Introduction",source:"@site/website/01_hello_world.md",permalink:"/deno-by-example/01-hello-world",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/website/01_hello_world.md",sidebar_label:"Hello World",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/deno-by-example/getting-started"},next:{title:"Greet From CLI",permalink:"/deno-by-example/02-greet-from-cli"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Import serve from http module",id:"import-serve-from-http-module",children:[]},{value:"Create a server instance to listen on port 8080",id:"create-a-server-instance-to-listen-on-port-8080",children:[]},{value:"Create request handler",id:"create-request-handler",children:[]},{value:"Respond a JSON",id:"respond-a-json",children:[]}]}],i={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Deno is design to keeping web in mind. As Deno team mentioned. Deno is to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Provide Secure Defaults"),Object(o.b)("li",{parentName:"ul"},"Browser compatible"),Object(o.b)("li",{parentName:"ul"},"Be able to serve HTTP efficiently")),Object(o.b)("p",null,"Deno provide standard package ",Object(o.b)("inlineCode",{parentName:"p"},"std/http")," for working with http/https server. This includes an HTTP client and an HTTP server. In this example i will show how simple it is, to create a webserver."),Object(o.b)("h3",{id:"import-serve-from-http-module"},"Import serve from http module"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { serve } from "https://deno.land/std/http/server.ts";\n')),Object(o.b)("h3",{id:"create-a-server-instance-to-listen-on-port-8080"},"Create a server instance to listen on port 8080"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"{3}","{3}":!0}),'import { serve } from "https://deno.land/std/http/server.ts";\n\nconst server = serve({ port: 8080 });\n\n')),Object(o.b)("h3",{id:"create-request-handler"},"Create request handler"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"title=examples/01_hello_world.ts {7-9}",title:"examples/01_hello_world.ts","{7-9}":!0}),'import { serve } from "https://deno.land/std/http/server.ts";\n\nconst PORT = 8080\nconst server = serve({ port: PORT });\nconsole.log(`Your server is running on http://localhost:${PORT}/`);\n\nfor await (const req of server) {\n  req.respond({ body: "Hello World\\n" });\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run App:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"denorun examples/01_hello_world.ts\n\n#OR\n\ndeno run --allow-net --allow-read examples/01_hello_world.ts\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In my first command i am using ",Object(o.b)("inlineCode",{parentName:"p"},"denorun"),". It is alias, created for dev environment. If you have't read my get started tutorial, I will recommend you to read it ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/deno-by-example/01-hello-world"}),"getting-started")))),Object(o.b)("p",null,"Open browser at http://localhost:8080/. You will see ",Object(o.b)("inlineCode",{parentName:"p"},"hello world"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Breakdown:")),Object(o.b)("p",null,"When you create an instance of serve. It return an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://davidwalsh.name/async-generators"}),"async generator")," server. We can wait forever client to connect using for-await loop. And respond to client using ",Object(o.b)("inlineCode",{parentName:"p"},"req.respond")," method. ",Object(o.b)("inlineCode",{parentName:"p"},"respond")," expects ",Object(o.b)("inlineCode",{parentName:"p"},"Response")," object."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"for await (const req of server)")),Object(o.b)("p",null,"You can read more about async generator ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://javascript.info/async-iterators-generators"}),"here"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"allow-net")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As mentioned earlier, Deno is build for security. By default network access is not allowed. You need to pass ",Object(o.b)("inlineCode",{parentName:"p"},"--allow-net")," as argument."))),Object(o.b)("h3",{id:"respond-a-json"},"Respond a JSON"),Object(o.b)("p",null,"When you respond a request, by default no header is assign to response. You need to set header to response a JSON object. Let's see in example."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"title=examples/01_hello_world.ts {8}",title:"examples/01_hello_world.ts","{8}":!0}),'import { serve, Response } from "https://deno.land/std/http/server.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\nfor await (const req of server) {\n\n  const response: Response = {}; // Create a Response instance, init with {}\n  \n  response.headers = new Headers(); // Create Headers object and assign to response\n  response.headers.set("content-type", "application/json"); // set header as json\n\n  const body = { message: "hello world" }; // Create response body\n\n  response.body = JSON.stringify(body); // Serialize to string bytes.\n\n  req.respond(response); // respond response\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run App:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"denorun examples/01_hello_world.ts\n\n#OR\n\ndeno run --allow-net --allow-read examples/01_hello_world.ts\n")),Object(o.b)("p",null,"Open browser at http://localhost:8080/. You will see ",Object(o.b)("inlineCode",{parentName:"p"},'{"message":"hello world"}'),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Breakdown:"),"\nThe Response interface look like as below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface Response {\n  status?: number;\n  headers?: Headers;\n  body?: Uint8Array | Reader | string;\n  trailers?: () => Promise<Headers> | Headers;\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"body")," can only accept ",Object(o.b)("inlineCode",{parentName:"p"},"Uint8Array | Reader | string"),". So we need to serialize the object to jSON string."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Read More:")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can go to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land/std/http"}),"https://deno.land/std/http")," to read more about ",Object(o.b)("inlineCode",{parentName:"p"},"http")," module"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Examples:")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can find all example at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/blob/master/examples/"}),"https://github.com/deepakshrma/deno-by-example/blob/master/examples/")))))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,O=b["".concat(s,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(O,l({ref:t},i,{components:n})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);