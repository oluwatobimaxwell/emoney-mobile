import styled from "@emotion/native";
import React from "react";
import Text from "../common/Text";

const TransactionsScreen = () => {
  return (
    <Root>
      <Text text="Transactions Screen" />
    </Root>
  );
};

export default TransactionsScreen;

const Root = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
