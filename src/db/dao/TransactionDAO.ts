// Import the necessary modules and interfaces
import { Model, Database, Collection } from "@nozbe/watermelondb";
import { database } from "../db";
import CashTransactionModel from "../model/CashTransaction";
import { CashTransaction } from "../model/types";

// Get the collection
const transactions: Collection<CashTransactionModel> =
  database.collections.get("cash_transactions");

// Define the methods for the default export
const CashTransactionService = {
  observeTransactions: () => transactions.query().observe(),
  createTransaction: async (transactionData: CashTransaction) => {
    await database.action(async () => {
      await transactions.create((transaction: CashTransactionModel) => {
        transaction.date = transactionData.date;
        transaction.description = transactionData.description;
        transaction.amount = transactionData.amount;
        transaction.currency = transactionData.currency;
        transaction.type = transactionData.type;
        transaction.sender = transactionData.sender;
        transaction.receiver = transactionData.receiver;
        transaction.location = transactionData.location;
        transaction.device_info = transactionData.device_info;
      });
    });
  },
};

export default CashTransactionService;
