import React, { useState } from "react";
import { TextInputProps } from "react-native";
import styled from "@emotion/native";
import ImageIcon, { IconName } from "../ImageIcon";
import { Controller, FieldValues, RegisterOptions } from "react-hook-form";
import Text from "../Text";

const StyledTextInput = styled.TextInput<{
  hasIcon: boolean;
}>`
  background-color: ${({ theme }: any) => theme.lightenBlack(0.15)};
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  font-family: Regular;
  height: 55px;
  padding-left: ${({ hasIcon }) => `${hasIcon ? 55 : 16}`}px;
`;

interface Props extends TextInputProps {
  icon?: IconName;
  passwordToggler?: boolean;
  name: string;
  control: any;
  rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined;
  error?: string;
}

const TextInput: React.FC<Props> = (props) => {
  const [showPasswordToggle, setShowPasswordToggle] = useState(true);

  return (
    <Root>
      {props.icon && (
        <IconRoot>
          <ImageIcon name={props.icon} />
        </IconRoot>
      )}
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue}
        rules={props?.rules}
        render={({ field: { onChange, onBlur }}) => (
          <StyledTextInput
            {...props}
            secureTextEntry={showPasswordToggle && props?.secureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
            hasIcon={!!props.icon}
          />
        )}
      />
      {props?.secureTextEntry && (
        <PasswordToggler
          onPress={() => setShowPasswordToggle(!showPasswordToggle)}
        >
          <ImageIcon name={showPasswordToggle ? "hide" : "show"} />
        </PasswordToggler>
      )}
      {props?.error && <Text text={props?.error} color="danger" style={{ fontSize: 12 }} />}
    </Root>
  );
};

export default TextInput;

const Root = styled.View`
  position: relative;
  margin-bottom: 25px;
`;

const IconRoot = styled.View`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
`;

const PasswordToggler = styled.Pressable`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
`;
