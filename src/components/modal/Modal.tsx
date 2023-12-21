import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../shared/global";
import { Button } from "../common/button/Button";
import { CloseIcon } from "../../shared/icons/CloseIcon";

export const Wrapper = styled.div`
  display: flex;
  align-self: center;

  > button {
    margin-right: 50px;
    font-size: 13px;
    padding: 0;

    svg {
      font-size: 14px;
    }
  }
`;

export const Container = styled.div<{ open: boolean }>`
  position: absolute;
  background-color: ${(props) => (props.open ? "rgba(51, 51, 51, 0.47);" : "")};
  z-index: 999;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  display: ${(props) => (props.open ? "block" : "none")};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 5vh;
  bottom: auto;
  left: 20vw;
  right: 20vw;
  overflow-y: scroll;
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: white;
  min-width: 60vw;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.16);

  &[data-footer="true"] {
    top: auto;
    bottom: 20vh;
  }
  @media (max-width: 900px) {
    min-width: 80vw;
    left: 10vw;
    right: 10vw;
  }
  @media (max-width: 600px) {
    left: 0;
    right: 0;
  }

  hr {
    color: ${Theme.hrGrey};
    border-width: 0.5px;
  }
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-size: 28px;
    padding: 15px 0;
  }
`;

interface ModalProps {
  buttonText: string;
  title: string;
  children: React.ReactElement;
}

export const Modal = ({ buttonText, title, children }: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Button
        ariaLabel={"open modal"}
        type="text"
        primary
        onClick={() => {
          setOpen(true);
        }}
      >
        {buttonText}
      </Button>
      <Container open={open}>
        <ModalContainer open={open}>
          <ModalTop>
            <h2>{title}</h2>
            <Button
              ariaLabel={"close modal"}
              type="icon"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </Button>
          </ModalTop>
          <hr />
          <>{children}</>
        </ModalContainer>
      </Container>
    </Wrapper>
  );
};
