import React from "react";
import { View, Text } from "react-native";
import { scoreStyles } from "../../styles/styles";

const ScoreTableHeader = () => {
  return (
    <View style={scoreStyles.scoresTableHeader}>
      <View style={scoreStyles.player} />
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

export default ScoreTableHeader;
