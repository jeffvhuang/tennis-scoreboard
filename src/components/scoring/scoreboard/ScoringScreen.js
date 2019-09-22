import React, { Component } from "react";
import { SafeAreaView } from "react-native";

import { styles } from "../../../styles/styles";
import ScoreDisplaySection from "./ScoreDisplaySection";
import ScoreControlsSection from "./ScoreControlsSection";

class ScoringScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScoreDisplaySection />
        <ScoreControlsSection />
      </SafeAreaView>
    );
  }
}

export default ScoringScreen;
