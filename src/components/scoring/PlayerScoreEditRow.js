import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { scoreStyles } from "../../styles/styles";

const propTypes = {
  player: PropTypes.string.isRequired,
  gameScore: PropTypes.number.isRequired,
  setScores: PropTypes.array.isRequired,
  onNameChange: PropTypes.func.isRequired
};

const PlayerScoreEditRow = ({ player, gameScore, setScores, onNameChange }) => {
  return (
    <View style={scoreStyles.playerRow}>
      <View style={scoreStyles.player}>
        <TextInput
          onChangeText={onNameChange}
          value={player}
          style={scoreStyles.score}
        />
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

PlayerScoreEditRow.propTypes = propTypes;

export default PlayerScoreEditRow;
