import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#C66917",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    paddingTop: 50,
    paddingBottom: 50,
  },
  top: {
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  subtitle: { 
    color: "white", 
    fontSize: 13,
    paddingTop: 4,
},
  image: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
});
