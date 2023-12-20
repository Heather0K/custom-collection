import React from "react";
import styled from "styled-components";

export default {};
const Wrapper = styled.div``;

interface AccordionProps {
  foo: string;
}

export const Accordion = ({ foo }: AccordionProps) => {
  return <Wrapper>Accordion {foo}</Wrapper>;
};
