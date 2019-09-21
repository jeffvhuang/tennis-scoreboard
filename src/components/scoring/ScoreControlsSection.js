import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { controlStyles } from "../../styles/control-styles";
import Btn from "../common/Btn";
import {
  updatePlayerName,
  changeGameScore,
  updateSetScore,
  updateSetAfterGameEnd,
  updateCurrentSet,
  updateSetsWon,
  resetScores,
  changeServer,
  changeFault,
  setTiebreak,
  setWinner
} from "../../redux/actions/match-actions";

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

  incrementGameScore = playerNum => {
    return () => {
      const { match, changeGameScore } = this.props;

      // Only able to incremement scores when game has no winner yet
      if (match.winner < 1) {
        const score = playerNum == 1 ? match.gameScore1 : match.gameScore2;
        const opponentScore =
          playerNum == 1 ? match.gameScore2 : match.gameScore1;

        if (!match.isTiebreak) {
          switch (score) {
            case "0":
              changeGameScore(playerNum, "15", match.isFault);
              break;
            case "15":
              changeGameScore(playerNum, "30", match.isFault);
              break;
            case "30":
              changeGameScore(playerNum, "40", match.isFault);
              break;
            case "40":
              if (opponentScore === "40")
                changeGameScore(playerNum, "Adv", match.isFault);
              else if (opponentScore == "Adv") {
                const otherPlayer = playerNum == 1 ? 2 : 1;
                changeGameScore(otherPlayer, "40", match.isFault);
              } else {
                this.updateSetAfterGameEnd(playerNum);
              }
              break;
            case "Adv":
              if (opponentScore != "Adv") this.updateSetAfterGameEnd(playerNum);
              break;
          }
        } else {
          const playerScoreNum = parseInt(score) + 1;
          const opponentScoreNum = parseInt(opponentScore);
          const isTiebreakOver =
            playerScoreNum > 6 && playerScoreNum - opponentScoreNum > 1;

          if (isTiebreakOver) this.updateSetAfterGameEnd(playerNum);
          else
            changeGameScore(
              playerNum,
              playerScoreNum.toString(),
              match.isFault
            );
        }
      }
    };
  };

  updateSetAfterGameEnd = playerNum => {
    const { match, updateCurrentSet, updateSetsWon, setWinner } = this.props;
    const setIndex = match.currentSet - 1;
    let playerSetScore =
      playerNum == 1 ? match.scores1[setIndex] : match.scores2[setIndex];
    let opponentSetScore =
      playerNum == 1 ? match.scores2[setIndex] : match.scores1[setIndex];
    if (isNaN(playerSetScore)) playerSetScore = "0";
    if (isNaN(opponentSetScore)) opponentSetScore = "0";

    const newPlayerSetScoreNum = parseInt(playerSetScore) + 1;
    const opponentSetNum = parseInt(opponentSetScore);
    const playerSetsWon =
      playerNum == 1 ? match.player1SetsWon : match.player2SetsWon;

    this.props.updateSetAfterGameEnd(
      playerNum,
      match.currentSet,
      newPlayerSetScoreNum
    );

    // Move to next set if current one is finished
    // Enter or exit tiebreak if needed
    if (!match.isTiebreak) {
      const isSetFinished =
        newPlayerSetScoreNum >= 6 && newPlayerSetScoreNum - opponentSetNum > 1;
      const isEnteringTiebreak =
        newPlayerSetScoreNum == 6 && opponentSetNum == 6;

      if (isSetFinished) {
        updateSetsWon(playerNum, playerSetsWon + 1);

        if (playerSetsWon + 1 === match.setsToWin) setWinner(playerNum);
        else updateCurrentSet(match.currentSet + 1);
      } else if (isEnteringTiebreak) {
        this.props.setTiebreak(true);
      }
    } else {
      updateSetsWon(playerNum, playerSetsWon + 1);

      if (playerSetsWon + 1 === match.setsToWin) setWinner(playerNum);
      else {
        updateCurrentSet(match.currentSet + 1);
        this.props.setTiebreak(false);
      }
    }
  };

  decrementGameScore = playerNum => {
    return () => {
      const { match, changeGameScore } = this.props;

      // Only able to decrement score when game has not finished
      if (match.winner < 1) {
        var score = playerNum == 1 ? match.gameScore1 : match.gameScore2;

        if (!match.isTiebreak) {
          switch (score) {
            case "15":
              changeGameScore(playerNum, "0", match.isFault);
              break;
            case "30":
              changeGameScore(playerNum, "15", match.isFault);
              break;
            case "40":
              changeGameScore(playerNum, "30", match.isFault);
              break;
            case "Adv":
              changeGameScore(playerNum, "40", match.isFault);
              break;
          }
        } else {
          const playerScoreNum = score != "0" ? parseInt(score) - 1 : 0;
          changeGameScore(playerNum, playerScoreNum.toString(), match.isFault);
        }
      }
    };
  };

  fault = () => {
    const { match, changeFault } = this.props;
    // Incrememnt score for receiving player if double fault
    if (match.isFault) {
      const receivingPlayerNum = match.isPlayer1Serving ? 2 : 1;
      this.incrementGameScore(receivingPlayerNum)();
    } else changeFault();
  };

  render() {
    const { match } = this.props;
    const faultBtnTitle = match.isFault ? "Double Fault" : "Fault";
    console.log("match", match);
    return (
      <View style={controlStyles.container}>
        {match.winner > 0 ? (
          <View style={controlStyles.nameRow}>
            <View style={controlStyles.playerNameView}>
              <Text style={controlStyles.text}>
                {match.winner == 1
                  ? `${match.player1} Wins`
                  : `${match.player2} Wins`}
              </Text>
            </View>
          </View>
        ) : (
          <View style={controlStyles.nameRow}>
            <View style={controlStyles.playerNameView}>
              <Text style={controlStyles.text}>{match.player1}</Text>
            </View>
            <View style={controlStyles.playerNameView}>
              <Text style={controlStyles.text}>{match.player2}</Text>
            </View>
          </View>
        )}
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
              title={faultBtnTitle}
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
      changeGameScore,
      updateSetScore,
      updateSetAfterGameEnd,
      updateCurrentSet,
      changeServer,
      resetScores,
      changeFault,
      setTiebreak,
      setWinner,
      updateSetsWon
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreDisplaySection);
