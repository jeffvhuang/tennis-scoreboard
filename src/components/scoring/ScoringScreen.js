import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { connect } from "react-redux";

import { styles, scoreStyles } from "../../styles/styles";
import ScoreTableHeader from "./ScoreTableHeader";
import PlayerScoreRow from "./PlayerScoreRow";
import PlayerScoreEditRow from "./PlayerScoreEditRow";
import { updatePlayerName } from "../../redux/actions";

class ScoringScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSet: 1,
      gameScore1: "40",
      gameScore2: "15",
      scores1: ["6", "6", "1"],
      scores2: ["3", "7", "1"],
      isEditing: false
    };
  }

  onNameChange1 = player1 => this.props.updatePlayerName(1, player1);
  onNameChange2 = player2 => this.props.updatePlayerName(2, player2);

  onGameChange = scoresPropName => {
    return option => {
      this.setState({ [scoresPropName]: option.label });
    };
  };

  // Provide appropriate setState depending on player and set for the player
  // via multiple nested functions
  onScoreChange = scoresPropName => {
    return setIndex => {
      return value => {
        this.setState(prevState => {
          const newScores = prevState[scoresPropName];
          newScores[setIndex] = value;

          return {
            [scoresPropName]: newScores
          };
        });
      };
    };
  };

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
                  player={this.props.match.player1}
                  gameScore={this.state.gameScore1}
                  setScores={this.state.scores1}
                  onNameChange={this.onNameChange1}
                  onGameChange={this.onGameChange("gameScore1")}
                  onScoreChange={this.onScoreChange("scores1")}
                />
                <PlayerScoreEditRow
                  player={this.props.match.player2}
                  gameScore={this.state.gameScore2}
                  setScores={this.state.scores2}
                  onNameChange={this.onNameChange2}
                  onGameChange={this.onGameChange("gameScore2")}
                  onScoreChange={this.onScoreChange("scores2")}
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

const mapStateToProps = state => ({
  match: state.match
});

const mapDispatchToProps = dispatch => ({
  updatePlayerName
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoringScreen);
