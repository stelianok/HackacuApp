import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components/Header";
import { Extract } from "./src/components/Extract";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Extract />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: 300,
  },
});
