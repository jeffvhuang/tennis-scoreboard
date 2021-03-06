import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Btn from "../../common/Btn";
import { controlStyles } from "../../../styles/control-styles";

LowerButtonsRow.propTypes = {
  title: PropTypes.string.isRequired,
  faultBtnFn: PropTypes.func.isRequired,
  saveFn: PropTypes.func.isRequired
};

function LowerButtonsRow({ title, faultBtnFn, saveFn }) {
  return (
    <View style={controlStyles.buttonsRow}>
      <View style={controlStyles.leftBox}>
        <Btn
          title="Save"
          onPress={saveFn}
          style={controlStyles.saveBtn}
          textStyle={controlStyles.controlBtnText}
        />
      </View>
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
