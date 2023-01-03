import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import AzaliaIcon from './components/AzaliaIcon';
import MainStack from './navigate';

export default function App() {

  const [tasks, setTasks] = useState([
    {id: 1, text: 'Сделать тестовое'},
    {id: 2, text: 'Сделать тестовое'},
    {id: 3, text: 'Начать зарабатывать 🙌'},
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 3000)
  }, [])


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
    }
  }

  const handleDelete = (id) => {
    setTasks((list) => {
      return list.filter((element) => element.id !== id)
    })
  }

  
  if (loading) {
    return (
      <SafeAreaView style={styles.loading}>
        <AzaliaIcon/>
        <ActivityIndicator size="large" color="#ff003c" />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainStack tasks={tasks} handleDelete={handleDelete} handleAdd={handleAdd}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFE',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  }
});
