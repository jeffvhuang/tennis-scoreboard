import { StyleSheet } from "react-native";
import { colours } from "./styles";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";

export const exploreStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 2,
    backgroundColor: colours.white
  },
  buttonsRow: {},
  touchable: {},
  rowText: {}
});
