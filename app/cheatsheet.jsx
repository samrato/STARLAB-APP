import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Markdown from "react-native-markdown-display";
import COLORS from "../constants/colors";
import { useThemeStore } from "../store/themeStore";
import { CHEATSHEETS } from "../data/cheatsheets";

export default function CheatSheetScreen() {
  const { item } = useLocalSearchParams();
  const darkMode = useThemeStore((state) => state.darkMode);
  const sheet = CHEATSHEETS[item];

  if (!sheet) {
    return (
      <View style={[styles.container, { backgroundColor: darkMode ? "#121212" : COLORS.white }]}>
        <Text style={[styles.title, { color: darkMode ? "#fff" : COLORS.primary }]}>
          Cheatsheet Not Found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: darkMode ? "#121212" : COLORS.white }}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: darkMode ? "#fff" : COLORS.primary }]}>
          {sheet.title}
        </Text>
        <Markdown style={getMarkdownStyles(darkMode)}>
          {sheet.content}
        </Markdown>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

const getMarkdownStyles = (darkMode) => ({
  body: {
    color: darkMode ? "#eee" : COLORS.text,
    fontSize: 16,
  },
  code_inline: {
    backgroundColor: darkMode ? "#333" : "#eee",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
  },
  code_block: {
    backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
  },
  fence: {
    backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
  },
});
