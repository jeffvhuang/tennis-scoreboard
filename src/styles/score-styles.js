import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";
import { colours } from "./styles";

export const scoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white
  },
  totalScore: {
    width: "100%",
    flex: 3
  },
  scoresTableHeader: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1
  },
  editContainer: {
    textAlign: "left"
  },
  btnContainer: {
    width: "95%"
  },
  editButton: {
    height: "100%",
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  buttonText: {
    textAlign: "left",
    justifyContent: "center",
    color: "blue",
    fontSize: moderateScale(14)
  },
  scoreHeader: {
    fontSize: moderateScale(14)
  },
  playerRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1
  },
  player: {
    flex: 3,
    borderRightWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10
  },
  game: {
    flex: 1,
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  set: {
    flex: 1,
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalSelector: {
    width: "95%",
    backgroundColor: colours.grey
  },
  modalScore: {
    fontSize: moderateScale(26),
    textAlign: "center"
  },
  score: {
    fontSize: moderateScale(26),
    width: "95%",
    textAlign: "center"
  },
  playerName: {
    fontSize: moderateScale(26),
    flex: 8,
    textAlign: "left"
  },
  input: {
    backgroundColor: colours.grey
  },
  gameDropdown: {
    width: "90%",
    height: "90%",
    backgroundColor: colours.grey,
    fontSize: moderateScale(26)
  },
  gameDropdownItem: {
    fontSize: moderateScale(26)
  },
  tennisBall: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listView: {
    flex: 1,
    width: "100%"
  },
  buttonsRow: {
    width: "100%",
    height: "100%"
  },
  touchable: {
    width: "100%",
    paddingTop: scale(5),
    paddingBottom: scale(5),
    paddingLeft: "3%",
    paddingRight: "3%",
    borderBottomWidth: 1
  },
  touchableView: {
    height: "100%",
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  itemText: {
    fontSize: moderateScale(14)
  }
});
