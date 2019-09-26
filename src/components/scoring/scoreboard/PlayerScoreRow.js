import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { scoreStyles } from "../../../styles/score-styles";

const propTypes = {
  player: PropTypes.string.isRequired,
  isServing: PropTypes.bool.isRequired,
  gameScore: PropTypes.string.isRequired,
  setScores: PropTypes.array.isRequired
};

const PlayerScoreRow = ({ player, isServing, gameScore, setScores }) => {
  return player ? (
    <View style={scoreStyles.playerRow}>
      <View style={scoreStyles.player}>
        <Text style={scoreStyles.playerName}>{player}</Text>
        <View style={scoreStyles.tennisBall}>
          {isServing && <Ionicons name="md-tennisball" size={20} />}
        </View>
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
  ) : null;
};

PlayerScoreRow.propTypes = propTypes;

export default PlayerScoreRow;
