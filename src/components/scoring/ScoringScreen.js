import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";

import { styles, scoreStyles } from "../../styles/styles";
import ScoreTableHeader from "./ScoreTableHeader";
import PlayerScoreRow from "./PlayerScoreRow";

class ScoringScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: props.navigation.getParam("player1", "player 1"),
      player2: props.navigation.getParam("player2", "player 2"),
      currentSet: 1,
      gameScore1: 40,
      gameScore2: 15,
      scores1: [6, 6, 1],
      scores2: [3, 7, 1]
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={scoreStyles.container}>
          <View style={scoreStyles.totalScore}>
            <ScoreTableHeader />
            <PlayerScoreRow
              player={this.state.player1}
              gameScore={this.state.gameScore1}
              setScores={this.state.scores1}
            />
            <PlayerScoreRow
              player={this.state.player2}
              gameScore={this.state.gameScore2}
              setScores={this.state.scores2}
            />
          </View>
          <View style={scoreStyles.controls}></View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ScoringScreen;
