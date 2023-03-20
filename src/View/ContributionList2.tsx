import React from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Row, Column } from "../components/globals";

interface Aiueo {
  Sun: Array<number>;
  Mon: Array<number>;
  Tue: Array<number>;
  Wed: Array<number>;
  Thu: Array<number>;
  Fri: Array<number>;
  Sat: Array<number>;
}

const ContributionList = () => {
  const week: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  const year = date.getFullYear();
  const months: Array<String> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //　1月1日のDateインスタンスを作成
  const JanuaryFirst = new Date(year, 1 - 0, 1);
  // 1月1日の曜日を特定。0が日曜日
  const firstWeek = JanuaryFirst.getDay();
  //カレンダーの1行目の1番左のブロックの月日
  const firstBlockDay = (firstWeek) => {
    let i;
    switch (firstWeek) {
      case 0: {
        i = ;
        break;
      }
    }
  };

  const calender = {};

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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead></TableHead>
              <TableBody>
                {week.map((day) => (
                  <TableRow></TableRow>
                ))}
              </TableBody>
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

const WeekBlock = styled.div`
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
