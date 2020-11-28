import React, { useMemo } from 'react';
import clsx from 'clsx';

import CheckIcon from '@material-ui/icons/Check';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';

import { BaseItem, CustomMultipleSelectProps } from '../types';
import { DEFAULT_ICONS } from '../index';
import { useHandleMultipleSelect } from '../hooks';
import useStyles from './styles';
import baseUseStyles from '../styles';

export function CustomMultipleSelectComponent<TItem extends BaseItem>(
  props: CustomMultipleSelectProps<TItem>
) {
  const {
    defaultTitle,
    selection,
    SelectIcons: { openIcon, closeIcon } = DEFAULT_ICONS,
  } = props;
  const baseClasses = baseUseStyles();
  const classes = useStyles();
  const {
    open,
    selectedItems,
    handleToggle,
    handleSelectItem,
    isSelectedItem,
    stopPropagation,
    closeSelection,
  } = useHandleMultipleSelect(props);
  const { title, selectedLength, restLength } = useMemo(() => {
    if (selectedItems.length > 0) {
      const [firstItem, ...rest] = selectedItems;
      const title = <div className={classes.pill}>{firstItem.label}</div>;
      return {
        title,
        restLength: rest.length,
        selectedLength: selectedItems.length,
      };
    }
    return { title: defaultTitle, restLength: 0, selectedLength: 0 };
  }, [classes.pill, defaultTitle, selectedItems]);

  return (
    <ClickAwayListener onClickAway={closeSelection}>
      <div className={baseClasses.selectWrapper}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={clsx(baseClasses.selectHeader, {
            'no-value': !selectedLength,
          })}
          onClick={handleToggle}
        >
          <Grid item className={baseClasses.selectHeaderTitle}>
            {title}
          </Grid>
          <Grid item xs="auto">
            <Grid
              container
              className="icon"
              alignItems="center"
              justify="flex-end"
              spacing={1}
              wrap="nowrap"
            >
              {restLength > 0 && (
                <>
                  <Grid item>
                    <span>...</span>
                  </Grid>
                  <Grid item>
                    <span className={clsx(classes.pill, 'pill-primary')}>
                      {restLength}
                    </span>
                  </Grid>
                </>
              )}
              <Grid item>{open ? openIcon : closeIcon}</Grid>
            </Grid>
          </Grid>
        </Grid>
        {open && (
          <ul className={baseClasses.selectList} onClick={stopPropagation}>
            {selection.map((item: TItem) => {
              const isSelected = isSelectedItem(item);
              return (
                <Grid
                  container
                  component="li"
                  justify={'space-between'}
                  wrap="nowrap"
                  alignItems="center"
                  className={clsx(baseClasses.selectListItem, {
                    selected: isSelected,
                  })}
                  key={`${item.value}-${item.label}`}
                  onClick={handleSelectItem(item, isSelected)}
                >
                  <Grid item xs>
                    {item.label}
                  </Grid>
                  {isSelected && (
                    <Grid item xs={'auto'}>
                      <CheckIcon color="primary" />
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
}

const CustomMultipleSelect = React.memo(
  CustomMultipleSelectComponent
) as typeof CustomMultipleSelectComponent & React.ComponentType<any>;
CustomMultipleSelect.displayName = 'CustomMultipleSelect';
export default CustomMultipleSelect;
