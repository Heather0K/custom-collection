import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../../shared/global";

const Primary = css`
  color: ${Theme.white};
  background-color: ${Theme.primary};
  :hover {
    color: ${Theme.primary};
    background-color: ${Theme.grey};
  }
`;
const Secondary = css`
  color: ${Theme.white};
  background-color: ${Theme.secondary};
  :hover {
    color: ${Theme.white};
    background: ${Theme.accent};
  }
`;

const PrimaryTxtHover = css`
  color: ${Theme.grey};
  > svg {
    fill: ${Theme.grey};
  }
`;
const SecondaryTxtHover = css`
  color: ${Theme.accent};
  > svg {
    fill: ${Theme.accent};
  }
`;
export const BtnSolid = styled.button<{ secondary?: boolean }>`
  ${({ secondary }) => (secondary ? Secondary : Primary)}
  font-size: 14px;
  padding: 0 1em;
  height: 40px;
  font-weight: 600;
  border-radius: 15px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  > svg {
    height: 16px;
    margin-right: 5px;
    margin-bottom: 2px;
    transition: 0.3s;
  }
  :active {
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
  }
  :disabled {
    cursor: not-allowed;
    text-decoration: none;
  }
  @media (max-width: 850px) {
    font-size: 12px;
    padding: 8px;
    height: 34px;
    width: auto;
  }
`;
export const BtnText = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  color: ${(props) =>
    props.primary
      ? Theme.primary
      : props.secondary
      ? Theme.secondary
      : Theme.black};
  background: transparent;
  height: 40px;
  border-radius: 15px;
  font-size: 13px;
  transition: 0.3s;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  min-width: 100px;
  border: 1px solid transparent;
  > svg {
    transition: 0.3s;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0 5px 3px 5px;
    fill: ${(props) =>
      props.primary
        ? Theme.primary
        : props.secondary
        ? Theme.secondary
        : Theme.black};
  }
  :hover {
    text-decoration: underline;
    ${({ secondary }) => (secondary ? SecondaryTxtHover : PrimaryTxtHover)}
    
  :disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #323232;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const BtnIcon = styled.button<{
  primary?: boolean;
  secondary?: boolean;
}>`
  color: ${(props) =>
    props.primary
      ? Theme.primary
      : props.secondary
      ? Theme.secondary
      : Theme.black};
  background-color: transparent;
  border-radius: 15px;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  padding: 0;
  > svg {
    transition: 0.3s;
    width: 24px;
    height: 24px;
    fill: ${(props) =>
      props.primary
        ? Theme.primary
        : props.secondary
        ? Theme.secondary
        : Theme.black};
  }
  :hover {
    ${({ secondary }) => (secondary ? SecondaryTxtHover : PrimaryTxtHover)}
  }
  :disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #323232;
  }
`;
interface ButtonProps {
  type?: string;
  onClick?: any;
  ariaLabel: string;
  uppercase?: boolean;
  disabled?: boolean;
  children?: any;
  primary?: boolean;
  secondary?: boolean;
  tabIndex?: number;
}
export const Button = ({
  type,
  onClick,
  ariaLabel,
  uppercase,
  disabled,
  children,
  primary,
  secondary,
  tabIndex,
}: ButtonProps) => {
  if (type === "text") {
    return (
      <BtnText
        primary={primary}
        secondary={secondary}
        tabIndex={tabIndex}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        data-is-primary={primary}
        style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
      >
        {children}
      </BtnText>
    );
  } else if (type === "icon") {
    return (
      <BtnIcon
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        secondary={secondary}
        primary={primary}
        style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
      >
        {children}
      </BtnIcon>
    );
  } else {
    return (
      <BtnSolid
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        secondary={secondary}
        style={{ textTransform: uppercase ? "uppercase" : "capitalize" }}
      >
        {children}
      </BtnSolid>
    );
  }
};
