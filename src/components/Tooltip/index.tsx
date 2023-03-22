import Portal from "./Portal";
import styled from "styled-components";
import { FC, ReactNode, useCallback, useState } from "react";
import React from "react";

type TooltipProps = {
  children: ReactNode;
  // content: string | null;
  label: string | ReactNode | null;
};

type StyledDivProps = {
  isContent: boolean;
  position: string[];
};

const TooltipContainer: FC<TooltipProps> = ({ children, label }) => {
  const [isContent, setIsContnet] = useState<boolean>(false);
  const [position, setPosition] = useState<string[]>(["100px", "100px"]);

  const getPosition = useCallback(
    (el: HTMLElement) => {
      var clientRect = el.getBoundingClientRect();
      var px = window.pageXOffset + clientRect.left;
      var py = window.pageYOffset + clientRect.top;
      setPosition([`${px}px`, `${py}px`]);
    },
    [position]
  );

  return (
    <>
      <Portal>
        <StyledDiv position={position as string[]} isContent={isContent}>
          {label}
        </StyledDiv>
      </Portal>
      <div
        onMouseEnter={(event) => {
          getPosition(event.relatedTarget as HTMLElement);
          setIsContnet(true);
        }}
        onMouseLeave={() => {
          setIsContnet(false);
        }}
      >
        {children}
      </div>
    </>
  );
};

const Tooltip: FC<TooltipProps> = ({ children, label }) => {
  if (!label) {
    return <>{children}</>;
  }
  return <TooltipContainer label={label}>{children}</TooltipContainer>;
};

// const pos: string[] = ["100px", "2px"];

const StyledDiv = styled.div<StyledDivProps>`
  position: absolute;
  left: ${({ position }) => position[0]};
  /* top: ${({ position }) => position[1]}; */
  display: ${({ isContent }) => (isContent ? "content" : "none")};
  height: fit-content;
  width: fit-content;
  padding: 16px;
  z-index: 1000;
  background-color: red;
`;

export default Tooltip;
