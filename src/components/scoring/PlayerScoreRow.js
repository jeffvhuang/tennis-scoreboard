import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { scoreStyles } from "../../styles/styles";

const propTypes = {
  player: PropTypes.string.isRequired,
  gameScore: PropTypes.string.isRequired,
  setScores: PropTypes.array.isRequired
};

const PlayerScoreRow = ({ player, gameScore, setScores }) => {
  return (
    <View style={scoreStyles.playerRow}>
      <View style={scoreStyles.player}>
        <Text style={scoreStyles.score}>{player}</Text>
      </View>
      <View style={scoreStyles.game}>
        <Text style={scoreStyles.score}>{gameScore}</Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.score}>
          {setScores.length && setScores[0]}
        </Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.score}>
          {setScores.length > 1 && setScores[1]}
        </Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.score}>
          {setScores.length > 2 && setScores[2]}
        </Text>
      </View>
    </View>
  );
};

PlayerScoreRow.propTypes = propTypes;

export default PlayerScoreRow;
