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
  SelectIcons?: SelectIcons;
}

export interface CustomSelectProps<TItem> extends CustomSelectBaseProps<TItem> {
  selectedItem?: TItem;
  onChange: ChangeHandler<TItem>;
}

export interface CustomMultipleSelectProps<TItem>
  extends CustomSelectBaseProps<TItem> {
  selectedItem?: Array<TItem>;
  onChange: ChangeHandler<Array<TItem>>;
}
