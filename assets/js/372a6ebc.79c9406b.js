"use strict";(self.webpackChunkdeno_by_example_next=self.webpackChunkdeno_by_example_next||[]).push([[732],{8088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(7624),o=t(2172);const i={id:"getting-started",title:"Getting Started",description:"How to install and start with Deno Programming Language",keywords:["beginner","started","deno"],image:"https://source.unsplash.com/iWTamkU5kiI/800x450"},a=void 0,r={id:"getting-started",title:"Getting Started",description:"How to install and start with Deno Programming Language",source:"@site/docs/basic_getting_started.md",sourceDirName:".",slug:"/getting-started",permalink:"/deno-by-example/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/docs/basic_getting_started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",description:"How to install and start with Deno Programming Language",keywords:["beginner","started","deno"],image:"https://source.unsplash.com/iWTamkU5kiI/800x450"},sidebar:"someSidebar",next:{title:"Greet From CLI",permalink:"/deno-by-example/02-greet-from-cli"}},l={},d=[{value:"Download and install",id:"download-and-install",level:2},{value:"Setup your environment",id:"setup-your-environment",level:2},{value:"Create Alias for <code>deno run</code>",id:"create-alias-for-deno-run",level:3},{value:"Hello World Program",id:"hello-world-program",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://source.unsplash.com/iWTamkU5kiI/800x450",alt:"install"})}),"\n",(0,s.jsx)(n.p,{children:"Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"--Deno Team"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsx)(n.p,{children:"This document mainly copied content from official site. However, there is some enhancement to minimize the content of valuable assets."})}),"\n",(0,s.jsx)(n.h2,{id:"download-and-install",children:"Download and install"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using Shell (macOS and Linux):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://deno.land/x/install/install.sh | sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using Homebrew (macOS):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install deno\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"More:",type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://deno.land/manual/getting_started/installation",children:"https://deno.land/manual/getting_started/installation"})})}),"\n",(0,s.jsx)(n.h2,{id:"setup-your-environment",children:"Setup your environment"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"VS CODE:"})}),"\n",(0,s.jsxs)(n.p,{children:["The beta version of ",(0,s.jsx)(n.a,{href:"https://github.com/denoland/vscode_deno",children:"vscode_deno"})," is published on the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno",children:"Visual Studio Marketplace"}),". Please report any issues."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using command line interface:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"code --install-extension denoland.vscode-deno\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"More:",type:"note",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://deno.land/manual/getting_started/setup_your_environment",children:"https://deno.land/manual/getting_started/setup_your_environment"})})}),"\n",(0,s.jsxs)(n.h3,{id:"create-alias-for-deno-run",children:["Create Alias for ",(0,s.jsx)(n.code,{children:"deno run"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="~/.bash_profile"',children:'alias denorun="deno run -A"\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This will help and ease the running application in local."})}),"\n",(0,s.jsx)(n.admonition,{title:"AVOID IN PROD",type:"danger",children:(0,s.jsx)(n.p,{children:"Please don't use in actual enviroment."})}),"\n",(0,s.jsx)(n.h3,{id:"hello-world-program",children:"Hello World Program"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="examples/01_hello_world.ts" {2}',children:'function main() {\n  console.log(`Hello "world"`);\n}\nmain();\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How to run example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"denorun examples/01_hello_world.ts\n## OR\ndeno run examples/01_hello_world.ts\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var s=t(1504);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);