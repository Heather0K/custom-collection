import React from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";

export default {};
const AlertStyle = styled.div<{ visable: boolean }>`
  background-color: ${(props) => props.color};
  visibility: ${(props) => (props.visable ? "visible" : "hidden")};
  display: ${(props) => (props.visable ? "block" : "none")};
  width: 300px;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  transition: visibility 0.3s ease-in-out;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface AlertProps {
  message: string;
  color: string;
  showAlert: boolean;
}

export const Alert = ({ message, color, showAlert }: AlertProps) => {
  return (
    <AlertStyle visable={showAlert} color={color}>
      {message}
    </AlertStyle>
  );
};
