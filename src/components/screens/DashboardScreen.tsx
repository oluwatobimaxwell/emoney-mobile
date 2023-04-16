import styled from "@emotion/native";
import React from "react";
import Text from "../common/Text";

const DashboardScreen = () => {
  return (
    <Root>
      <Text text="Dashboard Screen" />
    </Root>
  );
};

export default DashboardScreen;

const Root = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
