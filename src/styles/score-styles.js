import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";
import { colours } from "./styles";

const fontSize = 20;

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
    fontSize: moderateScale(10)
  },
  scoreHeader: {
    fontSize: moderateScale(10)
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
    fontSize: moderateScale(fontSize),
    textAlign: "center"
  },
  score: {
    fontSize: moderateScale(fontSize),
    width: "95%",
    textAlign: "center"
  },
  playerName: {
    fontSize: moderateScale(fontSize),
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
    fontSize: moderateScale(fontSize)
  },
  gameDropdownItem: {
    fontSize: moderateScale(fontSize)
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
