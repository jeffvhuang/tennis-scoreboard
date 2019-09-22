import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import ControlsTextView from "./ControlsTextView";
import { controlStyles } from "../../../styles/control-styles";

ControlsNameRow.propTypes = {
  winnerNum: PropTypes.number.isRequired,
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired
};

function ControlsNameRow({ winnerNum, player1, player2 }) {
  let winner = winnerNum == 1 ? player1 : player2;

  return (
    <View style={controlStyles.nameRow}>
      {winnerNum > 0 ? (
        <ControlsTextView text={`${winner} Wins`} />
      ) : (
        <>
          <ControlsTextView text={player1} />
          <ControlsTextView text={player2} />
        </>
      )}
    </View>
  );
}

export default ControlsNameRow;
