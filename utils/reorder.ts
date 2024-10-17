export function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const res = Array.from(list);
  const [removed] = res.splice(startIndex, 1);
  res.splice(endIndex, 0, removed);
  return res;
}
