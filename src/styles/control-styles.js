import { StyleSheet } from "react-native";
import { colours } from "./styles";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";

export const controlStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 2,
    backgroundColor: colours.white
  },
  nameRow: {
    width: "100%",
    flex: 1,
    flexDirection: "row"
  },
  playerNameView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: moderateScale(16)
  },
  gameControlRow: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    justifyContent: "center"
  },
  gameControls: {
    height: "100%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  incrementBtn: {
    width: "20%",
    height: "70%",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 10
  },
  incrementBtnText: {
    textAlign: "center",
    fontSize: moderateScale(28),
    color: colours.white
  },
  decrementBtn: {
    width: "10%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.grey,
    borderRadius: 10
  },
  decrementBtnText: {
    fontSize: moderateScale(28)
  },
  buttonsRow: {
    width: "100%",
    flex: 2,
    flexDirection: "row"
  },
  leftBox: {
    flex: 1
  },
  midBox: {
    flex: 1
  },
  rightBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: moderateScale(10)
  },
  controlBtn: {
    width: "50%",
    height: "70%",
    backgroundColor: colours.red,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  controlBtnText: {
    fontSize: moderateScale(16),
    color: colours.white
  }
});
