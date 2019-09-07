import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { scoreStyles } from "../../styles/styles";

const propTypes = {
  player: PropTypes.string.isRequired,
  gameScore: PropTypes.number.isRequired,
  setScores: PropTypes.array.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired
};

const PlayerScoreEditRow = ({
  player,
  gameScore,
  setScores,
  onNameChange,
  onScoreChange
}) => {
  return (
    <View style={scoreStyles.playerRow}>
      <View style={scoreStyles.player}>
        <TextInput
          onChangeText={onNameChange}
          value={player}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
      <View style={scoreStyles.game}>
        {/* <TextInput
          onChangeText={onGameChange}
          value={gameScore}
          style={[scoreStyles.score, scoreStyles.input]}
        /> */}
        <Text style={scoreStyles.score}>{gameScore}</Text>
      </View>
      <View style={scoreStyles.set}>
        <TextInput
          keyboardType="numeric"
          onChangeText={onScoreChange(0)}
          value={setScores.length && setScores[0]}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
      <View style={scoreStyles.set}>
        <TextInput
          keyboardType="numeric"
          onChangeText={onScoreChange(1)}
          value={setScores.length > 1 && setScores[1]}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
      <View style={scoreStyles.set}>
        <TextInput
          keyboardType="numeric"
          onChangeText={onScoreChange(2)}
          value={setScores.length > 2 && setScores[2]}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
    </View>
  );
};

PlayerScoreEditRow.propTypes = propTypes;

export default PlayerScoreEditRow;
