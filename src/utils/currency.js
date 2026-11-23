// Demo exchange rate: 1 USD = ₦1,400
// Change this value whenever you want to update the rate.

export const USD_TO_NGN = 1400;

export function formatNaira(usdAmount) {
  const nairaAmount = Number(usdAmount) * USD_TO_NGN;

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(nairaAmount);
}