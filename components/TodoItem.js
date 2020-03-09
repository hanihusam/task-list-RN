import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";
import { Ionicons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <Text style={styles.item}>{item.text}</Text>
        <Ionicons
          style={styles.icon}
          name="ios-checkmark-circle-outline"
          size={18}
          color="#1eb2a6"
          onPress={() => pressHandler(item.key)}
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    margin: 10
  },
  icon: {
    marginLeft: "auto"
  }
});
