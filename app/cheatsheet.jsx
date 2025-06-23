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
      <View
        style={[
          styles.container,
          { backgroundColor: darkMode ? "#121212" : COLORS.white },
        ]}
      >
        <Text style={[styles.title, { color: darkMode ? "#fff" : COLORS.primary }]}>
          Cheatsheet Not Found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: darkMode ? "#121212" : COLORS.white }}
      contentContainerStyle={styles.wrapper}
    >
      <Text style={[styles.title, { color: darkMode ? "#fff" : COLORS.primary }]}>
        {sheet.title}
      </Text>
      <Markdown style={getMarkdownStyles(darkMode)}>
        {sheet.content}
      </Markdown>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

const getMarkdownStyles = (darkMode) => ({
  body: {
    color: darkMode ? "#eee" : COLORS.text,
    fontSize: 16,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 22,
    color: darkMode ? "#fff" : COLORS.primary,
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    color: darkMode ? "#fff" : COLORS.primary,
    marginBottom: 8,
  },
  code_inline: {
    backgroundColor: darkMode ? "#2b2b2b" : "#e5e5e5",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    color: darkMode ? "#fff" : "#000",
  },
  code_block: {
    backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    color: darkMode ? "#eee" : "#000",
  },
  fence: {
    backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    color: darkMode ? "#eee" : "#000",
  },
});
