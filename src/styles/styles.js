import { StyleSheet, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "../helpers/scaling";

export const colours = {
  white: "#fff",
  transparentBlack: "rgba(0, 0, 0, 0.5)",
  main: "royalblue",
  grey: "gainsboro",
  red: "red"
};

export const styles = StyleSheet.create({
  // For screens not in a stack
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
