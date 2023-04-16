import styled from "@emotion/native";
import hexToRgba from "hex-to-rgba";
import React, { FC, useCallback, useId, useState } from "react";
import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { Dimensions } from "react-native";
import { useAppTheme } from "../../../contexts/useTheme";
import Button from "../Button";
import ImageIcon, { IconName } from "../ImageIcon";
import Text from "../Text";

const screenWidth = Dimensions.get("screen").width;

export interface OptionProps {
  value: string;
  label: string;
  icon?: IconName;
}

interface LabelSelectProps {
  placeholder: string;
  options: OptionProps[];
  name: string;
  defaultValue?: string[];
  control: any;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  error?: string;
}

const LabelSelect: FC<LabelSelectProps> = (props) => {
  const id = useId();
  const theme = useAppTheme();
  return (
    <Root>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        rules={props?.rules}
        render={({ field: { onChange, value = [] } }) => (
          <>
            <Text variant="h6" text={props.placeholder} />
            <ItemsRoot>
              {props.options.map((option, index) => {
                const isSelected = !!value.find(
                  (e: string) => e === option.value
                );
                return (
                  <ItemRoot
                    key={`${id}-${option.value}-${index}`}
                    selected={isSelected}
                    onPress={() => {
                      if (isSelected) {
                        onChange(
                          value.filter((e: string) => e !== option.value)
                        );
                      } else {
                        onChange([...value, option.value]);
                      }
                    }}
                  >
                    {option.icon && (
                      <ImageIcon
                        name={option.icon}
                        color={theme.scheme === "dark" ? "white" : "black"}
                        tint={theme.scheme === "dark" ? "white" : "black"}
                      />
                    )}
                    <Text
                      text={option.label}
                      variant={isSelected ? "body1Bold" : "body1"}
                    />
                  </ItemRoot>
                );
              })}
            </ItemsRoot>
          </>
        )}
      />
    </Root>
  );
};

export default LabelSelect;

const Root = styled.View`
  margin-bottom: 24px;
`;

const ItemsRoot = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const ItemRoot = styled.TouchableOpacity<{
  selected: boolean;
}>`
  width: ${`${screenWidth / 3 - 26}`}px;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  border-radius: 5px;
  background: ${({ theme, selected }: any) =>
    selected ? hexToRgba(theme.colors.gray, 0.15) : theme.lightenBlack(0.075)};
  border-width: ${({ selected }: any) => (selected ? "2px" : "0px")};
  border-color: ${({ theme }: any) => theme.colors.primary};
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
`;
