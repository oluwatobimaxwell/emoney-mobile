import styled from "@emotion/native";
import React, { useId } from "react";
import { Transaction, TransactionType } from "../../../types/transaction";
import TransactionListItem from "./TransactionListItem";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const transactions: Transaction[] = [
    {
      id: 1,
      date: '2023-04-01',
      description: 'Salary',
      amount: 5000,
      currency: 'USD',
      type: TransactionType.PENDING,
      senderOrReceiver: 'Company XYZ',
    },
    {
      id: 2,
      date: '2023-04-05',
      description: 'Groceries',
      amount: 200,
      currency: 'USD',
      type: TransactionType.EXPENSE,
      senderOrReceiver: 'Supermarket',
    },
    {
      id: 3,
      date: '2023-04-10',
      description: 'Rent',
      amount: 1500,
      currency: 'USD',
      type: TransactionType.EXPENSE,
      senderOrReceiver: 'Landlord',
    },
    {
      id: 4,
      date: '2023-04-15',
      description: 'Freelance Work',
      amount: 1200,
      currency: 'USD',
      type: TransactionType.INCOME,
      senderOrReceiver: 'Client ABC',
    },
    {
      id: 5,
      date: '2023-04-20',
      description: 'Dinner',
      amount: 100,
      currency: 'USD',
      type: TransactionType.EXPENSE,
      senderOrReceiver: 'Restaurant',
    },
    {
      id: 6,
      date: '2023-04-25',
      description: 'Utilities',
      amount: 150,
      currency: 'USD',
      type: TransactionType.EXPENSE,
      senderOrReceiver: 'Utility Company',
    },
  ];

const RecentTransaction = () => {
  const id = useId();
  return (
    <Root>
      {transactions.map((transaction, i) => (
        <TransactionListItem
          key={`${id}-transaction-${i}`}
          transaction={transaction}
          isLast={i === transactions.length - 1}
        />
      ))}
    </Root>
  );
};

export default RecentTransaction;

const Root = styled.View`
  flex: 1;
  width: ${`${width - 32}`}px;
  margin: 16px;
  border-radius: 10px;
  overflow: hidden;
  border-width: 2px;
  border-color: ${({ theme }: any) => theme.lightenBlack(0.1)};
`;
