import React from "react";
import { Picker } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../../styles/styles";

Dropdown.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  style: PropTypes.object
};

Dropdown.defaultProps = {
  style: styles.dropdown
};

function Dropdown({ selectedValue, onValueChange, items, style }) {
  return (
    <Picker
      selectedValue={selectedValue}
      style={style}
      onValueChange={onValueChange}
    >
      {items.map(item => {
        return (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        );
      })}
    </Picker>
  );
}

export default Dropdown;
