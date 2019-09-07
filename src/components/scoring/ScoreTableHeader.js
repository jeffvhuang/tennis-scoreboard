import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { scoreStyles } from "../../styles/styles";

const propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

const ScoreTableHeader = ({ toggleEdit, isEditing }) => {
  const btnText = isEditing ? "Save" : "Edit";
  return (
    <View style={scoreStyles.scoresTableHeader}>
      <View style={[scoreStyles.player, scoreStyles.editContainer]}>
        <Button
          onPress={toggleEdit}
          title={btnText}
          style={scoreStyles.editButton}
          textStyle={scoreStyles.buttonText}
        />
      </View>
      <View style={scoreStyles.game}>
        <Text style={scoreStyles.scoreHeader}>Game</Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.scoreHeader}>Set 1</Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.scoreHeader}>Set 2</Text>
      </View>
      <View style={scoreStyles.set}>
        <Text style={scoreStyles.scoreHeader}>Set 3</Text>
      </View>
    </View>
  );
};

ScoreTableHeader.propTypes = propTypes;
export default ScoreTableHeader;
