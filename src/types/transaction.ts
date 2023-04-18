// transaction.ts

export enum TransactionType {
    INCOME = "income",
    EXPENSE = "expense",
    PENDING = "pending"
}
export interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    currency: string;
    type: TransactionType;
    senderOrReceiver: string; // Add this line
  }
  