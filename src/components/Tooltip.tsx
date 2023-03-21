import React, { ReactNode, useState } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  content: string | null;
  location: string;
};

const Tooltip = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {props.children}
      </div>
      {show && props.content != null && (
        <StyledDiv>
          <div className={props.location}>{props.content}</div>
        </StyledDiv>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 10px;
  position: relative;
  /* display: inline-block; */
`;

const StyledDiv = styled.div`
  .right {
    position: absolute;
    min-width: 200px;
    z-index: 1500;
    top: 50%;
    left: calc(100% + 5px);
    transform: translateY(-50%);
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
  .left {
    position: absolute;
    min-width: 200px;
    z-index: 1500;
    top: 50%;
    right: calc(100% + 5px);
    transform: translateY(-50%);
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
  .top {
    position: absolute;
    min-width: 200px;
    z-index: 1500;
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
  .bottom {
    position: absolute;
    min-width: 200px;
    z-index: 10;
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
`;

export default Tooltip;
