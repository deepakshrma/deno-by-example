"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[49],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2937:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"advanced-cli-minifind",title:"Build a CLI tool | Deno CLI minifind",sidebar_label:"Build MiniFind CLI",description:"Deno CLI clone of Mac/Unix find",keywords:["advanced","cli","tool","grep","regex"],image:"https://source.unsplash.com/d9ILr-dbEdg/800x450"},s=void 0,p={unversionedId:"advanced-cli-minifind",id:"advanced-cli-minifind",title:"Build a CLI tool | Deno CLI minifind",description:"Deno CLI clone of Mac/Unix find",source:"@site/docs/advanced_create_minifind.md",sourceDirName:".",slug:"/advanced-cli-minifind",permalink:"/deno-by-example/advanced-cli-minifind",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/advanced_create_minifind.md",tags:[],version:"current",frontMatter:{id:"advanced-cli-minifind",title:"Build a CLI tool | Deno CLI minifind",sidebar_label:"Build MiniFind CLI",description:"Deno CLI clone of Mac/Unix find",keywords:["advanced","cli","tool","grep","regex"],image:"https://source.unsplash.com/d9ILr-dbEdg/800x450"},sidebar:"someSidebar",previous:{title:"Routing From Scratch",permalink:"/deno-by-example/advanced-routing"},next:{title:"Isomorphic App",permalink:"/deno-by-example/advanced-react-ssr"}},m={},d=[{value:"1. Input command arguments parser",id:"1-input-command-arguments-parser",level:2},{value:"2. Traverse files and directory trees",id:"2-traverse-files-and-directory-trees",level:2},{value:"3. Filter files/directory based on the arguments",id:"3-filter-filesdirectory-based-on-the-arguments",level:3},{value:"4. Logger, better logging information",id:"4-logger-better-logging-information",level:2},{value:"Bonus",id:"bonus",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://source.unsplash.com/d9ILr-dbEdg/800x450",alt:"find"})),(0,i.kt)("p",null,"We have seen how to create a ",(0,i.kt)("a",{parentName:"p",href:"/02-greet-from-cli"},"Greeting CLI")," in another tutorial. Now we will extend our knowledge and create a ",(0,i.kt)("inlineCode",{parentName:"p"},"full-fledged")," CLI which will be partially clone of Mac/Unix ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),"."),(0,i.kt)("p",null,"Creating CLI required below mentioned features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Input command arguments parser"),(0,i.kt)("li",{parentName:"ol"},"Traverse files and directory trees"),(0,i.kt)("li",{parentName:"ol"},"Filter files/directory based on the arguments"),(0,i.kt)("li",{parentName:"ol"},"Logger, better logging information")),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind.png",width:"800"}),(0,i.kt)("h2",{id:"1-input-command-arguments-parser"},"1. Input command arguments parser"),(0,i.kt)("p",null,"Taking arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno")," is very easy. Every process has ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.args"),", which returns arguments passed to the program."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {4}',title:'"examples/minifind.ts"',"{4}":!0},"async function main(args: string[]) {\n  console.log(args);\n}\nmain(Deno.args);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run examples/minifind.ts param1 param2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'[ "param1", "param2" ]')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deno.args")," returns array of the string passed to the program(examples/minifind.ts)."),(0,i.kt)("p",null,"Our CLI expects params like ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"help"),". To get the value of these parameters. We need to parse arguments. Deno has ",(0,i.kt)("inlineCode",{parentName:"p"},"flags")," ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/flags/mod.ts"},"module")," which help to parse and collect parameters. Let's add ",(0,i.kt)("inlineCode",{parentName:"p"},"parser"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {10}',title:'"examples/minifind.ts"',"{10}":!0},'import { parse } from "https://deno.land/std/flags/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n\n  console.log({\n    type,\n    name,\n    not,\n    help,\n    dir,\n  });\n}\nmain(Deno.args);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'deno run examples/minifind.ts --help --type=f --type=d --name=".*\\.ts" examples\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{ type: [ "f", "d" ], name: ".*\\.ts", not: undefined, help: true, dir: "examples" }\n')),(0,i.kt)("p",null,"When you run the program with a given example, You will see the output as above. Deno parse helps you to collect all the arguments."),(0,i.kt)("p",null,"I have used the ES6 de-structuring feature to assign default values."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Deno parse automatically tries to collect and combine params based on patterns. Any argument pass as prefixing ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),", considered as arguments with value. If you don't pass value next to it. It will become boolean."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(parse(["--test", "t"])); // { _: [], test: "t" }\nconsole.log(parse(["--test"])); // { _: [], test: true }\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Things to be noted: If you pass an argument with the same param more then once. ",(0,i.kt)("inlineCode",{parentName:"p"},"parse")," combine them in ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),". In the above example type is passed twice. That is why, ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," has value ",(0,i.kt)("inlineCode",{parentName:"p"},'[ "f", "d" ]'),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(parse(["--test", "t", "--test", "t2"])); // { _: [], test: [ "t", "t2" ] }\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"underscore(",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") here is like a collection of rest params. If arguments do not follow the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," prefix. All arguments collected in ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," as an array of data. We are extracting ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," as the directory name from rest ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"example3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const { _ } = parse(["--test", "t", "examples"]);\nconsole.log(_); // _ == [ "examples" ]\nconst [dir = "."] = _;\nconsole.log(dir); // examples\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For more info read:")," ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/flags"},"https://deno.land/std/flags")),(0,i.kt)("h2",{id:"2-traverse-files-and-directory-trees"},"2. Traverse files and directory trees"),(0,i.kt)("p",null,"Since now we have arguments parsed, let's add some logic to read the directory."),(0,i.kt)("p",null,"The first thing we can do, We can resolve the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," where files need to be searched. We can use the resolve method from ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/path"},"path module"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'import { parse } from "https://deno.land/std/flags/mod.ts";\nimport { resolve } from "https://deno.land/std/path/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  console.log(dirFullPath);\n}\nmain(Deno.args);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A examples/minifind.ts examples\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"/Users/xdeepakv/github/deno-by-example/examples")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"resolve")," require ",(0,i.kt)("inlineCode",{parentName:"p"},"--allow-read")," permission. For the time being, I have given all permission passing flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-A"),". you can read more about ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/manual/getting_started/permissions"},"permissions")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deno.cwd()")," is used to get current running path. We had to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," as a string. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"parse")," can convert it to ",(0,i.kt)("inlineCode",{parentName:"p"},"string | number")," based on the input type."),(0,i.kt)("p",null,"Reading a directory can be done using ",(0,i.kt)("inlineCode",{parentName:"p"},"Deno.readDir"),". But we are traversing the entire tree of directories and files. Writing the traverse method can be tricky. You can try by yourself."),(0,i.kt)("p",null,"Here, I will take the help of ",(0,i.kt)("inlineCode",{parentName:"p"},"walk")," function from ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/std/fs/mod.ts"},"https://deno.land/std/fs/mod.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'import { parse } from "https://deno.land/std/flags/mod.ts";\nimport { resolve } from "https://deno.land/std/path/mod.ts";\nimport { walk } from "https://deno.land/std/fs/mod.ts";\n\nasync function main(args: string[]) {\n  const {\n    type,\n    name,\n    not,\n    help,\n    _: [dir = "."],\n  } = parse(args);\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  for await (let entry of walk(dirFullPath)) {\n    console.log(entry);\n  }\n}\nmain(Deno.args);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts examples\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  path: "/Users/xdeepakv/github/deno-by-example/examples/sample_employee.csv",\n  name: "sample_employee.csv",\n  isFile: true,\n  isDirectory: false,\n  isSymlink: false\n}\n{\n  path: "/Users/xdeepakv/github/deno-by-example/examples/06_readfile_chunk.ts",\n  name: "06_readfile_chunk.ts",\n  isFile: true,\n  isDirectory: false,\n  isSymlink: false\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"walk")," function is not a stable function. We have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--unstable")," flag while running the example."))),(0,i.kt)("p",null,"Walk function returns an async generator of ",(0,i.kt)("inlineCode",{parentName:"p"},"entries"),". Each entries have ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," along with other flags like ",(0,i.kt)("inlineCode",{parentName:"p"},"isDirectory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isFile"),"."),(0,i.kt)("p",null,"Nice: The toughest part has been done. Now we can read entire directories along with files in it."),(0,i.kt)("h3",{id:"3-filter-filesdirectory-based-on-the-arguments"},"3. Filter files/directory based on the arguments"),(0,i.kt)("p",null,"Walk function accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"WalkOptions")," as the second argument. We can use this option to add our logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interface:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="WalkOptions"',title:'"WalkOptions"'},"export interface WalkOptions {\n  maxDepth?: number;\n  includeFiles?: boolean;\n  includeDirs?: boolean;\n  followSymlinks?: boolean;\n  exts?: string[];\n  match?: RegExp[];\n  skip?: RegExp[];\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts"',title:'"examples/minifind.ts"'},'// rest of the code\nasync function main(args: string[]) {\n  // rest of the code\n  const dirFullPath = resolve(Deno.cwd(), String(dir));\n  let includeFiles = true;\n  let includeDirs = true;\n  let types = type ? (Array.isArray(type) ? type : [type]) : ["f", "d"];\n  if (!types.includes("f")) {\n    includeFiles = false;\n  }\n  if (!types.includes("d")) {\n    includeDirs = false;\n  }\n  const options = {\n    maxDepth: 2,\n    includeFiles,\n    includeDirs,\n    followSymlinks: false,\n    skip: [/node_modules/g],\n  };\n  for await (const entry of walk(dirFullPath, options)) {\n    console.log(entry.path);\n  }\n}\nmain(Deno.args);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts examples\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/Users/xdeepakv/github/deno-by-example/examples\n/Users/xdeepakv/github/deno-by-example/examples/subfolder\n/Users/xdeepakv/github/deno-by-example/examples/subfolder/dummy.ts\n")),(0,i.kt)("p",null,"The default type would include both ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," ",'["f","d"]'," . Users can pass flag -",(0,i.kt)("inlineCode",{parentName:"p"},"-type=f")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--type=d")," to override behavior."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run- Dirs only:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --type=d examples\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run- Files only:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --type=f examples\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WalkOptions")," supports regexp to include and exclude patterns. We can use this to filter entries by name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {6-10,16}',title:'"examples/minifind.ts"',"{6-10,16}":!0},"/// rest of the code\n\nasync function main(args: string[]) {\n  /// rest of the code\n\n  let matchRegexps: RegExp[] | undefined = name\n    ? (Array.isArray(name) ? name : [name]).map(\n        (reg: string) => new RegExp(reg)\n      )\n    : undefined;\n  const options = {\n    maxDepth: 2,\n    includeFiles,\n    includeDirs,\n    followSymlinks: false,\n    match: matchRegexps,\n    skip: [/node_modules/g],\n  };\n  for await (const entry of walk(dirFullPath, options)) {\n    console.log(entry.path);\n  }\n}\nmain(Deno.args);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run- Get all file name has logger in it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'deno run -A --unstable examples/minifind.ts --type=f --name=".*logger.*" examples\n')),(0,i.kt)("p",null,"Now we have working ",(0,i.kt)("inlineCode",{parentName:"p"},"minifind"),". ",(0,i.kt)("strong",{parentName:"p"},"Noice"),"!"),(0,i.kt)("h2",{id:"4-logger-better-logging-information"},"4. Logger, better logging information"),(0,i.kt)("p",null,"The last missing piece is to tell your user about your CLI. For that, we have add helping messages for users. I am using ",(0,i.kt)("inlineCode",{parentName:"p"},"logger-util")," created by me. You can read more here",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/x/deno_util"},"https://deno.land/x/deno_util"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="examples/minifind.ts" {6-10,16}',title:'"examples/minifind.ts"',"{6-10,16}":!0},'/// rest of the code\nimport { Logger } from "https://deno.land/x/deno_util/logger.ts";\n\nconst usesFormat = `Uses:\\n\\n  minifind %s`;\nconst logger = new Logger();\n\nfunction printHelp(command: string) {\n  logger.info(`Welcome to minifind [v%s]`, "1.0.0");\n  logger.warn(usesFormat, command);\n}\nasync function main(args: string[]) {\n  /// rest of the code\n\n  if (help) {\n    printHelp(`--type=f --name=".*logger.*" --help examples`);\n    Deno.exit(0);\n  }\n\n  /// rest of the code\n\n  for await (const entry of walk(dirFullPath, options)) {\n    logger.inverse(entry.path);\n  }\n}\nmain(Deno.args);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run with help:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --help\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_1.png",alt:"minifind 1"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run with other options:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --unstable examples/minifind.ts --help\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/static/img/minifind_2.png",alt:"minifind 1"})),(0,i.kt)("p",null,"TaDa! \ud83d\udc4f\ud83d\udc4f Now you know how to create a CLI."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"Now we have working ",(0,i.kt)("inlineCode",{parentName:"p"},"minifind")," CLI. However, we had to use ",(0,i.kt)("inlineCode",{parentName:"p"},"deno run")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," to run the command, which is not intended/feasible. Deno provides ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," command. We can convert any program to an ",(0,i.kt)("inlineCode",{parentName:"p"},"executable")," tool."),(0,i.kt)("p",null,"Let's convert our minifind to ",(0,i.kt)("inlineCode",{parentName:"p"},"executable"),". It is very simple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deno install -f --allow-read --unstable examples/minifind.ts\n")),(0,i.kt)("p",null,"Once you run above command you will see output like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Add /Users/xdeepakv/.deno/bin to PATH\n    export PATH="/Users/xdeepakv/.deno/bin:$PATH"\n')),(0,i.kt)("p",null,"If you see that, Just add ",(0,i.kt)("inlineCode",{parentName:"p"},'export PATH="/Users/xdeepakv/.deno/bin:$PATH"')," this line to you ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".bash_profile"),"(Depending upon your OS type). Once you add ",(0,i.kt)("inlineCode",{parentName:"p"},".deno/bin")," in PATH. Open a new terminal and try below mention command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'minifind --type=f --name=".*logger.*" examples\n')),(0,i.kt)("p",null,"Now your minifind is ready to use product. :-)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"I hope you like this tutorial. let me know your feedback in the comment. Please support(\ud83d\ude4f\ud83d\ude4f) by subscribing and clapping on ",(0,i.kt)("a",{parentName:"em",href:"https://deepak-v.medium.com/"},"https://deepak-v.medium.com/"),".")),(0,i.kt)("p",null,"All working examples can be found in my Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"},"https://github.com/deepakshrma/deno-by-example/tree/master/examples")))}u.isMDXComponent=!0}}]);