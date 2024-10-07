export function calcItemsPerPage(
  list: any[],
  page: number,
  itemsPerPage: number
): any[] {
  return list.slice((page - 1) * itemsPerPage, page * itemsPerPage);
}
