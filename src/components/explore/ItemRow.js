import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import { exploreStyles } from "../../styles/explore-styles";

ItemRow.propTypes = {
  text: PropTypes.string.isRequired,
  buttonFn: PropTypes.func.isRequired
};

function ItemRow({ text, buttonFn }) {
  return (
    <View style={exploreStyles.buttonsRow}>
      <TouchableHighlight style={exploreStyles.touchable} onPress={buttonFn}>
        <Text style={exploreStyles.rowText}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ItemRow;
