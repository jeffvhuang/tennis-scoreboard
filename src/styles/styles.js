import { StyleSheet, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";

const colours = {
  white: "#fff",
  transparentBlack: "rgba(0, 0, 0, 0.5)",
  main: "royalblue",
  grey: "gainsboro"
};

export const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "navy",
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  midRow: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  homeBtn: {
    width: "25%",
    aspectRatio: 2,
    backgroundColor: colours.main,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  btnText: {
    width: "100%",
    color: colours.white,
    fontSize: 32,
    textAlign: "center"
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: colours.transparentBlack,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20
  },
  modalMain: {
    backgroundColor: colours.white,
    width: "80%",
    height: "80%",
    padding: 10,
    justifyContent: "space-between"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold"
  },
  searchInput: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  modalButtonsSection: {
    backgroundColor: colours.white,
    width: "100%",
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  modalBtn: {
    padding: 10,
    borderRadius: 10
  },
  modalBtnCancel: {
    backgroundColor: "grey"
  },
  modalBtnSubmit: {
    backgroundColor: colours.main
  },
  whiteTxt: {
    color: "white"
  },
  button: {
    borderWidth: 1,
    backgroundColor: "gainsboro",
    padding: 5
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: moderateScale(14)
  },
  dropdown: {
    width: 100,
    height: 50
  },
  dropdownItem: {
    fontSize: moderateScale(14)
  }
});

export const scoreStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white
  },
  totalScore: {
    width: "100%",
    flex: 3
  },
  controls: {
    width: "100%",
    flex: 4
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
    justifyContent: "center",
    alignItems: "center"
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
    width: "95%",
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
  }
});
