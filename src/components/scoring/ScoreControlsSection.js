import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { controlStyles } from "../../styles/control-styles";
import Btn from "../common/Btn";
import {
  updatePlayerName,
  updateGameScore,
  updateSetScore
} from "../../redux/actions";

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
      var score = playerNumber == 1 ? match.gameScore1 : match.gameScore2;

      // logic to determine next score or finish current game

      this.props.updateGameScore(playerNumber, score);
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
    { updatePlayerName, updateGameScore, updateSetScore },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreDisplaySection);
