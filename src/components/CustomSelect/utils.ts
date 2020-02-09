import { BaseItem } from './types';

export const isEqual = <TItem extends BaseItem>(item: TItem, item2?: TItem) => {
  if (!item2) return false;
  return [item.label === item2.label, item.value === item2.value].every(
    Boolean,
  );
};
