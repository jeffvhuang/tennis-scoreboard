import { StyleSheet } from "react-native";

const colours = {
  white: "#fff",
  transparentBlack: "rgba(0, 0, 0, 0.5)"
};

export const styles = StyleSheet.create({
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
    backgroundColor: "royalblue",
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
    backgroundColor: "royalblue"
  },
  whiteTxt: {
    color: "white"
  }
});
