import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Row, Column } from "../components/globals";

const ContributionList = () => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  document
    .querySelectorAll("*")
    .forEach((el) =>
      el.clientWidth > document.body.clientWidth ? console.log(el) : null
    );

  return (
    <Outer>
      <div
        style={{
          width: "100%",
          padding: "16px",
          backgroundColor: "rgb(29, 31, 32)",
        }}
      >
        <Column style={{ width: "fitContent" }}>
          <TableWrapper>
            <Table>
              <Column>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
                <div style={{ color: "white", height: "10px" }}>mon</div>
              </Column>
              {weeks.map((week) => {
                return (
                  <Column>
                    <div style={{ marginLeft: "3px" }}>a</div>
                    {days.map((day, index) => {
                      return (
                        <Tooltip title={day} arrow={true} key={index}>
                          <DayBlock></DayBlock>
                        </Tooltip>
                      );
                    })}
                  </Column>
                );
              })}
            </Table>
          </TableWrapper>
          <Row style={{ width: "fitContent" }}>aiueo</Row>
        </Column>
        <Column>
          <Button variant="contained">2023</Button>
          <Button variant="contained">2022</Button>
        </Column>
      </div>
    </Outer>
  );
};
const Outer = styled.div`
  width: 100%;
  padding: 0 16px 16px 16px;
  /* border: solid 1px #2e2f2e; */
`;

const TableWrapper = styled.div`
  max-width: 100%;
  /* background-color: #202020; */
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  white-space: nowrap;
  width: max-content;
  border-collapse: separate;
  overflow: hidden;
  margin-right: 0;
`;

const DayBlock = styled.div`
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
