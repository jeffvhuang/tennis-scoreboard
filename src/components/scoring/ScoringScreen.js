import React, { Component } from "react";
import { View, Text } from "react-native";

class ScoringScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: props.navigation.getParam("player1", ""),
      player2: props.navigation.getParam("player2", "")
    };
  }

  render() {
    return (
      <View>
        <Text>Scoring Screen</Text>
      </View>
    );
  }
}

export default ScoringScreen;
