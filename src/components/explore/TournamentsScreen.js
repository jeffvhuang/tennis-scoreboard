import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { STORAGE_KEY } from "../../helpers/constants";
import { getTournaments } from "../../helpers/api";
import { styles } from "../../styles/styles";
import { exploreStyles } from "../../styles/explore-styles";
import ItemRow from "../scoring/saved/ItemRow";

const DATA = [
  {
    id: "hey"
  }
];
class TournamentsScreen extends Component {
  static navigationOptions = {
    title: "ATP Tournaments"
  };

  // componentDidMount() {
  //   const tournaments = getTournaments();
  // }

  renderListItem = ({ item }) => {
    // const date = getDateStringFromTimestamp(item.modified);
    // let score = "";
    // for (let i = 0; i < item.scores1.length; i++) {
    //   if (score.length) score += ", ";
    //   score += `${item.scores1[i]} - ${item.scores2[i]}`;
    // }
    // score += "";
    // const matchName = `${item.player1} v ${item.player2}`;
    return (
      <ItemRow key={item.id} buttonFn={() => {}} text1="" text2="" text3="" />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderListItem}
          keyExtractor={item => item.id}
          style={styles.listView}
        />
      </SafeAreaView>
    );
  }
}

export default TournamentsScreen;
