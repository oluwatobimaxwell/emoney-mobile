import styled from "@emotion/native";
import React from "react";
import WalletCard from "./components/WalletCard";
import AppLayout from "../common/AppLayout";
import RecentTransaction from "./components/RecentTransaction";

const DashboardScreen = () => {
  return (
    <AppLayout>
      <Root>
        <WalletCard />
        <RecentTransaction />
      </Root>
    </AppLayout>
  );
};

export default DashboardScreen;

const Root = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
