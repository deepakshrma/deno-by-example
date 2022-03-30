"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[896],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"advanced-routing",title:"Creating Routing/Controller in Deno Server(From Scratch)",sidebar_label:"Routing From Scratch",description:"How to create Route and Controller in Deno Server(From Scratch)",keywords:["beginner","started","route","controller","server"],image:"https://source.unsplash.com/Bdv1dYP6V9g/800x450"},l=void 0,p={unversionedId:"advanced-routing",id:"advanced-routing",title:"Creating Routing/Controller in Deno Server(From Scratch)",description:"How to create Route and Controller in Deno Server(From Scratch)",source:"@site/docs/advance_routing.md",sourceDirName:".",slug:"/advanced-routing",permalink:"/deno-by-example/advanced-routing",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advance_routing.md",tags:[],version:"current",frontMatter:{id:"advanced-routing",title:"Creating Routing/Controller in Deno Server(From Scratch)",sidebar_label:"Routing From Scratch",description:"How to create Route and Controller in Deno Server(From Scratch)",keywords:["beginner","started","route","controller","server"],image:"https://source.unsplash.com/Bdv1dYP6V9g/800x450"},sidebar:"someSidebar",previous:{title:"Hello World",permalink:"/deno-by-example/01-hello-world"},next:{title:"Build MiniFind CLI",permalink:"/deno-by-example/advanced-cli-minifind"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"All working examples can be found in my Github",id:"all-working-examples-can-be-found-in-my-github",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Deno provides a standard package ",(0,o.kt)("inlineCode",{parentName:"p"},"std/http")," for working with ",(0,o.kt)("inlineCode",{parentName:"p"},"http/https")," server. However, the routing request to different Control is not supported out-of-box. Demo model is same as NodeJs. Saying that, Deno insist you to use module like ",(0,o.kt)("inlineCode",{parentName:"p"},"oak"),". I will also recommend you to use this module.\nHere in this tutorial, I will explain how you can build Super cool Router from scratch."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\ud83d\udca1Learn More:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/oakserver/oak"},"https://github.com/oakserver/oak")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://source.unsplash.com/Bdv1dYP6V9g/800x450",alt:"routing"})),(0,o.kt)("p",null,"Before creating a routing, lets create a basic server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts"',title:'"examples/basic_server.ts"'},'import { serve, Response } from "https://deno.land/std/http/server.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\nfor await (const req of server) {\n  req.respond({ body: "hello world" }); // respond response\n}\n')),(0,o.kt)("p",null,"Run this ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run examples/basic_server.ts")),(0,o.kt)("p",null,"Open browser at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),". You will see ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udd25Fact:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have not read my ",(0,o.kt)("a",{parentName:"p",href:"https://decipher.dev/deno-by-example/01-hello-world"},"hello-world")," Article. I will recommend you to please read it."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:")),(0,o.kt)("p",null,"Here, whenever you request anything to server. It will return you ",(0,o.kt)("inlineCode",{parentName:"p"},"hello world")," in response. Adding route will be done inside ",(0,o.kt)("inlineCode",{parentName:"p"},"for-each")," loop. Let's add first route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts" {8-14}',title:'"examples/basic_server.ts"',"{8-14}":!0},'import { serve, Response } from "https://deno.land/std/http/server.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\nconsole.log(`\ud83d\ude80 Server is running on http://localhost:${PORT}`);\n\nfor await (const req of server) {\n  switch (req.url) {\n    case "/users":\n      req.respond({ body: "Hello Mr. Unknown" });\n      break;\n    default:\n      req.respond({ body: "404! Page Not Found!" }); // respond response\n  }\n}\n')),(0,o.kt)("p",null,"Run this ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run examples/basic_server.ts")),(0,o.kt)("p",null,"Open browser at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/users"},"http://localhost:8080/"),". You will see ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello Mr. Unknown"),". If you try some other URL, you will see ",(0,o.kt)("inlineCode",{parentName:"p"},"404! Page Not Found!"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the current request URL using ",(0,o.kt)("inlineCode",{parentName:"li"},"req.url")),(0,o.kt)("li",{parentName:"ol"},"Switch between url ",(0,o.kt)("inlineCode",{parentName:"li"},"/users")," and respond accordingly.")),(0,o.kt)("p",null,"We can do something like this. The only issue with this approach. We can't have dynamic route like ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/1234")," where is ",(0,o.kt)("inlineCode",{parentName:"p"},"1234")," is the id of user."),(0,o.kt)("p",null,"As solution, Instead of directly matching one to one. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"regex")," to match ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," and get the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts" {10-20}',title:'"examples/basic_server.ts"',"{10-20}":!0},'import { serve, Response } from "https://deno.land/std/http/server.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\n\nconst users = [{ name: "deepak" }, { name: "Sam" }, { name: "Britney" }];\n\nconsole.log(`\ud83d\ude80 Server is running on http://localhost:${PORT}`);\nfor await (const req of server) {\n  const userRegex = /^\\/users\\/(\\d+)/;\n  const match = userRegex.exec(req.url);\n\n  if (match) {\n    const userId = Number(match[1]);\n\n    if (users[userId]) {\n      req.respond({ body: JSON.stringify(users[userId]) });\n    } else {\n      req.respond({ body: "USER NOT FOUND" });\n    }\n  } else {\n    req.respond({ body: "404! Page Not Found!" }); // respond response\n  }\n}\n')),(0,o.kt)("p",null,"Run this ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run examples/basic_server.ts")),(0,o.kt)("p",null,"Open browser at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/users/1"},"http://localhost:8080/"),". You will see ",(0,o.kt)("inlineCode",{parentName:"p"},'{"name":"Sam"}'),". If you try URL with ",(0,o.kt)("inlineCode",{parentName:"p"},"id 5"),", you will see ",(0,o.kt)("inlineCode",{parentName:"p"},"USER NOT FOUND"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:"),"\nUsing regex match we achieve what we had needed. However, writing regex of complex pattern could be an issue. Let's use our first library as file. We will use ",(0,o.kt)("inlineCode",{parentName:"p"},"path-to-regexp")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"pillarjs"),". This is the same library used by ",(0,o.kt)("inlineCode",{parentName:"p"},"express server")," in nodejs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts" {2}',title:'"examples/basic_server.ts"',"{2}":!0},'import { serve, Response } from "https://deno.land/std/http/server.ts";\nimport { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\n\nconst users = [{ name: "deepak" }, { name: "Sam" }, { name: "Britney" }];\n\nconsole.log(`\ud83d\ude80 Server is running on http://localhost:${PORT}`);\nfor await (const req of server) {\n  const userRegex = pathToRegexp("/users/:id");\n  const match = userRegex.exec(req.url);\n\n  /// rest of the code\n}\n')),(0,o.kt)("p",null,"Re-run app again. You will see no difference. Nice!"),(0,o.kt)("p",null,"Here adding too much business logic in same ",(0,o.kt)("inlineCode",{parentName:"p"},"for-each")," loop can leads to many issue. The major concern is maintenance. So let's move to ",(0,o.kt)("inlineCode",{parentName:"p"},"controller/handler"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts" {15-21}',title:'"examples/basic_server.ts"',"{15-21}":!0},'import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";\n\n// Rest of the code\n\nfor await (const req of server) {\n  const userRegex = pathToRegexp("/users/:id");\n  const match = userRegex.exec(req.url);\n  if (match) {\n    handleUsers(req, match);\n  } else {\n    req.respond({ body: "404! Page Not Found!" }); // respond response\n  }\n}\n\nfunction handleUsers(req: ServerRequest, match: RegExpExecArray) {\n  const userId = Number(match[1]);\n  if (users[userId]) {\n    req.respond({ body: JSON.stringify(users[userId]) });\n  } else {\n    req.respond({ body: "USER NOT FOUND" });\n  }\n}\n')),(0,o.kt)("p",null,"If you run app and request app with same input as previous. You will see same output. We just move the User logic to separate ",(0,o.kt)("inlineCode",{parentName:"p"},"handleUsers")," function."),(0,o.kt)("p",null,"Nice! All good. However, managing these many route path and regex is tough task and hard to maintain as well."),(0,o.kt)("p",null,"As solution we can create a list/array of routes. The interface for ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," could be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="interface Route"',title:'"interface','Route"':!0},"interface Route {\n  name: string; // name of the route, just for tracking\n  path: string; // path pattern for handler\n  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request\n}\n")),(0,o.kt)("p",null,"Let's create two handler. One for users, another one for posts."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For time being, I am using static data from ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/users.ts"},"users.ts")," and ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/posts.ts"},"posts.ts")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="handleUsers"',title:'"handleUsers"'},'function handleUsers(req: ServerRequest, match: RegExpExecArray) {\n  const userId = Number(match[1]);\n  if (users[userId]) {\n    req.respond({ body: JSON.stringify(users[userId]) });\n  } else {\n    req.respond({ body: "USER NOT FOUND" });\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="handlePosts"',title:'"handlePosts"'},'function handlePosts(req: ServerRequest, match: RegExpExecArray) {\n  const postId = Number(match[1]);\n  if (posts[postId]) {\n    req.respond({ body: JSON.stringify(posts[postId]) });\n  } else {\n    req.respond({ body: "POST NOT FOUND" });\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Routes"',title:'"Routes"'},'const routes: Route[] = [\n  { name: "posts", path: "/posts/:id", handler: handlePosts },\n  { name: "users", path: "/users/:id", handler: handleUsers },\n];\n')),(0,o.kt)("p",null,"Create a handler for ",(0,o.kt)("inlineCode",{parentName:"p"},"Page Not Found"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Page Not Handler"',title:'"Page',Not:!0,'Handler"':!0},'function routeNotFound(req: ServerRequest) {\n  req.respond({ body: "404! Page Not Found!" });\n}\n')),(0,o.kt)("p",null,"To match ",(0,o.kt)("inlineCode",{parentName:"p"},"URL pattern"),", We can loop over all the routes and call the respective handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="router"',title:'"router"'},"function router(req: ServerRequest) {\n  for (let route of routes) {\n    const reg = pathToRegexp(route.path);\n    const match = reg.exec(req.url);\n    if (match) return route.handler(req, match);\n  }\n  return routeNotFound(req);\n}\n")),(0,o.kt)("p",null,"The complete code will be like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/basic_server.ts"',title:'"examples/basic_server.ts"'},'import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";\nimport { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";\nimport users from "./users.ts";\nimport posts from "./posts.ts";\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\n\nconsole.log(`\ud83d\ude80 Server is running on http://localhost:${PORT}`);\n\ninterface Route {\n  name: string; // name of the route, just for tracking\n  path: string; // path pattern for handler\n  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request\n}\n\nconst routes: Route[] = [\n  { name: "posts", path: "/posts/:id", handler: handlePosts },\n  { name: "users", path: "/users/:id", handler: handleUsers },\n];\n\nfor await (const req of server) {\n  router(req);\n}\n\nfunction handleUsers(req: ServerRequest, match: RegExpExecArray) {\n  const userId = Number(match[1]);\n  if (users[userId]) {\n    req.respond({ body: JSON.stringify(users[userId]) });\n  } else {\n    req.respond({ body: "USER NOT FOUND" });\n  }\n}\nfunction handlePosts(req: ServerRequest, match: RegExpExecArray) {\n  const postId = Number(match[1]);\n  if (posts[postId]) {\n    req.respond({ body: JSON.stringify(posts[postId]) });\n  } else {\n    req.respond({ body: "POST NOT FOUND" });\n  }\n}\n\nfunction router(req: ServerRequest) {\n  for (let route of routes) {\n    const reg = pathToRegexp(route.path);\n    const match = reg.exec(req.url);\n    if (match) return route.handler(req, match);\n  }\n  return routeNotFound(req);\n}\n\nfunction routeNotFound(req: ServerRequest) {\n  req.respond({ body: "404! Page Not Found!" });\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't worry, We will further break down the entire code and do required clean up.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breakdown:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In above sample, The ",(0,o.kt)("inlineCode",{parentName:"li"},"router")," function will be called on each request."),(0,o.kt)("li",{parentName:"ol"},"This router function will loop on each ",(0,o.kt)("inlineCode",{parentName:"li"},"Route")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"routes")," and try to match."),(0,o.kt)("li",{parentName:"ol"},"Once match found, it will call respective handler.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Code:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Code can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/basic_server.ts"},"examples/basic_server.ts")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's give final touch and break into files.")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/controllers.ts"},"controllers.ts")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/controllers.ts"',title:'"examples/controllers.ts"'},'import { ServerRequest } from "https://deno.land/std/http/server.ts";\nimport { getUserById } from "./users.ts";\nimport { getPostById } from "./posts.ts";\nconst fromRoot = (str: string) => Deno.cwd() + "/static/" + str;\n\nexport const findUserById = (req: ServerRequest, match: RegExpExecArray) => {\n  const id = Number(match[1]);\n  const user = getUserById(id);\n  if (user) {\n    req.respond({ body: JSON.stringify(user) });\n  } else {\n    req.respond({ body: "POST NOT FOUND" });\n  }\n};\n\nexport const findPostById = (req: ServerRequest, match: RegExpExecArray) => {\n  const id = Number(match[1]);\n  const post = getPostById(id);\n  if (post) {\n    req.respond({ body: JSON.stringify(post) });\n  } else {\n    req.respond({ body: "POST NOT FOUND" });\n  }\n};\n\nexport async function staticFile(req: ServerRequest, match: RegExpExecArray) {\n  // handle files\n  if (match) {\n    const filename = match[1];\n    const strPath = fromRoot(filename);\n    try {\n      req.respond({ body: await Deno.open(strPath) });\n    } catch (err) {\n      routeNotFound(req);\n    }\n  } else {\n    return routeNotFound(req);\n  }\n}\nexport function routeNotFound(req: ServerRequest) {\n  req.respond({ body: "404! Page Not Found!" });\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Bonus:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"I have added static page ",(0,o.kt)("inlineCode",{parentName:"p"},"handler[staticFile]")," for static assets."))),(0,o.kt)("p",null,"Move all router logic in ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/router.ts"},"router.ts")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/router.ts"',title:'"examples/router.ts"'},'import { ServerRequest } from "https://deno.land/std/http/server.ts";\nimport { pathToRegexp } from "https://raw.githubusercontent.com/pillarjs/path-to-regexp/master/src/index.ts";\nimport { findUserById, findPostById, routeNotFound } from "./controllers.ts";\n\ninterface Route {\n  name: string; // name of the route, just for tracking\n  path: string; // path pattern for handler\n  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request\n}\n\nconst routes: Route[] = [\n  { name: "static", path: "/static/:page*", handler: staticFile },\n  { name: "posts", path: "/posts/:id", handler: findUserById },\n  { name: "users", path: "/users/:id", handler: findPostById },\n];\n\nfunction router(req: ServerRequest) {\n  for (let route of routes) {\n    const reg = pathToRegexp(route.path);\n    const match = reg.exec(req.url);\n    if (match) return route.handler(req, match);\n  }\n  return routeNotFound(req);\n}\n\nexport default router;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Finally the main server with request logger:")," ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/controllers.ts"},"final_server.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="examples/final_server.ts"',title:'"examples/final_server.ts"'},'import { serve } from "https://deno.land/std/http/server.ts";\nimport router from "./router.ts";\nimport { Logger } from "https://raw.githubusercontent.com/deepakshrma/deno_util/master/logger.ts";\n\nconst logger = new Logger();\n\nconst PORT = 8080;\nconst server = serve({ port: PORT });\n\nconsole.log(`\ud83d\ude80 Server is running on http://localhost:${PORT}`);\n\nfor await (const req of server) {\n  logger.info("/%s:\\t%s \\t\\t%s", req.method, req.url, new Date().toISOString());\n  router(req);\n}\n')),(0,o.kt)("p",null,"Run this ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run examples/final_server.ts")),(0,o.kt)("p",null,"Open browser at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/static/home.html"},"http://localhost:8080/static/home.html"),". You will see ",(0,o.kt)("inlineCode",{parentName:"p"},"Magic"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/final_server.png",alt:"magic_server"})),(0,o.kt)("p",null,"Good Job! Thanks for support in advance. Please do follow me, subscribing and clapping on ",(0,o.kt)("a",{parentName:"p",href:"https://deepak-v.medium.com/"},"https://deepak-v.medium.com/")),(0,o.kt)("h3",{id:"all-working-examples-can-be-found-in-my-github"},"All working examples can be found in my Github"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"},"https://github.com/deepakshrma/deno-by-example/tree/master/examples")))}u.isMDXComponent=!0}}]);