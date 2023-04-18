import { v4 as uuidv4 } from 'uuid';
import { CashDAO } from "..";
import { DigitalCash } from "../model/types";

export const createCash = async () => {
    const digitalCash: DigitalCash = {
        cash_id: uuidv4(),
        amount: 100, // Set a fixed or random value as needed
        issuing_authority: 'Bank of Example', // Set the issuing authority
        currency_type: 'USD', // Set the currency type
        signature: 'SampleSignature', // Set the digital signature
        created_at: new Date(), // Set the current date and time
        updated_at: new Date(), // Set the current date and time
        cash_transaction_id: 'TXN12345', // Set the associated cash transaction ID
      };
    
    return await CashDAO.createCash(digitalCash);
};
