import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { STORAGE_KEY } from "../../helpers/constants";
import { getTournaments } from "../../helpers/api";
import { styles } from "../../styles/styles";
import { exploreStyles } from "../../styles/explore-styles";
import { getAtpTournaments } from "../../redux/actions/explore-actions";
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

  componentDidMount() {
    getAtpTournaments();
  }

  renderListItem = ({ item }) => {
    // const date = getDateStringFromTimestamp(item.modified);

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

const mapStateToProps = state => ({
  explore: state.explore
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAtpTournaments }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentsScreen);
