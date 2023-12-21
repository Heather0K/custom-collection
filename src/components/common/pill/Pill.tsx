import React from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";
import { Button } from "../button/Button";
import { CloseIcon } from "../../../shared/icons/CloseIcon";

export const Wrapper = styled.div`
  border: 1px solid ${Theme.primary};
  background-color: transparent;
  color: ${Theme.primary};
  height: 30px;
  min-width: 50px;
  border-radius: 10px;
  align-items: center;
  display: inline-flex;
  justify-content: space-evenly;
  margin-right: 8px;
  margin-bottom: 4px;
  padding: 0 2px;

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 5px;
  }

  :hover {
    background-color: rgba(107, 218, 207, 0.42);
  }

  button {
    :hover {
      svg {
        fill: ${Theme.primary};
      }
    }
  }

  svg {
    font-size: 13px;
  }
`;

export const Remove = styled(CloseIcon)`
  font-size: 13px !important;
  height: 16px !important;
  fill: ${Theme.primary};
  margin-right: 5px;
`;

interface PillProps {
  title: string;
  onRemove?: () => any;
}

export const Pill = ({ title, onRemove }: PillProps) => {
  return (
    <Wrapper>
      <p>{title}</p>
      {onRemove && (
        <Button
          primary
          type="icon"
          onClick={onRemove}
          ariaLabel={"remove filter"}
        >
          <Remove />
        </Button>
      )}
    </Wrapper>
  );
};
