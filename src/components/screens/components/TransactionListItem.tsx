import styled from "@emotion/native";
import React, { useMemo } from "react";
import { Transaction, TransactionType } from "../../../types/transaction";
import Text from "../../common/Text";
import ImageIcon from "../../common/ImageIcon";
import { formatCurrency } from "../../../utils/formatCurrency";

interface Props {
  transaction: Transaction;
  isLast: boolean;
}

const TransactionListItem = ({ transaction, isLast }: Props) => {

    const transactionIcon = useMemo(() => {
        if (transaction.type === TransactionType.EXPENSE) return "arrow-right";
        else if (transaction.type === TransactionType.INCOME) return "arrow-left";
        else return "time";
    }, [transaction.type])
  return (
    <Root>
      <Left>
        <ImageIcon name={transactionIcon} size={15} />
      </Left>
      <Right isLast={isLast}>
        <Details>
          <Text text={transaction.senderOrReceiver} variant="body1Bold" />
          <Text text={transaction.description} variant="body1" />
        </Details>
        <ValueWrap>
          <Text
            text={`${formatCurrency(transaction.amount)} ${
              transaction.type === TransactionType.EXPENSE ? "-" : "+"
            }`}
            variant="body1Bold"
            align="right"
          />
        </ValueWrap>
      </Right>
    </Root>
  );
};

export default TransactionListItem;

const Root = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  background: ${({ theme }: any) => theme.colors.primary};
`;

const Details = styled.View`
  flex: 1;
`;

const Left = styled.View`
  padding: 10px;
  opacity: 0.5;
  border-radius: 50%;
  background: ${({ theme }: any) => theme.lightenBlack(0.1)};
  margin-left: 16px;
`;

const Right = styled.View<{
  isLast: boolean;
}>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: ${({ isLast }: any) => (isLast ? "0" : "1")}px;
  border-bottom-color: ${({ theme }: any) => theme.lightenBlack(0.1)};
  padding: 16px 0;
`;

const ValueWrap = styled.View`
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`;
