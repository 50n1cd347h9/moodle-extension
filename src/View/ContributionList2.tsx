import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Row, Column } from "../components/globals";
import calendarFormatted from "../Calendar";
import Tooltip from "../components/Tooltip";
// import { Tooltip } from "@mui/material";

type LabelTdProps = {
  index: number;
};

type DataBlockProps = {
  index: string | null;
};

const ContributionList2 = () => {
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
            <StyledTable>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {calendarFormatted.map((row, rowIndex) => (
                  <StyledTr key={rowIndex}>
                    <LabelTd index={rowIndex}>
                      <span> {weeks[rowIndex]}</span>
                    </LabelTd>
                    {row.map((data, cellIndex) => (
                      <StyledTd key={cellIndex}>
                        <Tooltip label={data}>
                          <DataBlock index={data}></DataBlock>
                        </Tooltip>
                      </StyledTd>
                    ))}
                  </StyledTr>
                ))}
              </tbody>
            </StyledTable>
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
  position: relative;
  /* border: solid 1px #2e2f2e; */
`;

const TableWrapper = styled.div`
  max-width: 100%;
  /* background-color: #202020; */
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const DataBlock = styled.div<DataBlockProps>`
  /* display: ${(props) => (props.index == null ? "none" : "content")}; */
  background-color: ${(props) => (props.index == null ? "none" : "green")};
  border-spacing: 0px;
  outline: ${(props) =>
    props.index == null ? "none" : "1px solid rgba(255, 255, 255, 0.05)"};
  outline-offset: -1px;
  margin: 0px;
  height: 10px;
  width: 10px;
  border-radius: 2px;
`;

const StyledTable = styled.table`
  border-spacing: 3px;
  overflow: hidden;
  /* position: relative; */
  width: max-content;
  border-collapse: separate;
`;

const LabelTd = styled.td<LabelTdProps>`
  width: 28px;
  position: relative;
  font-size: 12px;
  color: ${(props) => (props.index % 2 == 0 ? "rgba(32, 32, 32, 0)" : "")};
  text-align: left;
  padding: 0.125em 0.5em 0.125em 0;
  z-index: 9;
  span {
    position: absolute;
    bottom: -2px;
  }
`;

const StyledTr = styled.tr`
  display: flex;
  flex-direction: row;
`;

const StyledTd = styled.td`
  padding: 2px;
`;

export default ContributionList2;
