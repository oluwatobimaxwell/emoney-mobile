import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useAppTheme } from "../../contexts/useTheme";
import ImageIcon from "./ImageIcon";

interface Props {
  negate?: boolean;
}

const BackButton = ({ negate }: Props) => {
  const theme = useAppTheme();
  const mainNav = useNavigation<any>();
  return (
    <Root onPress={() => mainNav.goBack()} negate={negate}>
      <ImageIcon
        name="arrow-left"
        tint={theme.scheme === "dark" ? "white" : "black"}
      />
    </Root>
  );
};

export default BackButton;

const Root = styled.TouchableOpacity<{
  negate?: boolean;
}>`
  background: ${({ theme, negate }: any) => negate ? theme.lightenBlack(0.2) : theme.lightenWhite(0.2)};
  width: 40px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
`;
