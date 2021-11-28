import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Downshift from "downshift";
import Chip from "@material-ui/core/Chip";
import Check from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import Clear from "@material-ui/icons/Clear";
import ChipInput from "material-ui-chip-input";

const styles = (theme) => ({
  chipContainer: {
    backgroundColor: "transparent",
    display: "inline-block",
    marginBottom: 10,
  },
  chip: {
    marginTop: 10,
    marginRight: 5,
  },
  paper: {
    maxHeight: "150px",
    overflowY: "auto",
    position: "absolute",
    width: "100%"
  },
});

const renderInput = (inputProps) => {
  const {
    InputProps,
    classes,
    availableItems,
    selectedItem,
    onRemoveItem,
  } = inputProps;

  const allItemSelected = availableItems.length === 0;
  return (
    <ChipInput
      value={selectedItem}
      onDelete={(chip, index) => onRemoveItem(chip, index)}
      fullWidth
      label={
        allItemSelected ? "No more character to add" : "Choose a character"
      }
      disabled={allItemSelected}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...InputProps,
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

const renderChipList = (inputProps) => {
  const { classes, selectedItem, onRemoveItem } = inputProps;
  return (
    <div className={classes.chipContainer}>
      {selectedItem.length > 0 &&
        selectedItem.map((item) => (
          <Chip
            key={item}
            className={classes.chip}
            label={item}
            deleteIcon={<CancelIcon />}
            onDelete={() => onRemoveItem(item)}
            onClick={() => onRemoveItem(item)}
          />
        ))}
    </div>
  );
};

const renderSuggestion = (params) => {
  const { item, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem.indexOf(item.name) > -1;

  return (
    !isSelected && (
      <MenuItem
        {...itemProps}
        key={item.id}
        selected={isHighlighted}
        component="div"
      >
        {item.name}
      </MenuItem>
    )
  );
};

const getSuggestions = (inputValue, itemList) =>
  itemList.filter((item) => item.name.toLowerCase().includes(inputValue));

function MultiChipSelect(props) {
  const { classes, availableItems, onRemoveItem, ...rest } = props;

  return (
    <Downshift {...rest}>
      {({
        getInputProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        isOpen,
      }) => (
        <div>
          {renderInput({
            classes,
            selectedItem,
            availableItems,
            onRemoveItem,
            InputProps: {
              ...getInputProps({
                onClick: toggleMenu,
              }),
            },
          })}

          {isOpen && (
            <Paper className={classes.paper} square>
              <Box display="flex" padding={1}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Check />}
                  style={{
                    backgroundColor: "#3E4651",
                    height: 34,
                    borderRadius: 10,
                  }}
                >
                  SelectAll
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Clear />}
                  style={{
                    backgroundColor: "#3E4651",
                    height: 34,
                    borderRadius: 10,
                  }}
                >
                  clearall
                </Button>
              </Box>
              {getSuggestions(inputValue, availableItems).map((item, index) =>
                renderSuggestion({
                  item,
                  index,
                  itemProps: getItemProps({
                    item: item.name,
                  }),
                  highlightedIndex,
                  selectedItem,
                })
              )}
            </Paper>
          )}
        </div>
      )}
    </Downshift>
  );
}

export default withStyles(styles)(MultiChipSelect);
