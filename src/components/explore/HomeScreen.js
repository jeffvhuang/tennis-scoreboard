import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={{ width: 100, height: 50 }}
          onPress={() => {}}
        >
          <Text>New Match</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default HomeScreen;
