import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";
import { HandleIcon } from "../../../shared/icons/HandleIcon";

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  border: 2px solid blue;
`;
const Content = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  border: 1px solid green;
  width: 100%;
  height: 100%;
`;
const Resizer = styled.div<{ direction?: string }>`
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.direction === "bottom" ? "0" : "100%")};
  width: ${(props) => (props.direction === "bottom" ? "100%" : "15px")};
  height: ${(props) => (props.direction === "bottom" ? "18px" : "100%")};
  &:hover svg {
    background-color: ${Theme.grey};
    fill: ${Theme.grey};
  }
`;

export const Handle = styled(HandleIcon)<{
  mousedown?: boolean;
  direction?: string;
}>`
  position: absolute;
  cursor: ${(props) => (props.mousedown ? "grabbing" : "grab")};
  left: ${(props) => (props.direction === "bottom" ? "50%" : "0")};
  top: ${(props) => (props.direction === "bottom" ? "3px" : "300px")};
  transform: ${(props) =>
    props.direction === "bottom" ? "none" : "rotate(0.25turn)"};
  border-radius: 5px;
  background-color: ${(props) => (props.mousedown ? "#bebebe" : "#ededed")};
  fill: ${(props) => (props.mousedown ? "#0f2e3d" : "#36647e")};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  width: 31px;
  height: 18px;
  z-index: ${(props) => (props.direction === "bottom" ? "0" : "12")};

  @media (max-width: 999px) {
    display: ${(props) => (props.direction === "right" ? "none" : "block")};
  }
`;

interface ResizeContainerProps {
  children?: ReactElement;
  direction: string;
}
export const ResizeContainer = ({
  children,
  direction,
}: ResizeContainerProps) => {
  const [mousedown, setMouseDown] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleResize = (dir: string, moveX: number, moveY: number) => {
    if (panelRef.current) {
      const panel = panelRef.current;
      const { width, height } = panel.getBoundingClientRect();
      if (dir === "right") {
        const spaceRight = window.innerWidth - 900;
        panel.style.width =
          width > spaceRight ? `${width - 1}px` : `${width + moveX}px`;
      }
      panel.style.height = `${height + moveY}px`;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const ratio = window.devicePixelRatio;
      const moveX = e.movementX / ratio;
      const moveY = e.movementY / ratio;
      handleResize(direction, moveX, moveY);
    };

    if (mousedown) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousedown, direction]);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setMouseDown(true);
  };

  return (
    <Container ref={panelRef}>
      <Content>{children}</Content>
      <Resizer direction={direction}>
        <Handle
          aria-label={"resize-handle"}
          onMouseDown={handleMouseDown}
          mousedown={mousedown ? true : undefined}
          direction={direction}
        />
      </Resizer>
    </Container>
  );
};
