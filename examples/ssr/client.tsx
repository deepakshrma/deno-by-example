import { React, ReactDOM } from "./dep.ts";

declare global {
  var __INITIAL_STATE__: any;
}
import App from "./app.tsx";
const { todos } = window.__INITIAL_STATE__ || { todos: [] };
(ReactDOM as any).hydrate(
  <App todos={todos} />,
  document.getElementById("root")
);
