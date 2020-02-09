import { useState, useCallback } from 'react';
import {
  BaseItem,
  CustomSelectProps,
  CustomMultipleSelectProps,
} from './types';
import { isEqual } from './utils';

export const useSelect = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const stopPropagation = useCallback<
    React.MouseEventHandler<HTMLUListElement>
  >((e) => e.stopPropagation(), []);
  const closeSelection = useCallback(() => setOpen(false), []);

  return {
    open,
    setOpen,
    handleToggle,
    closeSelection,
    stopPropagation,
  };
};

export const useHandleSelect = <TItem extends BaseItem>(
  props: CustomSelectProps<TItem>,
) => {
  const { onChange, selectedItem: defaultSelectedItem } = props;
  const {
    open,
    setOpen,
    handleToggle,
    closeSelection,
    stopPropagation,
  } = useSelect();
  const [selectedItem = defaultSelectedItem, setSelectedItem] = useState<
    TItem
  >();
  const handleSelectItem = useCallback(
    (item: TItem) => () => {
      setOpen(false);
      setSelectedItem(item);
      onChange(item);
    },
    [onChange, setOpen],
  );
  const isSelectedItem = useCallback(
    (item: TItem) => isEqual(item, selectedItem),
    [selectedItem],
  );
  return {
    open,
    selectedItem,
    isSelectedItem,
    setOpen,
    handleToggle,
    handleSelectItem,
    closeSelection,
    stopPropagation,
  };
};

export const useHandleMultipleSelect = <TItem extends BaseItem>(
  props: CustomMultipleSelectProps<TItem>,
) => {
  const { onChange, selectedItem: defaultSelectedItem = [] } = props;
  const {
    open,
    setOpen,
    handleToggle,
    closeSelection,
    stopPropagation,
  } = useSelect();
  const [selectedItems = [], setSelectedItems] = useState<Array<TItem>>(
    defaultSelectedItem,
  );
  const handleSelectItem = useCallback(
    (item: TItem, selected: boolean = false) => () => {
      let toUpdateItems = [...selectedItems];
      if (selected) {
        toUpdateItems = toUpdateItems.filter((i) =>
          [i.label !== item.label, i.value !== item.value].some(Boolean),
        );
      } else {
        toUpdateItems.push(item);
      }
      setSelectedItems(toUpdateItems);
      onChange(toUpdateItems);
    },
    [onChange, selectedItems],
  );
  const isSelectedItem = useCallback(
    (item: TItem) => {
      return selectedItems.includes(item);
    },
    [selectedItems],
  );
  return {
    open,
    selectedItems,
    isSelectedItem,
    setOpen,
    handleToggle,
    handleSelectItem,
    closeSelection,
    stopPropagation,
  };
};
