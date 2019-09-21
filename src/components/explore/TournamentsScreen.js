import React, { Component } from "react";
import { View, Text, FlatList, AsyncStorage, SafeAreaView } from "react-native";
import { STORAGE_KEY } from "../../helpers/constants";
import { styles } from "../../styles/styles";
import ItemRow from "./ItemRow";

const DATA = [
  {
    id: "ss",
    title: "US Open 2019"
  }
];

class TournamentsScreen extends Component {
  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY);
  }

  renderListItem = ({ item }) => {
    return <ItemRow text={item.title} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.androidSafeArea}>
        <View>
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

export default TournamentsScreen;
