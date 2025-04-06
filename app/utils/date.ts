/**
 *
 * @param date - The date to format
 * @returns - Formatted date in the format "March 1, 2023"
 */
export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
