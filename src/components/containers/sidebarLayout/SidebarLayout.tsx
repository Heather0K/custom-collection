import React from "react";
import { Button } from "../../common/button/Button";
import { CloseIcon } from "../../../shared/icons/closeIcon";
import styled from "styled-components";
import { Theme } from "../../../shared/global";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  border: 1px solid red;
`;
export const Shadow = styled.div<{ open: boolean }>`
  @media (max-width: 850px) {
    z-index: ${(props) => (props.open ? "12" : "0")};
    position: absolute;
    min-height: 100%;
    transition: opacity ease 0.3s;
    background-color: rgba(32, 32, 32, 0.7);
    width: 100vw;
    opacity: ${(props) => (props.open ? "1" : "0")};
  }
`;
export const PageContent = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
`;
export const MobileHeader = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    justify-content: space-between;
    border-bottom: ${Theme.hrGrey};
  }

  p {
    font-size: 28px;
  }

  button {
    color: white;

    :hover {
      color: #d2c8b4;
    }
  }
`;

export const SideBarContent = styled.aside<{ open: boolean }>`
  background-color: white;
  width: ${(props) => (props.open ? "400px" : "0")};
  transition: all ease-in-out 0.3s;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 1;
  position: relative;
  min-height: 300px;
  padding-top: 80px;
  border: 1px solid red;


  @media (max-width: 850px) {
    background-color: ${Theme.primary};
    color: white;
    width: ${(props) => (props.open ? "90vw" : "0")};
    z-index: 12;
    position: absolute;
    bottom: 0;
    padding: ${(props) => (props.open ? "15px" : "0")};

    svg {
      fill: white;
    }
`;

interface SidebarLayoutProps {
  children: any;
  content: any;
  open: boolean;
  onOpen: any;
  title: string;
}
export const SidebarLayout = ({
  children,
  content,
  open,
  onOpen,
  title,
}: SidebarLayoutProps) => {
  return (
    <Wrapper>
      <Shadow open={open} />
      <SideBarContent open={open}>
        <MobileHeader>
          <p>{title}</p>
          <Button type="icon" onClick={onOpen} ariaLabel={"title"}>
            <CloseIcon />
          </Button>
        </MobileHeader>
        {content}
      </SideBarContent>
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};
