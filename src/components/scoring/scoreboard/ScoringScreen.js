import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createNewMatch } from "../../../redux/actions/match-actions";
import { styles } from "../../../styles/styles";
import ScoreDisplaySection from "./ScoreDisplaySection";
import ScoreControlsSection from "./ScoreControlsSection";

class ScoringScreen extends Component {
  componentDidMount() {
    this.createMatch();
  }

  // Create a new match only if player params have been passed through
  createMatch = async () => {
    const { navigation, createNewMatch } = this.props;
    // Save the current match if it exists before overriding
    const player1 = navigation.getParam("player1");
    const player2 = navigation.getParam("player2");
    if (player1 && player2) {
      createNewMatch(player1, player2);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScoreDisplaySection />
        <ScoreControlsSection />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createNewMatch }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(ScoringScreen);
