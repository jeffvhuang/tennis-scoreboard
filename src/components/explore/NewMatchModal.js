import React, { Component } from "react";
import { Modal, View, TouchableHighlight, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../../styles/styles";

class NewMatchModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
  };

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

  submit = () => {
    this.props.navigation.navigate("Scoring", {
      player1: this.state.player1,
      player2: this.state.player2
    });
  };

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handlePlayer1Change = value => this.setState({ player1: value });
  handlePlayer2Change = value => this.setState({ player2: value });

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalInputsContainer}>
            <View>
              <Text>Player 1</Text>
              <TextInput
                onChangeText={this.handlePlayer1Change}
                value={this.state.player1}
                style={styles.searchInput}
              />
            </View>
            <View>
              <Text>Player 2</Text>
              <TextInput
                onChangeText={this.handlePlayer2Change}
                value={this.state.player2}
                style={styles.searchInput}
              />
            </View>

            <TouchableHighlight onPress={this.props.closeModal}>
              <Text>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.submit}>
              <Text>Start Scoring</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

export default NewMatchModal;
