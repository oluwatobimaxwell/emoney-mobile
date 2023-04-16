import styled from "@emotion/native";
import hexToRgba from "hex-to-rgba";
import React, { FC } from "react";
import { theme } from "../../config/theme";
import Text from "./Text";

interface Props {
  thickness?: number;
  text?: string;
  spacing?: keyof typeof theme.spacing,
}

const Divider: FC<Props> = ({ thickness = 1, text, spacing = "md" }) => {
  return (
    <Root spacing={spacing}>
      <Line height={thickness} />
      {text && (
        <>
          <Text text={`  ${text}  `} />
          <Line height={thickness} />
        </>
      )}
    </Root>
  );
};

export default Divider;

const Root = styled.View<{
    spacing: string;
}>`
  padding: ${({ theme, spacing }: any) => `${theme.spacing[spacing] || 20}`}px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Line = styled.View<{
  height: number;
}>`
  height: ${({ height }: any) => `${height}`}px;
  background: ${({ theme }: any) => theme.lightenBlack(0.1)};
  flex: 1;
`;
