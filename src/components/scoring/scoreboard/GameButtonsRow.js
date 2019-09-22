import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Btn from "../../common/Btn";
import { controlStyles } from "../../../styles/control-styles";

const propTypes = {
  score1: PropTypes.string.isRequired,
  score2: PropTypes.string.isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired
};

const GameButtons = ({ score1, score2, incrementScore, decrementScore }) => {
  return (
    <View style={controlStyles.gameControlRow}>
      <View style={controlStyles.gameControls}>
        <Btn
          title="-"
          onPress={decrementScore(1)}
          style={controlStyles.decrementBtn}
          textStyle={controlStyles.decrementBtnText}
        />
        <Btn
          title={score1}
          onPress={incrementScore(1)}
          style={controlStyles.incrementBtn}
          textStyle={controlStyles.incrementBtnText}
        />
        <Btn
          title={score2}
          onPress={incrementScore(2)}
          style={controlStyles.incrementBtn}
          textStyle={controlStyles.incrementBtnText}
        />
        <Btn
          title="-"
          onPress={decrementScore(2)}
          style={controlStyles.decrementBtn}
          textStyle={controlStyles.decrementBtnText}
        />
      </View>
    </View>
  );
};

GameButtons.propTypes = propTypes;
export default GameButtons;
