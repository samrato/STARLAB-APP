import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
