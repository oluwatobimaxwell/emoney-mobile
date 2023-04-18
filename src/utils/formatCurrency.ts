export function formatCurrency(
  amount: number,
  currencySymbol: string = "₦",
  decimalPlaces: number = 2,
  locale: string = "en-US"
): string {
  return (
    currencySymbol +" "+
    amount.toLocaleString(locale, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    })
  );
}
