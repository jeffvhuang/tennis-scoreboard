import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { controlStyles } from "../../styles/control-styles";

ControlsTextView.propTypes = {
  text: PropTypes.string.isRequired
};

function ControlsTextView({ text }) {
  return (
    <View style={controlStyles.playerNameView}>
      <Text style={controlStyles.text}>{text}</Text>
    </View>
  );
}

export default ControlsTextView;
