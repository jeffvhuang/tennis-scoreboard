import React, { Component } from "react";
import { View, Text, FlatList, AsyncStorage, SafeAreaView } from "react-native";
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
  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY);
  }

  goToMatch = id => () => {
    this.props.navigation.navigate("Scoreboard", id);
  };

  renderListItem = ({ item }) => {
    return <ItemRow text={item.title} buttonFn={goToMatch(item.id)} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={exploreStyles.container}>
          <Text>Matches</Text>
        </View>
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
