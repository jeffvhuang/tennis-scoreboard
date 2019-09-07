import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";

import { styles, scoreStyles } from "../../styles/styles";
import ScoreTableHeader from "./ScoreTableHeader";
import PlayerScoreRow from "./PlayerScoreRow";
import PlayerScoreEditRow from "./PlayerScoreEditRow";

class ScoringScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: props.navigation.getParam("player1", "Player 1"),
      player2: props.navigation.getParam("player2", "Player 2"),
      currentSet: 1,
      gameScore1: 40,
      gameScore2: 15,
      scores1: [6, 6, 1],
      scores2: [3, 7, 1],
      isEditing: false
    };
  }

  onNameChange1 = player1 => this.setState({ player1 });
  onNameChange2 = player2 => this.setState({ player2 });

  toggleEdit = () =>
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));

  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={scoreStyles.container}>
          <View style={scoreStyles.totalScore}>
            <ScoreTableHeader
              toggleEdit={this.toggleEdit}
              isEditing={this.state.isEditing}
            />
            {this.state.isEditing ? (
              <>
                <PlayerScoreEditRow
                  player={this.state.player1}
                  gameScore={this.state.gameScore1}
                  setScores={this.state.scores1}
                  onNameChange={this.onNameChange1}
                />
                <PlayerScoreEditRow
                  player={this.state.player2}
                  gameScore={this.state.gameScore2}
                  setScores={this.state.scores2}
                  onNameChange={this.onNameChange2}
                />
              </>
            ) : (
              <>
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
              </>
            )}
          </View>
          <View style={scoreStyles.controls}></View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ScoringScreen;
