import React, { Component } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles, scoreStyles } from "../../styles/styles";

class ScoringScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: props.navigation.getParam("player1", "player 1"),
      player2: props.navigation.getParam("player2", "player 2")
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={scoreStyles.container}>
          <View style={scoreStyles.totalScore}>
            <View style={scoreStyles.playerRow}>
              <View style={scoreStyles.player}>
                <Text>{this.state.player1}</Text>
              </View>
              <View style={scoreStyles.game}>
                <Text>40</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>6</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>6</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>1</Text>
              </View>
            </View>
            <View style={scoreStyles.playerRow}>
              <View style={scoreStyles.player}>
                <Text>{this.state.player2}</Text>
              </View>
              <View style={scoreStyles.game}>
                <Text>40</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>6</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>6</Text>
              </View>
              <View style={scoreStyles.set}>
                <Text>1</Text>
              </View>
            </View>
          </View>
          <View style={scoreStyles.controls}></View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ScoringScreen;
