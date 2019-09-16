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
  updateSetAfterGameEnd
} from "../../redux/actions";

const gameScores = ["0", "15", "30", "40", "Adv"];

class ScoreDisplaySection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fault: false
    };
  }

  incrementGameScore = playerNumber => {
    return () => {
      const { match } = this.props;
      const score = playerNumber == 1 ? match.gameScore1 : match.gameScore2;
      const opponentScore =
        playerNumber == 1 ? match.gameScore2 : match.gameScore1;

      // logic to determine next score or finish current game
      switch (score) {
        case "0":
          this.props.updateGameScore(playerNumber, "15");
          break;
        case "15":
          this.props.updateGameScore(playerNumber, "30");
          break;
        case "30":
          this.props.updateGameScore(playerNumber, "40");
          break;
        case "40":
          if (opponentScore === "40")
            this.props.updateGameScore(playerNumber, "Adv");
          else {
            // update both scores and respective set
            const playerSetScore =
              playerNumber == 1
                ? match.scores1[match.currentSet - 1]
                : match.scores2[match.currentSet - 1];
            const opponentSetScore =
              playerNumber == 1
                ? match.scores2[match.currentSet - 1]
                : match.scores1[match.currentSet - 1];
            let newPlayerSetNum = parseInt(playerSetScore) + 1;
            let opponentSetNum = parseInt(opponentSetScore);

            const isNewSet =
              newPlayerSetNum >= 6 && newPlayerSetNum - opponentSetNum > 1;
            const setNumber = isNewSet
              ? match.currentSet + 1
              : match.currentSet;

            this.props.updateSetAfterGameEnd(
              playerNumber,
              match.currentSet,
              newPlayerSetNum,
              setNumber
            );
          }

          break;
      }
    };
  };

  decrementGameScore = playerNumber => {
    return () => {
      const { match } = this.props;
      var score = playerNumber == 1 ? match.gameScore1 : match.gameScore2;

      // logic to determine previous score

      this.props.updateGameScore(playerNumber, score);
    };
  };

  fault = () => {
    this.setState(prevState => ({
      fault: !prevState.fault
    }));
  };

  render() {
    console.log("render");
    const { match } = this.props;
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
      updateSetAfterGameEnd
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreDisplaySection);
