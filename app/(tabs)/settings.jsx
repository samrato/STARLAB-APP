import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/colors";
import { useThemeStore } from "../../store/themeStore";

export default function Settings() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  const openAbout = () =>
    alert("StarLab is a story sharing and learning app powered by community.");
  const openPrivacy = () => alert("We never share your data.");
  const openFeedback = () =>
    alert("Send your feedback to feedback@starlab.app");
  const openDiscover = () => alert("Explore curated content inside the app!");
  const openContact = () => alert("Contact us at support@starlab.app");

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: darkMode ? "#121212" : COLORS.white },
      ]}
    >
      <Text
        style={[styles.header, { color: darkMode ? "#fff" : COLORS.primary }]}
      >
        Settings
      </Text>

      {/* Preferences */}
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            { color: darkMode ? "#eee" : COLORS.textPrimary },
          ]}
        >
          Preferences
        </Text>

        <View style={styles.toggleRow}>
          <Text
            style={[
              styles.toggleLabel,
              { color: darkMode ? "#ccc" : COLORS.text },
            ]}
          >
            Dark Mode
          </Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#ccc", true: COLORS.primary }}
            thumbColor={darkMode ? COLORS.primary : "#f4f3f4"}
          />
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            { color: darkMode ? "#eee" : COLORS.textPrimary },
          ]}
        >
          More Options
        </Text>

        <TouchableOpacity style={styles.row} onPress={openFeedback}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color={COLORS.primary}
          />
          <Text
            style={[styles.rowText, { color: darkMode ? "#ccc" : COLORS.text }]}
          >
            Feedback
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={openDiscover}>
          <Ionicons name="compass-outline" size={24} color={COLORS.primary} />
          <Text
            style={[styles.rowText, { color: darkMode ? "#ccc" : COLORS.text }]}
          >
            Discover
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={openContact}>
          <Ionicons name="call-outline" size={24} color={COLORS.primary} />
          <Text
            style={[styles.rowText, { color: darkMode ? "#ccc" : COLORS.text }]}
          >
            Contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={openAbout}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={COLORS.primary}
          />
          <Text
            style={[styles.rowText, { color: darkMode ? "#ccc" : COLORS.text }]}
          >
            About StarLab
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={openPrivacy}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color={COLORS.primary}
          />
          <Text
            style={[styles.rowText, { color: darkMode ? "#ccc" : COLORS.text }]}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.footer,
            { color: darkMode ? "#999" : COLORS.textSecondary },
          ]}
        >
          App Version 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  toggleLabel: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rowText: {
    fontSize: 16,
    marginLeft: 12,
  },
  footer: {
    fontSize: 14,
    marginTop: 12,
    textAlign: "center",
  },
});
