import { View, Text } from "react-native";
import React from "react";
import { useAuthStore } from "../store/authStore";
import styles from "../assets/styles/profile.styles";
import { Image } from "expo-image";
import { formatMemberSince } from "../lib/util";
export default function ProfileHeader() {
  const { user } = useAuthStore;
  if (!user) return null;

  return (
    <View style={styles.profileHeader}>
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.memberSince}>
          Joined {formatMemberSince(user.createdAt)}
        </Text>
      </View>
    </View>
  );
}