import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/colors";
import { useThemeStore } from "../../store/themeStore";

const DATA = {
  programming: {
    title: "Programming",
    items: [
      "C",
      "C++",
      "Java",
      "Go",
      "Express",
      "Kotlin",
      "CSS",
      "HTML",
      "Laravel",
      "PHP",
      "JavaScript",
      "Python",
      "Rust",
    ],
  },
  databases: {
    title: "Databases",
    items: ["MongoDB", "Neo4j", "MySQL", "Redis", "PostgreSQL"],
  },
  linux: {
    title: "Linux Commands",
    items: ["Bash", "SSH", "Chmod", "Curl", "Tmux"],
  },
  toolkits: {
    title: "Toolkits",
    items: ["Git", "Docker"],
  },
  shortcuts: {
    title: "Keyboard Shortcuts",
    items: ["VS Code", "Windows", "Mac"],
  },
};


export default function Home() {
  const router = useRouter();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#121212" : COLORS.white },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.introTitle,
            { color: darkMode ? "#fff" : COLORS.primary },
          ]}
        >
          Welcome to StarLab Cheatsheets
        </Text>
        <Text
          style={[
            styles.introText,
            { color: darkMode ? "#ccc" : COLORS.textSecondary },
          ]}
        >
          Tap a category, pick a topic, and view cheatsheets instantly. Boost
          your productivity and skill.
        </Text>
      </View>

      {Object.entries(DATA).map(([key, section]) => (
        <View
          key={key}
          style={[
            styles.card,
            {
              backgroundColor: darkMode
                ? "#1e1e1e"
                : COLORS.cardBackground || "#f8f8f8",
            },
          ]}
        >
          <Text
            style={[
              styles.cardTitle,
              { color: darkMode ? "#fff" : COLORS.primary },
            ]}
          >
            {section.title}
          </Text>

          <View style={styles.itemList}>
            {section.items.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.itemButton,
                  {
                    backgroundColor: darkMode ? COLORS.primary : COLORS.primary,
                  },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/cheatsheet",
                    params: { category: section.title, item },
                  })
                }
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },
  introText: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  itemButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  itemText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});
