import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../../shared/global";
import ChevronDownIcon from "../../../shared/icons/ChevronDownIcon";

const DropdownBox = styled.button`
  border: 2px solid ${Theme.primary};
  background-color: white;
  border-radius: 5px;
  width: 211px;
  height: 40px;
  padding: 0 20px;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.03);
  }
  svg {
    font-size: 16px;
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${Theme.primary};
  text-transform: capitalize;
`;
const Icon = styled.div`
  width: 18px;
  height: 18px;
  transform: none;
  transition: 0.3s;
`;
const Options = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  z-index: 11;
  background-color: white;
  transition: all 0.3s linear;
  border: 1px solid ${Theme.primary};
  width: 211px;
  flex-direction: column;
  border-radius: 5px;
  position: absolute;
  padding: 10px 0;
`;
const Option = styled.button`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px;
  color: ${Theme.secondary};
  background-color: transparent;
  border: none;
  text-align: start;
  padding: 10px;

  &[data-is-selected="true"] {
    color: ${Theme.primary};
    svg {
      fill: ${Theme.primary};
    }
  }
  svg {
    height: 18px;
    vertical-align: middle;
    fill: ${Theme.accent};
    text-align: center;
    width: 30px;
  }
  :hover {
    cursor: pointer;
    background-color: ${Theme.grey};
    color: ${Theme.accent};
  }
`;

const Wrapper = styled.div`
  padding-top: 15px;
  svg {
    transform: rotate(0);
    transition: 0.3s ease-in-out;
  }
  &[data-is-open="true"] {
    ${DropdownBox} {
      border: 3px solid rgba(4, 117, 144, 0.2);
    }

    svg {
      transform: rotate(-180deg);
    }

    ${Options} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

interface OptionValue {
  value: string;
  label: string;
}
interface SelectProps {
  options: OptionValue[];
  initOption: OptionValue;
  onSelect: (s: OptionValue) => any;
  placeholder: string;
}

export const Select = ({
  options,
  initOption,
  onSelect,
  placeholder,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initOption);

  const handleSelect = (s: OptionValue) => {
    setSelected(s);
    setOpen(false);
    onSelect(s);
  };

  return (
    <Wrapper data-is-open={open}>
      <DropdownBox onClick={() => setOpen(!open)} aria-label="select">
        <Label>
          {placeholder} {selected.label}
        </Label>
        <ChevronDownIcon />
      </DropdownBox>
      <Options>
        {options.map((option, i) => {
          return (
            <Option
              tabIndex={open ? 0 : -1}
              key={i}
              data-is-selected={option.value === selected.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </Option>
          );
        })}
      </Options>
    </Wrapper>
  );
};
