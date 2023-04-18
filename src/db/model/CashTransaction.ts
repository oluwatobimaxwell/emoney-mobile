// model/Post.js
import { children, date, field, readonly } from "@nozbe/watermelondb/decorators";
import { Model } from "@nozbe/watermelondb";
import { action } from "@nozbe/watermelondb/decorators";

export default class CashTransaction extends Model {

  static table = "cash_transactions";

  static associations = {
    digital_cash: {
      type: "has_many",
      foreignKey: "cash_transaction_id",
    },
  };

  @readonly @date("date") date;
  @field("description") description;
  @field("amount") amount;
  @field("currency") currency;
  @field("type") type;
  @field("sender") sender;
  @field("receiver") receiver;
  @field("location") location;
  @field("device_info") device_info;
  @children("digital_cash") digital_cash;

  @action async getTransaction() {
    return {
      date: this.date,
      description: this.description,
      amount: this.amount,
      currency: this.currency,
      type: this.type,
      sender: this.sender,
      receiver: this.receiver,
      location: this.location,
      device_info: this.device_info,
    };
  }
}
