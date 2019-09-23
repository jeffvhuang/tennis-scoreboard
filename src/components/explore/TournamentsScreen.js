import React, { Component } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getDateAndTriMonth } from "../../helpers/constants";
import { styles } from "../../styles/styles";
import { exploreStyles } from "../../styles/explore-styles";
import { getAtpTournaments } from "../../redux/actions/explore-actions";
import ItemRow from "../scoring/saved/ItemRow";

class TournamentsScreen extends Component {
  static navigationOptions = {
    title: "ATP Tournaments"
  };

  componentDidMount() {
    this.props.getAtpTournaments();
  }

  renderListItem = ({ item }) => {
    const levelParts = item.category.level.split("_");
    let level =
      levelParts[0].charAt(0).toUpperCase() + levelParts[0].substring(1);
    if (levelParts.length > 1)
      level +=
        " " +
        levelParts[1].charAt(0).toUpperCase() +
        levelParts[1].substring(1);

    const name = item.name.replace("ATP ", "");
    const date =
      getDateAndTriMonth(item.current_season.start_date) +
      " - " +
      getDateAndTriMonth(item.current_season.end_date);

    return (
      <ItemRow
        key={item.id}
        buttonFn={() => {}}
        text1={level}
        text2={name}
        text3={date}
        flex3={2}
      />
    );
  };

  render() {
    console.log(this.props.explore);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.explore.atp}
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
