export function GetDateString(): string {
  const today = new Date();
  return `${today.getDay()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
}
