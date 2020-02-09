import React, { useMemo } from 'react';
import clsx from 'clsx';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import { BaseItem, CustomSelectProps, SelectIcons } from './types';
import { useHandleSelect } from './hooks';
import useStyles from './styles';

export const DEFAULT_ICONS: SelectIcons = {
  closeIcon: <KeyboardArrowDown />,
  openIcon: <KeyboardArrowUp />,
};

export function CustomSelectComponent<TItem extends BaseItem>(
  props: CustomSelectProps<TItem>,
) {
  const {
    defaultTitle,
    selection,
    SelectIcons: { openIcon, closeIcon } = DEFAULT_ICONS,
  } = props;
  const classes = useStyles();
  const {
    open,
    handleToggle,
    handleSelectItem,
    isSelectedItem,
    stopPropagation,
    closeSelection,
    selectedItem,
  } = useHandleSelect(props);
  const title = useMemo(() => selectedItem?.label || defaultTitle, [
    defaultTitle,
    selectedItem,
  ]);

  return (
    <ClickAwayListener onClickAway={closeSelection}>
      <div className={classes.selectWrapper}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={clsx(classes.selectHeader, {
            'no-value': !selectedItem,
          })}
          onClick={handleToggle}
        >
          <Grid item className={classes.selectHeaderTitle}>
            {title}
          </Grid>
          <Grid item xs="auto">
            {open ? openIcon : closeIcon}
          </Grid>
        </Grid>
        {open && (
          <ul className={classes.selectList} onClick={stopPropagation}>
            {selection.map((item: TItem) => {
              const isSelected = isSelectedItem(item);
              return (
                <Grid
                  container
                  component="li"
                  justify={'space-between'}
                  wrap="nowrap"
                  alignItems="center"
                  className={clsx(classes.selectListItem, {
                    selected: isSelected,
                  })}
                  key={`${item.value}-${item.label}`}
                  onClick={handleSelectItem(item)}
                >
                  <Grid item>{item.label}</Grid>
                </Grid>
              );
            })}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
}

const CustomSelect = React.memo(
  CustomSelectComponent,
) as typeof CustomSelectComponent & React.ComponentType<any>;
CustomSelect.displayName = 'CustomSelect';
export default CustomSelect;

export * from './types';
export { default as CustomMultipleSelect } from './CustomMultipleSelect';
