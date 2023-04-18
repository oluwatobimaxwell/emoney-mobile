// Import the necessary modules and interfaces
import { Collection } from "@nozbe/watermelondb";
import { database } from "../db";
import DigitalCashModel from "../model/DigitalCash";
import { DigitalCash } from "../model/types";

// Get the collection
const cash: Collection<DigitalCashModel> =
  database.collections.get("digital_cash");

// Define the methods for the default export
const DigitalCashService = {
  observeCash: () => cash.query().observe(),
  createCash: async (cashData: DigitalCash) => {
    await database.action(async () => {
      await cash.create((digitalCash: DigitalCashModel) => {
        digitalCash.cash_id = cashData.cash_id;
        digitalCash.amount = cashData.amount;
        digitalCash.issuing_authority = cashData.issuing_authority;
        digitalCash.currency_type = cashData.currency_type;
        digitalCash.signature = cashData.signature;
        digitalCash.created_at = cashData.created_at;
        digitalCash.updated_at = cashData.updated_at;
        digitalCash.cash_transaction_id = cashData.cash_transaction_id;
      });
    });
  },
};

// Export the service object
export default DigitalCashService;
