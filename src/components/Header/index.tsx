import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.top}>
        <Text style={styles.title}>Olá Tiago</Text>
        <Text style={styles.subtitle}>Mantenha suas contas em dia</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/thiago-cli.png")}
      />
    </View>
  );
};
