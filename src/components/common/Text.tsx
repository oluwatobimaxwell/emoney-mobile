import styled from "@emotion/native";
import React, { FC } from "react";
import { StyleProp, TextStyle } from "react-native";
import { theme } from "../../config/theme";

const textStyles = {
  h1: { fontSize: 32, fontFamily: "ExtraBold", lineHeight: 40 },
  h2: { fontSize: 28, fontFamily: "Bold", lineHeight: 36 },
  h3: { fontSize: 24, fontFamily: "Bold", lineHeight: 32 },
  h4: { fontSize: 20, fontFamily: "Medium", lineHeight: 28 },
  h4Bold: { fontSize: 20, fontFamily: "Bold", lineHeight: 28 },
  h5: { fontSize: 18, fontFamily: "Regular", lineHeight: 24 },
  h6: { fontSize: 16, fontFamily: "Regular", lineHeight: 22 },
  h6Bold: { fontSize: 16, fontFamily: "Bold", lineHeight: 22 },
  body1: { fontSize: 14, fontFamily: "Regular", lineHeight: 20 },
  body1Bold: { fontSize: 14, fontFamily: "Bold", lineHeight: 20 },
  body2: { fontSize: 12, fontFamily: "Regular", lineHeight: 18 },
  body3: { fontSize: 10, fontFamily: "Regular", lineHeight: 16 },
};

interface Props {
  variant?: keyof typeof textStyles;
  text: string;
  style?: StyleProp<TextStyle>;
  color?: keyof typeof theme.colors;
  align?: "center" | "left" | "right" | "justify";
  spacing?: keyof typeof theme.spacing;
  underlined?: boolean;
  lines?: number;
}

const Text: FC<Props> = ({
  variant = "body1",
  color = "black",
  align = "left",
  spacing,
  text,
  style = {},
  underlined,
  lines,
}) => {
  return (
    <StyledText
      color={color}
      spacing={spacing}
      style={[
        {
          ...textStyles[variant],
          ...{ textAlign: align },
          ...(underlined ? { textDecorationLine: "underline" } : {}),
        },
        style
      ]}
      numberOfLines={lines}
    >
      {text}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.Text<{
  color: string;
  spacing: string | undefined;
}>`
  font-family: Regular;
  color: ${({ color, theme }: any) =>
    theme.colors[color] || theme.colors.black};
  margin-bottom: ${({ spacing, theme }: any) =>
    `${theme.spacing[spacing] || 0}`}px;
`;
