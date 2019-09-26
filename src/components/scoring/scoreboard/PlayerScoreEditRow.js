import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";
import ModalSelector from "react-native-modal-selector";
import { Ionicons } from "@expo/vector-icons";
import { scoreStyles } from "../../../styles/score-styles";
import { tennisGameScores } from "../../../helpers/constants";

const propTypes = {
  player: PropTypes.string.isRequired,
  isServing: PropTypes.bool.isRequired,
  gameScore: PropTypes.string.isRequired,
  setScores: PropTypes.array.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired
};

const PlayerScoreEditRow = ({
  player,
  isServing,
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
          style={[scoreStyles.playerName, scoreStyles.input]}
        />
        <View style={scoreStyles.tennisBall}>
          {isServing && <Ionicons name="md-tennisball" size={20} />}
        </View>
      </View>
      <View style={scoreStyles.game}>
        <ModalSelector
          data={tennisGameScores}
          initValue={gameScore}
          onChange={onGameChange}
          style={scoreStyles.modalSelector}
        >
          <TextInput
            editable={false}
            value={gameScore}
            style={scoreStyles.modalScore}
          />
        </ModalSelector>
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
          value={setScores.length > 1 ? setScores[1] : ""}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
      <View style={scoreStyles.set}>
        <TextInput
          keyboardType="numeric"
          onChangeText={onScoreChange(2)}
          value={setScores.length > 2 ? setScores[2] : ""}
          style={[scoreStyles.score, scoreStyles.input]}
        />
      </View>
    </View>
  );
};

PlayerScoreEditRow.propTypes = propTypes;

export default PlayerScoreEditRow;
