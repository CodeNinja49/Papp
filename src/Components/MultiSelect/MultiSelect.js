import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListSubheader from "@material-ui/core/ListSubheader";
import matchSorter from "match-sorter";

import ExpandMore from "@material-ui/icons/ExpandMore";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { VariableSizeList } from "react-window";

import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import GreyCheckbox from "../../Components/GreyCheckbox";
import "./MultiSelect.scss";

const LISTBOX_PADDING = 8; // px
const filter = (options, { inputValue, displayLabelName }) => {
  return matchSorter(options, inputValue, {
    keys: [displayLabelName],
    threshold: matchSorter.rankings.CONTAINS,
  });
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function renderRow(props) {
  const { data, index, style } = props;
  const { itemData, clearAllList, selectAll } = data;
  return (
    <>
      {!index && (
        <li
          className="MuiAutocomplete-option Button-Option"
          style={{
            ...style,
            top: style.top + LISTBOX_PADDING,
          }}
        >
          <Box display="flex" padding={1}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Check />}
              style={{
                backgroundColor: "#3E4651",
                height: 28,
                borderRadius: 10,
                textTransform: "none",
                fontSize: 11,
              }}
              onClick={selectAll}
            >
              Select All
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Clear />}
              style={{
                backgroundColor: "#3E4651",
                height: 28,
                borderRadius: 10,
                textTransform: "none",
                fontSize: 11,
                marginLeft: 5,
              }}
              onClick={clearAllList}
            >
              Clear All
            </Button>
          </Box>
        </li>
      )}
      {React.cloneElement(itemData[index], {
        style: {
          ...style,
          top: style.top + 42 + LISTBOX_PADDING,
        },
      })}
    </>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const {
    children,
    clearAllList,
    selectAll,
    displayLabelName,
    ...other
  } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 4 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={{
            itemData: itemData,
            clearAllList,
            selectAll,
            displayLabelName,
          }}
          height={getHeight() + 2 * 27}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const useStyles = makeStyles({
  listbox: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

export default function MultiSelect({
  label,
  value,
  setValue,
  inputValue,
  setInputValue,
  disable,
  OPTIONS,
  displayLabelName,
  isLimittag,
  multiple = true,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const limitTags = smDown ? 2 : 3;
  const clearAllList = () => {
    setValue([]);
  };
  const selectAll = () => {
    // Array.from(new Set(yourArray.map((item: any) => item.id)))
    const filterOptions = filter(OPTIONS, { inputValue, displayLabelName });
    if (filterOptions.length > 0) {
      const allSelectedOption = Array.from(
        new Set([...value, ...filterOptions])
      );
      setValue(allSelectedOption);
    }
  };

  return (
    <Autocomplete
      id="virtualize-demo"
      className="MultiSelect"
      disabled={disable}
      value={value}
      filterOptions={() => filter(OPTIONS, { inputValue, displayLabelName })}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      multiple={multiple}
      limitTags={isLimittag ? limitTags : -1}
      getOptionLabel={(option) => option[displayLabelName]}
      classes={classes}
      ListboxComponent={ListboxComponent}
      ListboxProps={{ clearAllList, selectAll, displayLabelName }}
      options={OPTIONS}
      disableCloseOnSelect
      closeText=""
      popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          color="#3F4752"
          placeholder="Select Project Code"
          style={{ color: "#3F4752" }}
          InputLabelProps={{
            shrink: true,
          }}
          className="MultiSelect_input"
        />
      )}
      renderOption={(option, { selected }) => (
        <>
          <GreyCheckbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option[displayLabelName]}
        </>
      )}
    />
  );
}
