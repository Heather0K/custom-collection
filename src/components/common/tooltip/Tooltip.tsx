import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 25px;
`;

export const Wrapper = styled.div`
  padding-top: 5px;
  border: none;
  height: 25px;
  width: 50px;
  :hover + span {
    opacity: 1;
    display: block;
    z-index: 2;
    visibility: visible;
  }
  :focus + span {
    opacity: 1;
    display: block;
    z-index: 2;
    visibility: visible;
  }
`;

export const Message = styled.span`
  opacity: 0;
  visibility: hidden;
  display: block;
  max-width: 150px;
  width: 100%;
  padding: 10px;
  background-color: #100f0f;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  position: relative;
  z-index: 0;
  transition: opacity ease-in 0.3s;

  ::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 100%;
    border-width: 10px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
`;

interface TooltipProps {
  children: React.ReactElement;
  message: string;
  tabIndex: number;
}

export const Tooltip = ({ children, message, tabIndex }: TooltipProps) => {
  return (
    <Container role="tooltip" aria-label={"tooltip"}>
      <Wrapper tabIndex={tabIndex}>{children}</Wrapper>
      <Message aria-label={"tip"}>{message}</Message>
    </Container>
  );
};
