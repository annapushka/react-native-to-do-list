import React, {} from "react";
import { StyleSheet, View } from 'react-native';
import AzaliaIcon from './components/AzaliaIcon';
import Task from './components/Task';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <AzaliaIcon style={styles.title}/>
        <View style={styles.items}>
          <Task text='Сделать тестовое'/>
          <Task text='Сделать тестовое'/>
          <Task text='Начать зарабатывать 🙌'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  },
  tasksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '6rem'
  },
  title: {
    paddingHorizontal: '1rem'
  },
  items: {
  }
});
