import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    margin: 14,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  detailButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13
  },
  detailButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold"
  },
  form: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 12
  }
});
