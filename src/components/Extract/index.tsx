import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import Icon from "@expo/vector-icons/FontAwesome";

const data = [
  {
    title: "League of Legends",
    maturity: "Vence em 09/08/21",
    price: "R$ 64,00",
  },
  {
    title: "Aluguel de Julho",
    maturity: "Vence em 09/08/21",
    price: "R$ 5.531,00",
  },
  {
    title: "League of Legends",
    maturity: "Vence em 09/08/21",
    price: "R$ 64,00",
  },
];

export const Extract = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.list}>
          <View style={styles.firstContent}>
            <Text style={styles.title}>A Vencer</Text>
            <Text style={styles.subtitle}>
              <Icon name="filter" size={15} color="#979797" />
              <Text style={styles.subtitleText}> Filtros</Text>{" "}
            </Text>
          </View>
        </View>
        {data.map((item, index) => (
          <View style={styles.listContent} key={index}>
            <View style={styles.firstContent}>
              <Text style={styles.subList}>
                <Text style={styles.titleList}>{item.title}</Text>
                <Text style={styles.subtitleList}>{item.maturity}</Text>
              </Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
