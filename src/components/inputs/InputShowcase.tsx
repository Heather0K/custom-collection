import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../common/button/Button";
import { Checkbox } from "./checkbox/Checkbox";
import { Select } from "./select/Select";
import { Searchbar } from "./searchbar/Searchbar";
import { DumpsterFire } from "../../shared/icons/DumpsterFire";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  gap: 2em;
  background-color: #fff8fa;

  > h1 {
    width: 100%;
    margin: 0;
    padding: 0;
    color: #461024;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 1em;
  padding: 1em;
  align-items: center;
  border-radius: 20px;
  border: 2px solid rgba(219, 112, 147, 0.5);
  background-color: white;
  box-shadow: 2px 4px 5px rgba(129, 66, 90, 0.59);

  > h2 {
    width: 100%;
    margin: 0;
    padding: 0;
    color: #642c41;
  }

  > * {
  }
`;

export const InputShowcase = () => {
  const [checked, setChecked] = useState(false);

  const Options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
  ];
  return (
    <PageContainer>
      <h1>Component collection </h1>
      <FlexContainer>
        <h2>Buttons</h2>
        <Button ariaLabel={"Test Button"} disabled={false} primary type="solid">
          Solid Primary
        </Button>
        <Button
          ariaLabel={"Test Button"}
          disabled={false}
          secondary
          type="solid"
        >
          Solid Secondary
        </Button>
        <Button ariaLabel={"Test Button"} disabled={false} primary type="text">
          Text Primary
        </Button>
        <Button
          ariaLabel={"Test Button"}
          disabled={false}
          secondary
          type="text"
        >
          Text Secondary
        </Button>

        <Button ariaLabel={"Test Button"} type="icon">
          <DumpsterFire />
        </Button>

        <Button ariaLabel={"Test Button"} type="text">
          <DumpsterFire /> Icon text
        </Button>
      </FlexContainer>

      <FlexContainer>
        <h2>Inputs</h2>
        <Checkbox
          checked={checked}
          inLineLabel={"checkbox"}
          subLabel={"sublabel"}
          countText={"123"}
          id={1}
          onChange={() => {
            setChecked(!checked);
          }}
        />

        <Select
          options={Options}
          initOption={Options[0]}
          onSelect={() => {
            console.log("hi");
          }}
          placeholder={"hihi"}
        />
        <Searchbar />
      </FlexContainer>
    </PageContainer>
  );
};
