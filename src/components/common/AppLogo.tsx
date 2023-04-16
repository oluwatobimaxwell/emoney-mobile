import React, { FC } from "react";
import styled from "@emotion/native";
import Text from "./Text";

export type Layout = "signIn" | "signUp";

interface Props {
  layout?: Layout;
}

const AppLogo: FC<Props> = ({ layout = "signIn" }) => {
  return (
    <HeaderRoot layout={layout}>
      <LogoImage source={require("@images/logo-black.png")} layout={layout} />
      <Text variant="body3" text="Your No 1 Influencer Marketplace" />
    </HeaderRoot>
  );
};

export default AppLogo;

const HeaderRoot = styled.View<{
  layout: Layout;
}>`
  display: flex;
  ${({ layout }) =>
    layout === "signIn"
      ? `
    align-items: center;
    margin: 25px 0;
  `
      : `
    align-items: flex-start;
    margin-bottom: 30px;
  `}
`;

const LogoImage = styled.Image<{
  layout: Layout;
}>`
  resize-mode: contain;
  tint-color: ${({ theme }: any) =>
    theme.scheme === "light" ? "black" : "white"};
  ${({ layout }) =>
    layout === "signIn"
      ? `
    width: 250px;
    height: 50px;
    margin-bottom: 5px;
  `
      : `
    width: 150px;
    height: 40px;
  `}
`;
