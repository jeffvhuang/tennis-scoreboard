import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import NewMatchModal from "./NewMatchModal";

class HomeScreen extends Component {
  state = {
    modalVisible: false
  };

  showModal = () => this.setState({ modalVisible: true });

  render() {
    return (
      <View>
        <NewMatchModal visible={this.state.modalVisible} />
        <TouchableHighlight
          style={{ width: 100, height: 50 }}
          onPress={this.showModal}
        >
          <Text>New Match</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default HomeScreen;
