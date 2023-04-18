// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { action, date, readonly, relation, field } from '@nozbe/watermelondb/decorators';

export default class DigitalCash extends Model {
  static table = 'digital_cash'
  static associations = {
    cash_transactions: {
      type: "belongs_to",
      key: "cash_transaction_id",
    },
  };

  @field("cash_id") cash_id;
  @field("amount") amount;
  @field("issuing_authority") issuing_authority;
  @field("currency_type") currency_type;
  @field("signature") signature;
  @relation("cash_transactions", "cash_transaction_id") cash_transactions;
  @readonly @date("created_at") created_at;
  @readonly @date("updated_at") updated_at;
  @field("cash_transaction_id") cash_transaction_id;

  @action async getCash(){
    return {
      cash_id: this.cash_id,
      amount: this.amount,
      issuing_authority: this.issuing_authority,
      currency_type: this.currency_type,
      signature: this.signature,
      created_at: this.created_at,
      updated_at: this.updated_at,
      cash_transaction_id: this.cash_transaction_id
    }
  }
}
