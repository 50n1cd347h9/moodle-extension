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
import ContributionList2 from "./View/ContributionList2";

const app = document.createElement("div");
const pageHeader = document.getElementById("page-header") as HTMLElement;
pageHeader.append(app);

ReactDOM.render(<ContributionList2 />, app);

pageHeader.style.display = "block";
