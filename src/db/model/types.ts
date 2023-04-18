export interface DigitalCash {
  id?: string;
  cash_id: string;
  amount: number;
  issuing_authority: string;
  currency_type: string;
  signature: string;
  created_at: Date;
  updated_at: Date;
  cash_transaction_id: string;
}

export interface CashTransaction {
  id?: string;
  date: Date;
  description: string;
  amount: number;
  currency: string;
  type: string;
  sender: string;
  receiver: string;
  location: string;
  device_info: string;
}
