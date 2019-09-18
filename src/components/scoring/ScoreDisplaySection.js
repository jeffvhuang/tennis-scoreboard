import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { scoreStyles } from "../../styles/score-styles";
import ScoreTableHeader from "./ScoreTableHeader";
import PlayerScoreRow from "./PlayerScoreRow";
import PlayerScoreEditRow from "./PlayerScoreEditRow";
import {
  updatePlayerName,
  updateGameScore,
  updateSetScore,
  resetScores
} from "../../redux/actions";

class ScoreDisplaySection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSet: 1,
      isEditing: false
    };
  }

  // componentDidMount() {
  //   this.props.resetScores();
  // }

  onNameChange1 = player1 => this.props.updatePlayerName(1, player1);
  onNameChange2 = player2 => this.props.updatePlayerName(2, player2);

  onGameChange = playerNumber => {
    return option => this.props.updateGameScore(playerNumber, option.label);
  };

  // Provide appropriate setState depending on player and set for the player
  // via multiple nested functions
  onScoreChange = playerNumber => {
    return setIndex => {
      return value => this.props.updateSetScore(playerNumber, setIndex, value);
    };
  };

  toggleEdit = () =>
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));

  render() {
    const { match } = this.props;
    return (
      <View style={scoreStyles.container}>
        <View style={scoreStyles.totalScore}>
          <ScoreTableHeader
            toggleEdit={this.toggleEdit}
            isEditing={this.state.isEditing}
          />
          {this.state.isEditing ? (
            <>
              <PlayerScoreEditRow
                player={match.player1}
                isServing={match.isPlayer1Serving}
                gameScore={match.gameScore1}
                setScores={match.scores1}
                onNameChange={this.onNameChange1}
                onGameChange={this.onGameChange(1)}
                onScoreChange={this.onScoreChange(1)}
              />
              <PlayerScoreEditRow
                player={match.player2}
                isServing={!match.isPlayer1Serving}
                gameScore={match.gameScore2}
                setScores={match.scores2}
                onNameChange={this.onNameChange2}
                onGameChange={this.onGameChange(2)}
                onScoreChange={this.onScoreChange(2)}
              />
            </>
          ) : (
            <>
              <PlayerScoreRow
                player={match.player1}
                isServing={match.isPlayer1Serving}
                gameScore={match.gameScore1}
                setScores={match.scores1}
              />
              <PlayerScoreRow
                player={match.player2}
                isServing={!match.isPlayer1Serving}
                gameScore={match.gameScore2}
                setScores={match.scores2}
              />
            </>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  match: state.match
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updatePlayerName, updateGameScore, updateSetScore, resetScores },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreDisplaySection);
