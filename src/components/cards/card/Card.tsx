import React from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";

export const ImageHoverTitle = styled.div`
  opacity: 0;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  cursor: pointer;
  background: radial-gradient(
    rgba(32, 32, 32, 0.7) 30%,
    rgba(121, 114, 103, 0.96) 100%
  );
  transition: 0.3s;

  h3 {
    font-size: 18px;
    color: white;
    margin: 0;
    font-weight: 500;
  }

  h4 {
    font-size: 14px;
    color: white;
    font-weight: 400;
  }
  :hover {
    opacity: 1;
  }

  @media (max-width: 500px) {
    opacity: 1;
    h3 {
      font-size: 14px;
      color: white;
      margin: 0;
      font-weight: 500;
    }

    h4 {
      font-size: 12px;
      color: white;
      font-weight: 400;
    }
  }
`;
export const CardWrapperLink = styled.a<{ type?: string }>`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.03);
  padding: ${(props) => (props.type === "image" ? "0" : "15px 30px")};
  margin-bottom: 20px;
  overflow-y: ${(props) => (props.type === "list" ? "hidden" : "scroll")};
  overflow-x: hidden;
  display: ${(props) => (props.type === "list" ? "flex" : "block")};
  justify-content: ${(props) =>
    props.type === "image" ? "" : "space-between"};
  max-width: ${(props) => (props.type === "list" ? "900px" : "100%")};
  width: ${(props) => (props.type === "list" ? "auto" : "250px")};
  flex-wrap: wrap;
  position: relative;

  :hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
    background-color: white;
  }

  :focus {
    border: 3px solid ${Theme.info};
  }

  @media (max-width: 500px) {
    padding: ${(props) => (props.type === "image" ? "0" : "15px")};
  }
  //NOTE:  Firefox has no support for custom scrollbar
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Theme.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${Theme.primary};
  }

  @media print {
    box-shadow: none;
    overflow: visible;
    height: auto;
    break-inside: avoid;
    padding: 15px 0 15px 0;
    margin: 0;
    border-bottom: 1px solid ${Theme.hrGrey};
  }

  & :hover,
  :focus,
  :active,
  :focus-visible,
  :focus-within {
    ${ImageHoverTitle} {
      opacity: 1;
    }
  }
`;

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.03);
  padding: 15px 30px;
  margin-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: block;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 500px) {
    padding: 15px;
  }
  //NOTE:  Firefox has no support for custom scrollbar
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Theme.primaryLight};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${Theme.primary};
  }
  @media print {
    box-shadow: none;
    overflow: visible;
    height: auto;
    break-inside: avoid;
    padding: 15px 0 15px 0;
    margin: 0;
    border-bottom: 1px solid ${Theme.hrGrey};
  }
`;
export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  > button {
    margin-top: -10px;
  }
`;
export const TitleArea = styled.div<{ type?: string }>`
  padding: ${(props) => (props.type === "image" ? "20px" : "0")};
  display: ${(props) => (props.type === "list" ? "flex" : "block")};
  align-items: center;
  flex-wrap: wrap;
  h3,
  h5,
  h6 {
  }
  @media (max-width: 1000px) {
    width: ${(props) => (props.type === "list" ? "calc(100% - 100px)" : "")};
    margin-right: 100px;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
    white-space: ${(props) => (props.type === "list" ? "nowrap" : "unset")};
    width: ${(props) => (props.type === "list" ? "100%" : "")};
  }
`;

export const Title = styled.h3<{ type?: string }>`
  color: ${Theme.black1};
  margin: 0;
  font-size: ${(props) => (props.type === "text" ? "14px" : "18px")};
  font-family: ${(props) =>
    props.type === "text" ? "'Open Sans', sans-serif" : "'Lora', serif"};
  font-weight: 500;
  padding: 0 5px 5px 0;
  //text-transform: capitalize;
`;

export const Subtitle = styled.h4<{ type?: string }>`
  color: ${Theme.grey};
  margin: 0;
  display: ${(props) => (props.type === "list" ? "flex" : "block")};
  font-size: ${(props) => (props.type === "image" ? "14px" : "12px")};
  flex-wrap: wrap;
  max-width: 320px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
`;
export const CardBody = styled.div<{ type?: string }>`
  color: ${Theme.black1};
  font-size: 14px;
  width: ${(props) => (props.type === "list" ? "calc(100% - 123px)" : "")};
  padding: 1em;

  @media (max-width: 800px) {
    display: ${(props) => (props.type === "list" ? "flex" : "block")};
    border-top: ${(props) =>
      props.type === "list" ? "1px solid #E0EFF1" : "none"};
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;
  }
`;
export const Trunicate = styled.div`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  padding: 10px 0;
  max-height: 90px;
  overflow: hidden;
  word-break: break-word;
  h4,
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  b,
  a {
    color: ${Theme.primary};
    font-weight: 500;
    text-transform: uppercase;
  }
  :after {
    content: "...";
  }
`;
export const CardLink = styled.div`
  font-size: 13px !important;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: ${Theme.primary};
  z-index: 23;

  :hover {
    color: ${Theme.primaryLight};
    text-decoration: underline;
  }
`;
export const CardImage = styled.div<{
  thumbnail?: boolean;
  mobile?: boolean;
  image?: boolean;
}>`
  height: ${(props) => (props.thumbnail ? "150px" : "200px")};
  width: ${(props) => (props.thumbnail ? "120px" : "100%")};
  margin: ${(props) => (props.thumbnail ? "-40px -30px -30px 0" : "0")};
  display: flex;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  cursor: pointer;

  @media (max-width: 800px) {
    margin: ${(props) => (props.thumbnail ? "-50px -30px -30px 5px" : "0")};
    display: ${(props) => (props.mobile || props.image ? "flex" : "none")};
  }

  @media (max-width: 500px) {
    margin: ${(props) => (props.thumbnail ? "0 -30px -30px 5px" : "0")};
    display: ${(props) => (props.mobile || props.image ? "flex" : "none")};
  }
  :hover + { ${ImageHoverTitle} {
    opacity: 1;
  }
`;

interface CardProps {
  type: "image" | "list";
  title: string;
  subtitle: string;
  content: any;
  image: string;
  small?: boolean;
}
export const Card = ({
  type,
  title,
  subtitle,
  content,
  small,
  image,
}: CardProps) => {
  if (type === "image") {
    return (
      <CardWrapperLink type={type} tabIndex={0}>
        <CardImage>
          <img src={image} />
        </CardImage>

        {small ? (
          <ImageHoverTitle>
            <h3>{title}</h3>
            <Subtitle>{subtitle}</Subtitle>
          </ImageHoverTitle>
        ) : (
          <CardBody>
            <TitleArea>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              {content}
            </TitleArea>
          </CardBody>
        )}
      </CardWrapperLink>
    );
  } else if (type === "list") {
    return (
      <CardWrapperLink type={type}>
        <TitleArea type={type}>
          <Title>{title}</Title>
          <Subtitle>- {subtitle}</Subtitle>
        </TitleArea>
        <CardBody type={type}>
          <div>
            <Trunicate>{content}</Trunicate>
          </div>
        </CardBody>
        <CardImage thumbnail>
          <img src={image} />
        </CardImage>
      </CardWrapperLink>
    );
  } else return null;
};
