import React from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";
import SpinnerIcon from "../../../shared/icons/SpinnerIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 5px;
`;

const Loader = styled(SpinnerIcon)<{ color: string; alt: string }>`
  fill: ${(props) => props.color};
  font-size: 20px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface SpinnerProps {
  color: string;
}
export const Spinner = ({ color }: SpinnerProps) => {
  return (
    <Container data-testid={"loading"}>
      <Loader color={color} alt="loading" />
    </Container>
  );
};
