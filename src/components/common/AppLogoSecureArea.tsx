import React from "react";
import styled from "@emotion/native";
import Text from "./Text";

const AppLogoSecureArea = () => {
  return (
    <HeaderRoot>
      <LogoImage source={require("@images/logo-black.png")} />
      <Text variant="body3" text="Your No 1 Influencer Marketplace" />
    </HeaderRoot>
  );
};

export default AppLogoSecureArea;

const HeaderRoot = styled.View`
  display: flex;
  align-items: flex-start;
`;

const LogoImage = styled.Image`
  resize-mode: contain;
  tint-color: ${({ theme }: any) =>
  theme.scheme === "light" ? "black" : "white"};
  width: 150px;
  height: 40px;
`;
