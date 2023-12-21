import React from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";
import { Button } from "../button/Button";
import { MinusIcon } from "../../../shared/icons/MinusIcon";
import { PlusIcon } from "../../../shared/icons/PlusIcon";
import { EllipsisIcon } from "../../../shared/icons/EllipsisIcon";
export const AccordianWrapper = styled.div`
  background-color: white;
  padding: 30px 30px 15px 30px;
  width: 100%;
  border-radius: 15px 15px 0 0;
  hr {
    color: ${Theme.hrGrey};
  }

  @media (max-width: 500px) {
    padding: 15px 10px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-weight: 500;
    white-space: nowrap;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  padding-bottom: 10px;

  @media (max-width: 500px) {
    padding-right: 12px;
  }
`;

export const Content = styled.div<{ open: boolean }>`
  width: 100%;
  background-color: white;
  overflow: ${(props) => (props.open ? "" : "hidden")};
  max-height: ${(props) => (props.open ? "2000px" : "0px")};
  transition: max-height ease-in-out 0.4s;
`;

interface AccordionProps {
  title: string;
  children: React.ReactElement;
  icon: any;
  onOpen: () => any;
  open: boolean;
  ariaLabel: string;
}

export const Accordion = ({
  title,
  ariaLabel,
  icon,
  onOpen,
  open,
  children,
}: AccordionProps) => {
  return (
    <AccordianWrapper>
      <Top>
        <Title>{title}</Title>
        <Button type="icon" onClick={onOpen} ariaLabel={ariaLabel}>
          {icon === "dash" ? (
            open ? (
              <MinusIcon />
            ) : (
              <PlusIcon />
            )
          ) : icon === "dots" ? (
            <EllipsisIcon />
          ) : (
            icon
          )}
        </Button>
      </Top>
      <Content open={open}>{children}</Content>
      <hr />
    </AccordianWrapper>
  );
};
