export function isApiItem(item: ApiItem | ApiList<ApiItem>): item is ApiItem {
  return !Object.prototype.hasOwnProperty.call(item, 'items');
}
