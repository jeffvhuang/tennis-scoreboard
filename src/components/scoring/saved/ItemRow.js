import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import { scoreStyles } from "../../../styles/score-styles";

ItemRow.propTypes = {
  buttonFn: PropTypes.func.isRequired,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string
};

function ItemRow({ buttonFn, text1, text2, text3 }) {
  return (
    <TouchableHighlight style={scoreStyles.touchable} onPress={buttonFn}>
      <View style={scoreStyles.touchableView}>
        <Text style={[scoreStyles.itemText, { flex: 2 }]}>{text1}</Text>
        <Text style={[scoreStyles.itemText, { flex: 4 }]}>{text2}</Text>
        <Text style={[scoreStyles.itemText, { flex: 3 }]}>{text3}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ItemRow;
