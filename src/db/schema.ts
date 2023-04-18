import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "digital_cash",
      columns: [
        { name: "cash_id", type: "string" },
        { name: "amount", type: "number" },
        { name: "issuing_authority", type: "string" },
        { name: "currency_type", type: "string" },
        { name: "signature", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
        { name: "cash_transaction_id", type: "number", isIndexed: true },
      ],
    }),
    tableSchema({
      name: "cash_transactions",
      columns: [
        { name: "date", type: "string" },
        { name: "description", type: "string", isOptional: true },
        { name: "amount", type: "number" },
        { name: "currency", type: "string" },
        { name: "type", type: "string" },
        { name: "sender", type: "string" },
        { name: "receiver", type: "string" },
        { name: "location", type: "string" }, // Added location details column
        { name: "device_info", type: "string" }, // Added device information column
      ],
    }),
  ],
});
