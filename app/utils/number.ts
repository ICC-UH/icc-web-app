/**
 * @param num the number to shorten
 * @param digits the number of digits to keep after the decimal point
 * @returns a string of the number with a shortened unit (e.g. 1000 -> 1k)
 */
export function shortenNumber(num: number, digits: number = 1) {
  const units = ["k", "M", "B", "T", "Q"];
  if (num < 1000) return num?.toString();

  const unit = Math.floor(Math.log10(num) / 3);
  const divisor = Math.pow(1000, unit);
  let scaled = num / divisor;

  const factor = Math.pow(10, digits);
  scaled = Math.trunc(scaled * factor) / factor;

  return `${scaled}${units[unit - 1]}`;
}

export function trimDecimals(num: number, maxDecimal?: number) {
  if (maxDecimal === undefined) {
    return num;
  }
  return parseFloat(num.toFixed(maxDecimal));
}
