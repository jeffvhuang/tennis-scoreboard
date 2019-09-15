import { StyleSheet } from "react-native";
import { colours } from "./styles";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";

export const controlStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 2,
    backgroundColor: colours.white
  },
  nameRow: {},
  playerName: {},
  time: {},
  gameControlRow: {},
  gameControls: {},
  buttonsRow: {},
  leftBox: {},
  midBox: {},
  rightBox: {},
  controls: {}
});
