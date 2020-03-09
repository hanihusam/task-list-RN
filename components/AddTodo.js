import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [task, setTask] = useState("");

  const changeHandler = val => {
    setTask(val);
  };
  return (
    <View style={styles.inputForm}>
      <TextInput
        style={styles.input}
        placeholder="New task"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(task)}
        style={styles.btnAdd}
        title="Add task"
        color="#424874"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    paddingHorizontal: 10,
    marginTop: 20
  },
  input: {
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd"
  },
  btnAdd: {
    color: "#fff"
  }
});
