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
    
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks = {
    Sun: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Mon: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Tue: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Wed: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Thu: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Fri: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    Sat: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  } as Aiueo;

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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead></TableHead>
              <TableBody>
                {Object.keys(weeks).map((week: keyof Aiueo) => (
                  <TableRow>
                    {weeks[week].map((data: number) => (
                      <TableCell>
                        <WeekBlock>{data}</WeekBlock>
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
