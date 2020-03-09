import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="ios-clipboard" size={32} color="#424874" />
      <Text style={styles.title}>My Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 70,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    marginLeft: 10,
    fontSize: 36,
    fontWeight: "800",
    color: "#424874"
  }
});
