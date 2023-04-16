import React, { FC } from "react";
import styled from "@emotion/native";
import Text from "./Text";
import ImageIcon, { IconName } from "./ImageIcon";
import { useAppTheme } from "../../contexts/useTheme";

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
}) => {
  const theme = useAppTheme();
  return (
    <ButtonContainer
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={style}
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
          color={theme.scheme === "dark" ? "black" : "white"}
          align="center"
          style={textStyle}
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
}>`
  background-color: ${({ theme, disabled }: any) => theme.lightenWhite(disabled ? 0.4 : 0.9)};
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 55px;
  padding: 0 16px;
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
