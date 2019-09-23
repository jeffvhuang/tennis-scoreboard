import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FlatList, AsyncStorage, SafeAreaView, Alert } from "react-native";
import { loadMatch } from "../../../redux/actions/match-actions";
import {
  STORAGE_KEY,
  getDateStringFromTimestamp,
  saveMatchToStorage
} from "../../../helpers/constants";
import { styles } from "../../../styles/styles";
import ItemRow from "./ItemRow";

class SavedMatchesScreen extends Component {
  static navigationOptions = {
    title: "Saved Matches"
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

  goToMatch = id => async () => {
    const { match, navigation, loadMatch } = this.props;
    // Save the current match if it exists before overriding
    if (match.id) await saveMatchToStorage(match);
    const selected = this.state.matches.find(x => x.id == id);
    loadMatch(selected);
    navigation.navigate("Scoreboard");
  };

  renderListItem = ({ item }) => {
    const date = getDateStringFromTimestamp(item.modified);
    let score = "";
    for (let i = 0; i < item.scores1.length; i++) {
      if (score.length) score += ", ";
      score += `${item.scores1[i]} - ${item.scores2[i]}`;
    }
    score += "";
    const matchName = `${item.player1} v ${item.player2}`;
    return (
      <ItemRow
        key={item.id}
        buttonFn={this.goToMatch(item.id)}
        text1={date}
        text2={matchName}
        text3={score}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.matches}
          renderItem={this.renderListItem}
          keyExtractor={item => item.id}
          style={styles.listView}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  match: state.match
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadMatch }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedMatchesScreen);
