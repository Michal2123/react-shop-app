export function zipCodeValidation(zipCode: string): string {
  if (!/^([0-9]{2}-[0-9]{3})$/.test(zipCode)) {
    return "Invalid zip code";
  }
  return "";
}
