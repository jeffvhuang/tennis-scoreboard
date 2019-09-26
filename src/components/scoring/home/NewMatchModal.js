import React, { Component } from "react";
import { Modal, View, TouchableHighlight, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../../../styles/styles";

class NewMatchModal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    goToScoring: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      player1: "",
      player2: ""
    };
  }

  handlePlayer1Change = value => this.setState({ player1: value });
  handlePlayer2Change = value => this.setState({ player2: value });

  submit = () => this.props.goToScoring(this.state.player1, this.state.player2);

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalMain}>
            <View style={styles.modalInputsSection}>
              <View>
                <Text style={styles.label}>Player 1</Text>
                <TextInput
                  onChangeText={this.handlePlayer1Change}
                  value={this.state.player1}
                  style={styles.searchInput}
                />
              </View>
              <View>
                <Text style={styles.label}>Player 2</Text>
                <TextInput
                  onChangeText={this.handlePlayer2Change}
                  value={this.state.player2}
                  style={styles.searchInput}
                />
              </View>
            </View>
            <View style={styles.modalButtonsSection}>
              <TouchableHighlight
                onPress={this.props.closeModal}
                style={[styles.modalBtn, styles.modalBtnCancel]}
              >
                <Text style={[styles.label, styles.whiteTxt]}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.submit}
                style={[styles.modalBtn, styles.modalBtnSubmit]}
              >
                <Text style={[styles.label, styles.whiteTxt]}>
                  Start Scoring
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default NewMatchModal;
