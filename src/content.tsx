// import React from "react";
// import ReactDOM from "react-dom";

// const app = document.createElement("div");
// document.body.prepend(app);

// const Main = () => {
//   return <div style={{ backgroundColor: "red" }}>This is React</div>;
// };
// ReactDOM.render(<Main />, app);

import React from "react";
import ReactDOM from "react-dom";
import Page from "./View/page";
import ContributionList from "./View/ContributionList";

const app = document.createElement("div");
const el = document.getElementById("page-header") as HTMLElement;
el.append(app);

const Main = () => {
  return <div style={{ backgroundColor: "red" }}>This is React</div>;
};
ReactDOM.render(
  <>
    <ContributionList />
  </>,
  app
);
