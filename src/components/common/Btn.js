import React from "react";
import { TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../../styles/styles";

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object
};

Btn.defaultProps = {
  style: styles.button,
  textStyle: styles.buttonText
};

function Btn({ title, onPress, style, textStyle }) {
  return (
    <TouchableHighlight style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableHighlight>
  );
}

export default Btn;
