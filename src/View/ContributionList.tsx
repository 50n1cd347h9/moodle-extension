import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material";

const ContributionList = () => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <div>
      <Div>
        {weeks.map((week) => {
          return (
            <Row>
              <div style={{ marginLeft: "3px" }}>a</div>
              {days.map((day) => {
                return (
                  <Tooltip title={day} arrow={true}>
                    <Column></Column>
                  </Tooltip>
                );
              })}
            </Row>
          );
        })}
      </Div>
    </div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: red;
  padding: 16px;
  text-align: ceter;
  height: fit-content;
  background-color: #202020;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
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
