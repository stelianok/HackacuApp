import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  list: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    borderBottomColor: "#E3E3E5",
  },
  firstContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
    paddingLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#585666",
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  subtitleText: {
    fontSize: 12,
    color: "#585666",
    flex: 0.4,
  },
  listContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },
  titleList: {
    fontSize: 20,
    fontWeight: "600",
    color: "#585666",
  },
  subList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  subtitleList: {
    fontSize: 12,
    color: "#585666",
    flex: 1,
    flexDirection: "column",
    width: 100,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "#585666",
  },
});
