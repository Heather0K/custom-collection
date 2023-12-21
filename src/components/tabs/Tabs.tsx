import React from "react";
import styled from "styled-components";
import { Theme } from "../../shared/global";

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Tab = styled.button<{
  id: string;
  tabId: string;
}>`
  width: 91px;
  height: 45px;
  margin-left: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;

  background-color: ${(props) =>
    props.id === props.tabId ? Theme.primary : Theme.white};
  color: ${(props) => (props.id === props.tabId ? Theme.white : Theme.primary)};
  border: 2px solid ${Theme.primary};
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.03);
    filter: brightness(125%);
    border: 1px solid ${Theme.primary};
  }

  @media (max-width: 1000px) {
    margin-top: 10px;
    width: 80px;
    font-size: 12px;
    height: 30px;
  }
`;

interface TabsProps {
  tabs: {
    id: string;
    title: string;
  }[];
  tabId: string;
  onTab: (id: string) => any;
  airaLabel: string;
  tabIndex: number;
}

export const Tabs = ({
  tabs,
  onTab,
  tabId,
  airaLabel,
  tabIndex,
}: TabsProps) => {
  return (
    <TabContainer role="tablist">
      {tabs.map((tb, index) => {
        return (
          <Tab
            tabIndex={tabIndex}
            role="tab"
            aria-selected={tabId === tb.id}
            aria-label={airaLabel}
            key={index}
            id={tb.id}
            tabId={tabId}
            onClick={() => {
              onTab(tb.id);
            }}
          >
            {tb.title}
          </Tab>
        );
      })}
    </TabContainer>
  );
};
