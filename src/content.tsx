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
import styled from "styled-components";
import Page from "./View/page";
import ContributionList from "./View/ContributionList";
import ContributionList2 from "./View/ContributionList2";

const app = document.createElement("div");
const pageHeader = document.getElementById("page-header") as HTMLElement;
pageHeader.append(app);

const Main = () => {
  return <div style={{ backgroundColor: "red" }}>tihs is react</div>;
};
ReactDOM.render(<ContributionList2 />, app);

pageHeader.style.display = "block";
