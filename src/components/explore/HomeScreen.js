import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import NewMatchModal from "./NewMatchModal";
import { styles } from "../../styles/styles";

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
    this.props.navigation.navigate("Scoring", { player1, player2 });
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

export default HomeScreen;
