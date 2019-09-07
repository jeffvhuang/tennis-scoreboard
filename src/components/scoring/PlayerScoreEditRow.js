import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import Dropdown from "../common/Dropdown";
import { scoreStyles } from "../../styles/styles";
import { tennisGameScores } from "../../helpers/constants";

const propTypes = {
  player: PropTypes.string.isRequired,
  gameScore: PropTypes.string.isRequired,
  setScores: PropTypes.array.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired
};

const PlayerScoreEditRow = ({
  player,
  gameScore,
  setScores,
  onNameChange,
  onGameChange,
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
        <Dropdown
          selectedValue={gameScore}
          onValueChange={onGameChange}
          items={tennisGameScores}
        />
        {/* <Text style={scoreStyles.score}>{gameScore}</Text> */}
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
