import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { controlStyles } from "../../styles/control-styles";
import Btn from "../common/Btn";
import {
  updatePlayerName,
  updateGameScore,
  updateSetScore,
  updateSetAfterGameEnd,
  updateCurrentSet,
  resetScores,
  changeServer
} from "../../redux/actions";

class ScoreDisplaySection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fault: false
    };
  }

  componentDidMount() {
    // this.props.updateCurrentSet(1);
    // this.props.resetScores();
  }

  incrementGameScore = playerNumber => {
    return () => {
      const { match, updateGameScore } = this.props;
      const score = playerNumber == 1 ? match.gameScore1 : match.gameScore2;
      const opponentScore =
        playerNumber == 1 ? match.gameScore2 : match.gameScore1;

      switch (score) {
        case "0":
          updateGameScore(playerNumber, "15");
          break;
        case "15":
          updateGameScore(playerNumber, "30");
          break;
        case "30":
          updateGameScore(playerNumber, "40");
          break;
        case "40":
          if (opponentScore === "40") updateGameScore(playerNumber, "Adv");
          else if (opponentScore == "Adv") {
            const otherPlayer = playerNumber == 1 ? 2 : 1;
            updateGameScore(otherPlayer, "40");
          } else {
            this.updateSetAfterGameEnd(playerNumber);
          }
          break;
        case "Adv":
          if (opponentScore != "Adv") this.updateSetAfterGameEnd(playerNumber);
          break;
      }
    };
  };

  updateSetAfterGameEnd = playerNumber => {
    const { match } = this.props;
    const setIndex = match.currentSet - 1;
    const playerSetScore =
      playerNumber == 1 ? match.scores1[setIndex] : match.scores2[setIndex];
    const opponentSetScore =
      playerNumber == 1 ? match.scores2[setIndex] : match.scores1[setIndex];
    const newPlayerSetNum = parseInt(playerSetScore) + 1;
    const opponentSetNum = parseInt(opponentSetScore);

    // Move to next set if current one is finished
    const isNewSet =
      newPlayerSetNum >= 6 && newPlayerSetNum - opponentSetNum > 1;
    const setNumber = isNewSet ? match.currentSet + 1 : match.currentSet;

    this.props.updateSetAfterGameEnd(
      playerNumber,
      match.currentSet,
      newPlayerSetNum,
      setNumber
    );
  };

  decrementGameScore = playerNumber => {
    return () => {
      const { match, updateGameScore } = this.props;
      var score = playerNumber == 1 ? match.gameScore1 : match.gameScore2;

      switch (score) {
        case "15":
          updateGameScore(playerNumber, "0");
          break;
        case "30":
          updateGameScore(playerNumber, "15");
          break;
        case "40":
          updateGameScore(playerNumber, "30");
          break;
        case "Adv":
          updateGameScore(playerNumber, "40");
          break;
      }
    };
  };

  fault = () => {
    this.setState(prevState => ({
      fault: !prevState.fault
    }));
  };

  render() {
    const { match } = this.props;
    // console.log("match", match);
    return (
      <View style={controlStyles.container}>
        <View style={controlStyles.nameRow}>
          <View style={controlStyles.playerNameView}>
            <Text style={controlStyles.text}>{match.player1}</Text>
          </View>
          <View style={controlStyles.playerNameView}>
            <Text style={controlStyles.text}>{match.player2}</Text>
          </View>
        </View>
        <View style={controlStyles.gameControlRow}>
          <View style={controlStyles.gameControls}>
            <Btn
              title="-"
              onPress={this.decrementGameScore(1)}
              style={controlStyles.decrementBtn}
              textStyle={controlStyles.decrementBtnText}
            />
            <Btn
              title={match.gameScore1}
              onPress={this.incrementGameScore(1)}
              style={controlStyles.incrementBtn}
              textStyle={controlStyles.incrementBtnText}
            />
            <Btn
              title={match.gameScore2}
              onPress={this.incrementGameScore(2)}
              style={controlStyles.incrementBtn}
              textStyle={controlStyles.incrementBtnText}
            />
            <Btn
              title="-"
              onPress={this.decrementGameScore(2)}
              style={controlStyles.decrementBtn}
              textStyle={controlStyles.decrementBtnText}
            />
          </View>
        </View>
        <View style={controlStyles.buttonsRow}>
          <View style={controlStyles.leftBox}></View>
          <View style={controlStyles.midBox}></View>
          <View style={controlStyles.rightBox}>
            <Btn
              title="Fault"
              onPress={this.fault}
              style={controlStyles.controlBtn}
              textStyle={controlStyles.controlBtnText}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  match: state.match
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updatePlayerName,
      updateGameScore,
      updateSetScore,
      updateSetAfterGameEnd,
      updateCurrentSet,
      changeServer,
      resetScores
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreDisplaySection);
