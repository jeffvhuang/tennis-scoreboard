import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { connect } from "react-redux";

import NewMatchModal from "./NewMatchModal";
import { styles } from "../../../styles/styles";
import { updatePlayerName } from "../../../redux/actions/match-actions";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Tennis Scoreboard"
  };

  state = {
    modalVisible: false
  };

  showModal = () => this.setState({ modalVisible: true });

  closeModal = () => this.setState({ modalVisible: false });

  goToTournaments = () => this.props.navigation.navigate("Tournaments");

  goToScoring = (player1, player2) => {
    this.closeModal();
    this.props.updatePlayerName(1, player1);
    this.props.updatePlayerName(2, player2);
    this.props.navigation.navigate("Scoreboard");
  };

  render() {
    return (
      <View style={styles.container}>
        <NewMatchModal
          visible={this.state.modalVisible}
          closeModal={this.closeModal}
          goToScoring={this.goToScoring}
        />
        <View style={styles.midRow}>
          <TouchableHighlight
            style={styles.homeBtn}
            onPress={this.goToTournaments}
          >
            <Text style={styles.btnText}>Saved Matches</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.homeBtn} onPress={this.showModal}>
            <Text style={styles.btnText}>New Match</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  match: state.match
});

const mapDispatchToProps = dispatch => ({
  updatePlayerName
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
