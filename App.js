import React, {useState} from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";

export default function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Сделать тестовое'},
    {id: 2, text: 'Сделать тестовое'},
    {id: 3, text: 'Начать зарабатывать 🙌'},
  ]);
  const handleAdd = (text) => {
    if(!text) {
      return;
    } else {
      setTasks((list) => {
        return [
          ...list,
          {id: Math.random().toString(36).substring(7), text: text}
        ]
      })
      console.log(tasks)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Home tasks={tasks}/>
      {/* <AddTodo handleAdd={handleAdd}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  }
});
