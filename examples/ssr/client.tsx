import React from "https://dev.jspm.io/react@16.13.1";
import ReactDom from "https://dev.jspm.io/react-dom@16.13.1";
declare global {
  var __INITIAL_STATE__: any;
}
import App from "./app.tsx";
const { todos } = window.__INITIAL_STATE__ || { todos: [] };
(ReactDom as any).hydrate(
  <App todos={todos} />,
  document.getElementById("root")
);
