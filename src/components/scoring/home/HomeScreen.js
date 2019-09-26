import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { connect } from "react-redux";

import { saveMatchToStorage } from "../../../helpers/constants";
import NewMatchModal from "./NewMatchModal";
import { styles } from "../../../styles/styles";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Tennis Scoreboard"
  };

  state = {
    modalVisible: false
  };

  showModal = () => this.setState({ modalVisible: true });
  closeModal = () => this.setState({ modalVisible: false });

  goToSavedMatches = () => this.props.navigation.navigate("SavedMatches");
  goToTournaments = () => this.props.navigation.navigate("Tournaments");

  goToScoring = async (player1, player2) => {
    this.closeModal();
    const { match, navigation } = this.props;
    if (match.id) await saveMatchToStorage(match);
    if (!player1) player1 = "Player 1";
    if (!player2) player2 = "Player 2";
    navigation.navigate("Scoreboard", { player1, player2 });
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
            onPress={this.goToSavedMatches}
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

export default connect(mapStateToProps)(HomeScreen);
