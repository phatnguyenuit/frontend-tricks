export type ChangeHandler<T> = (selected: T) => any;

export type SelectIcons = {
  closeIcon: React.ReactNode;
  openIcon: React.ReactNode;
};

export interface BaseItem {
  label: string;
  value: string | number;
}

interface CustomSelectBaseProps<TItem> {
  defaultTitle: React.ReactNode;
  selection: Array<TItem>;
  multiple?: boolean;
  SelectIcons?: SelectIcons;
}

export interface CustomSelectProps<TItem>
  extends Omit<CustomSelectBaseProps<TItem>, 'multiple'> {
  selectedValue?: TItem;
  onChange: ChangeHandler<TItem>;
}

export interface CustomMultipleSelectProps<TItem>
  extends Omit<CustomSelectBaseProps<TItem>, 'multiple'> {
  selectedValue?: Array<TItem>;
  onChange: ChangeHandler<Array<TItem>>;
}
