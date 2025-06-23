import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { useThemeStore } from "../../store/themeStore";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: darkMode ? "#888" : "#555",
        tabBarStyle: {
          backgroundColor: darkMode ? "#1e1e1e" : COLORS.cardBackground,
          borderTopWidth: 1,
          borderTopColor: darkMode ? "#333" : COLORS.border,
          paddingTop: 5,
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
