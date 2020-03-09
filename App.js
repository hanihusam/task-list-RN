import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [lists, setLists] = useState([
    { text: "Shopping", key: "1" },
    { text: "Learn Django", key: "2" },
    { text: "Practice", key: "3" }
  ]);

  const pressHandler = id => {
    setLists(prevLists => prevLists.filter(list => list.key !== id));
  };

  const submitHandler = todo => {
    if (todo.length > 3) {
      setLists(prevLists => [
        { text: todo, key: Math.random().toString() },
        ...prevLists
      ]);
    } else {
      Alert.alert(
        "OOPS!",
        "Task must be over 3 chars long",
        [{ text: "Okay", onPress: () => console.log("Alert closed") }],
        { cancelable: false }
      );
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={lists}
              renderItem={({ item }) => (
                <TodoItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    paddingHorizontal: 10
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
