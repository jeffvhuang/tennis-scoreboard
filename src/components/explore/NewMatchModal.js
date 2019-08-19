import React, { Component } from "react";
import { Modal, View, TouchableHighlight, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

NewMatchModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired
};

class NewMatchModal extends Component {
  constructor(props) {
    super(props);

    this.onChange = {
      player1: this.handleChange.bind(this, "player1"),
      player2: this.handleChange.bind(this, "player2")
    };

    this.state = {
      player1: "",
      player2: ""
    };
  }

  submit = () => this.prop.navigation.navigate("Scoring");

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <View>
              <Text>Player 1</Text>
              <TextInput
                onChangeText={this.onChange.player1}
                value={this.state.player1}
                style={styles.searchInput}
              />
            </View>
            <View>
              <Text>Player 2</Text>
              <TextInput
                onChangeText={this.onChange.player2}
                value={this.state.player2}
                style={styles.searchInput}
              />
            </View>

            <TouchableHighlight onPress={this.submit}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

export default NewMatchModal;
