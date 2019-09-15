import React, { Component } from "react";
import { View } from "react-native";
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

    this.state = {};
  }

  onNameChange1 = player1 => this.props.updatePlayerName(1, player1);
  onNameChange2 = player2 => this.props.updatePlayerName(2, player2);

  onGameChange = playerNumber => {
    return option => this.props.updateGameScore(playerNumber, option.label);
  };

  render() {
    return (
      <View style={controlStyles.container}>
        <View style={controlStyles.nameRow}>
          <View style={controlStyles.playerName}></View>
          <View style={controlStyles.time}></View>
          <View style={controlStyles.playerName}></View>
        </View>
        <View style={controlStyles.gameControlRow}>
          <View style={controlStyles.gameControls}></View>
        </View>
        <View style={controlStyles.buttonsRow}>
          <View style={controlStyles.leftBox}></View>
          <View style={controlStyles.midBox}></View>
          <View style={controlStyles.rightBox}></View>
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
