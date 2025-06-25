import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/colors";

export default function Welcome() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("(tabs)");
  };

  const handleDiscover = () => {
    alert(
      "🌟 StarLab is an interactive, categorized cheat sheet app with concise syntax, code patterns, and programming wisdom — ideal for developers of all levels.\n\nPowered by Willington Juma. 🚀"
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/images/il.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome to StarLab</Text>
          <Text style={styles.subtitle}>
            StarLab is an interactive, categorized cheat sheet app that provides
            concise syntax, code patterns, and key concepts across multiple
            programming languages — ideal for beginners, students, and
            professionals.
          </Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>🚀 Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDiscover}>
            <Text style={styles.discoverText}>🔍 Discover</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Powered by starlabtech
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  content: {
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  actions: {
    alignItems: "center",
    gap: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginBottom: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  discoverText: {
    fontSize: 16,
    color: COLORS.primary,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  footer: {
    marginTop: 20,
    fontSize: 13,
    color: COLORS.text,
    textAlign: "center",
    opacity: 0.7,
  },
});
