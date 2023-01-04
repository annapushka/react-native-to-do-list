import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import AzaliaIcon from './components/AzaliaIcon';
import { TasksContextProvider } from './TasksContext';


export default function App() {

  const [loading, setLoading] = useState(true);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {setLoading(false)}, 3000)
  }, [])

  
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
      <TasksContextProvider>
        <Home/>
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name = 'Home'
                container={Home}
            />
            <Stack.Screen 
                name = 'AddTodo'
                container={AddTodo}
            />
          </Stack.Navigator>
        </NavigationContainer> */}
      </TasksContextProvider>
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
