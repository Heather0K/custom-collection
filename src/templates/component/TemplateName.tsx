import React from "react";
import styled from "styled-components";

export default {};
const Wrapper = styled.div``;

interface TemplateNameProps {
  foo: string;
}

export const TemplateName = ({ foo }: TemplateNameProps) => {
  return <Wrapper>TemplateName {foo}</Wrapper>;
};
