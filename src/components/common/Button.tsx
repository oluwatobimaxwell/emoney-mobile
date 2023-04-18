import React, { FC, useMemo } from "react";
import styled from "@emotion/native";
import Text, { textStyles } from "./Text";
import ImageIcon, { IconName } from "./ImageIcon";
import { useAppTheme } from "../../contexts/useTheme";

export type Variant = "outlined" | "light";

export interface ButtonProps {
  onPress: () => void;
  text: string;
  iconRight?: IconName;
  iconLeft?: IconName;
  disabled?: boolean;
  squaredIcon?: boolean;
  style?: object;
  textStyle?: object;
  iconRightComponet?: React.ReactNode;
  iconLeftComponet?: React.ReactNode;
  variant?: Variant;
  textVariant?: keyof typeof textStyles;
}

const Button: FC<ButtonProps> = ({
  onPress,
  text,
  iconRight,
  iconLeft,
  disabled,
  squaredIcon,
  style,
  textStyle,
  iconRightComponet,
  iconLeftComponet,
  variant,
  textVariant
}) => {
  const theme = useAppTheme();
  const textColor = useMemo(() => {
    if (variant === "light"){
      return theme.scheme === "light" ? "black" : "white";
    }
    return theme.scheme === "dark" ? "black" : "white"
  }, [variant])
  return (
    <ButtonContainer
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={style}
      variant={variant}
    >
      <IconWrap style={{ marginRight: 12 }}>
        {iconLeftComponet}
        {iconLeft &&
          (squaredIcon ? (
            <IconBox>
              <ImageIcon name={iconLeft} />
            </IconBox>
          ) : (
            <ImageIcon name={iconLeft} />
          ))}
      </IconWrap>
      <IconWrap>
        <Text
          text={text}
          color={textColor}
          align="center"
          style={textStyle}
          variant={textVariant}
        />
      </IconWrap>
      <IconWrap style={{ marginLeft: 12 }}>
        {iconRightComponet}
        {iconRight &&
          (squaredIcon ? (
            <IconBox>
              <ImageIcon name={iconRight} />
            </IconBox>
          ) : (
            <ImageIcon name={iconRight} />
          ))}
      </IconWrap>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.TouchableOpacity<{
  disabled?: boolean;
  variant?: Variant;
}>`
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 45px;
  padding: 0 16px;
  ${({ variant, theme, disabled }: any) => {
    switch (variant) {
      case "outlined":
        return `
        border-width: 1px;
        border-color: ${theme.colors.black};
      `;
      case "light":
        return `
        background-color: ${theme.lightenBlack(disabled ? 0.4 : 0.9)};
      `;
      default:
        return `
        background-color: ${theme.lightenWhite(disabled ? 0.4 : 0.9)};
      `
    }
  }}
`;

const IconWrap = styled.View`
  align-items: center;
`;

const IconBox = styled.View`
  width: 35px;
  height: 35px;
  background: ${({ theme }: any) => theme.lightenWhite(0.2)};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
