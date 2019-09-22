import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  SafeAreaView,
  Alert
} from "react-native";
import { STORAGE_KEY } from "../../../helpers/constants";
import { styles } from "../../../styles/styles";
import ItemRow from "./ItemRow";
import { exploreStyles } from "../../../styles/explore-styles";

const DATA = [
  {
    id: "ss",
    title: "US Open 2019"
  }
];

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
      const matches = await AsyncStorage.getItem(STORAGE_KEY);
      this.setState({ matches });
    } catch (e) {
      Alert.alert("Error", "Unable to get saved data from phone storage", [
        { text: "OK", onPress: () => {} }
      ]);
    }
  }

  goToMatch = id => () => {
    this.props.navigation.navigate("Scoreboard", id);
  };

  renderListItem = ({ item }) => {
    return <ItemRow text={item.title} buttonFn={this.goToMatch(item.id)} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderListItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default SavedMatchesScreen;
