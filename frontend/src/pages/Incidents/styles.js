import { StyleSheet } from "react-native";
import constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 13,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 18,
    marginTop: 48,
    fontWeight: "bold",
    color: "#131313"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },
  incidentList: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },
  detailButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
