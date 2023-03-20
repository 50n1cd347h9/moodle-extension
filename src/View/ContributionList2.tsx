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
import calendarFormatted from "../Calendar";

const ContributionList = () => {
  const weeks: Array<string> = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

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
                {calendarFormatted.map((row, rowIndex) => (
                  <TableRow>
                    <div
                      style={{
                        color: rowIndex % 2 == 0 ? "rgba(32, 32, 32, 0)" : "",
                      }}
                    >
                      {weeks[rowIndex]}
                    </div>
                    {row.map((data, cellIndex) => (
                      <TableCell style={{ padding: "0", margin: "1px" }}>
                        <Tooltip title={data} arrow={true} key={cellIndex}>
                          <DayBlock
                            style={{
                              display: data != null ? "content" : "none",
                            }}
                          ></DayBlock>
                        </Tooltip>
                      </TableCell>
                    ))}
                  </TableRow>
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
