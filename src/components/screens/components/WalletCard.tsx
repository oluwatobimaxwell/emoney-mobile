import styled from "@emotion/native";
import React from "react";
import withObservables from "@nozbe/with-observables";
import Text from "../../common/Text";
import Button from "../../common/Button";
import ImageIcon from "../../common/ImageIcon";
import { useAppTheme } from "../../../contexts/useTheme";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useCreateDigitalCash } from "../../../db/hooks/useCreateDigitalCash";

const WalletCard = () => {
  const theme = useAppTheme();
  // const createCash = useCreateDigitalCash();

  // const handleCreateCash = () => {
  //   createCash.mutate(undefined, {
  //     onSuccess: (d) => {
  //       console.log("SUCCESS: ", d);
  //     },
  //     onError: (e) => {
  //       console.log("ERROR: ", e);
  //     },
  //   });
  // };

  return (
    <Root>
      <Summary>
        <Text
          text={formatCurrency(21309)}
          variant="h4"
          style={{ fontSize: 40, lineHeight: 40 }}
        />
        <Text text="Account Balance" variant="body1" />
      </Summary>
      <Controls>
        <Button
          onPress={() => null}
          text="Receive"
          variant="light"
          textVariant="body1Bold"
          iconLeftComponet={
            <ImageIcon
              name="wallet"
              size={20}
              tint={theme.scheme === "dark" ? "black" : "white"}
            />
          }
        />
        <Button
          onPress={() => null}
          text="Pay"
          variant="outlined"
          textVariant="body1Bold"
          iconLeftComponet={
            <ImageIcon
              name="cart"
              size={20}
              color={theme.scheme === "dark" ? "white" : "black"}
            />
          }
        />
      </Controls>
    </Root>
  );
};

const enhance = withObservables(["digital_cash"], ({ digital_cash }) => ({
  digital_cash,
}));

export default enhance(WalletCard);

const Root = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 50px;
`;

const Controls = styled.View`
  margin-top: 16px;
  flex-direction: row;
  gap: 16px;
`;

const Summary = styled.View`
  align-items: center;
  justify-content: center;
  margin-top" 50px;
`;
