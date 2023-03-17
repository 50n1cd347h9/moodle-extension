import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material";

const ContributionList = () => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <Outer>
      <Inner>
        {weeks.map((week) => {
          return (
            <Row>
              <div style={{ marginLeft: "3px" }}>a</div>
              {days.map((day, index) => {
                return (
                  <Tooltip title={day} arrow={true} key={index}>
                    <Column></Column>
                  </Tooltip>
                );
              })}
            </Row>
          );
        })}
      </Inner>
    </Outer>
  );
};
const Outer = styled.div`
  width: 100%;
  margin: 0 16px 16px 16px;
  padding: 16px 16px 0 16px;
  border: solid 1px #2e2f2e;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: red;
  text-align: center;
  height: fit-content;
  background-color: #202020;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

const Column = styled.div`
  background-color: green;
  border-spacing: 3px;
  outline: 1px solid rgba(255, 255, 255, 0.05);
  outline-offset: -1px;
  margin: 2px;
  height: 10px;
  width: 10px;
  border-radius: 2px;
`;

export default ContributionList;
