import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  SafeAreaView,
  Alert
} from "react-native";
import {
  STORAGE_KEY,
  getDateStringFromTimestamp
} from "../../../helpers/constants";
import { styles } from "../../../styles/styles";
import ItemRow from "./ItemRow";
import { exploreStyles } from "../../../styles/explore-styles";

class SavedMatchesScreen extends Component {
  static navigationOptions = {
    title: "Load Matches"
  };

  state = {
    matches: []
  };

  componentDidMount() {
    this.getMatches();
  }

  async getMatches() {
    try {
      const response = await AsyncStorage.getItem(STORAGE_KEY);
      const matches = JSON.parse(response);
      this.setState({ matches });
    } catch (e) {
      Alert.alert("Error", "Unable to get saved data from phone storage", [
        { text: "OK" }
      ]);
    }
  }

  goToMatch = id => () => {
    console.log(id);
    // this.props.navigation.navigate("Scoreboard", id);
  };

  renderListItem = ({ item }) => {
    const date = getDateStringFromTimestamp(item.modified);
    let score = "";
    for (let i = 0; i < item.scores1.length; i++) {
      if (score.length) score += ", ";
      score += `${item.scores1[i]} - ${item.scores2[i]}`;
    }
    const title = `${date}: ${item.player1} v ${item.player2} (${score})`;
    return (
      <ItemRow key={item.id} text={title} buttonFn={this.goToMatch(item.id)} />
    );
  };

  render() {
    console.log(this.state.matches);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.matches}
          renderItem={this.renderListItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default SavedMatchesScreen;
