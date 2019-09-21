import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Btn from "../common/Btn";
import { controlStyles } from "../../styles/control-styles";

LowerButtonsRow.propTypes = {
  title: PropTypes.string.isRequired,
  faultBtnFn: PropTypes.func.isRequired
};

function LowerButtonsRow({ title, faultBtnFn }) {
  return (
    <View style={controlStyles.buttonsRow}>
      <View style={controlStyles.leftBox}></View>
      <View style={controlStyles.midBox}></View>
      <View style={controlStyles.rightBox}>
        <Btn
          title={title}
          onPress={faultBtnFn}
          style={controlStyles.controlBtn}
          textStyle={controlStyles.controlBtnText}
        />
      </View>
    </View>
  );
}

export default LowerButtonsRow;
