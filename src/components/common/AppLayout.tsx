import styled from "@emotion/native";
import hexToRgba from "hex-to-rgba";
import React, { FC, useRef } from "react";
import { RefreshControl, ScrollView as RNScrollView } from "react-native";
import {
  PageContextProvider,
  usePageContext,
} from "../../contexts/AppLayoutContext";
import { useScrollEndCallback } from "../../hooks/useScrollEndCallback";

interface Props {
  children: React.ReactNode;
  onEndReach?: () => void;
  isRefreshing?: boolean;
  onRefresh?: () => void;
}

const AppLayout: FC<Props> = ({ children, isRefreshing, onRefresh }) => {
  const scrollViewRef = useRef<RNScrollView>(null);

  const { setCurrentPage } = usePageContext();

  const { handleScroll, handleContentSizeChange } = useScrollEndCallback({
    onEndReach: setCurrentPage,
    scrollViewRef,
  });

  return (
    <SaveArea>
      <Root>
        <ScrollView
          horizontal={false}
          onScroll={handleScroll}
          onContentSizeChange={handleContentSizeChange}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={!!isRefreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <ContentRoot>{children}</ContentRoot>
        </ScrollView>
      </Root>
    </SaveArea>
  );
};

export default (props: Props) => (
  <PageContextProvider>
    <AppLayout {...props} />
  </PageContextProvider>
);

const SaveArea = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }: any) => theme.colors.primary};
`;

const Root = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: -50px;
  padding-top: 50px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

const ContentRoot = styled.View`
  flex: 1;
`;

const HeaderRoot = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: any) =>
    hexToRgba(theme.colors.primary, 0.1)};
`;
