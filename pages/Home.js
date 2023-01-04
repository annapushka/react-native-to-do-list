import React, {useContext} from "react";
import { StyleSheet, View, Button, FlatList, SafeAreaView } from 'react-native';

import {TasksContext} from '../TasksContext';

import AzaliaIcon from '../components/AzaliaIcon';
import Task from '../components/Task';

export default function Home({navigation}) {

  const { tasks, handleDelete } = useContext(TasksContext);
  
  return (
    <SafeAreaView  style={styles.homeWrapper}>
      <View style={styles.tasksWrapper}>
        <AzaliaIcon style={styles.title}/>
        <View style={styles.items}>
          <FlatList data={tasks} renderItem={({item}) => (
            <Task {...item} key={item.id} handleDelete={handleDelete}/>
            )}/>
        </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title="+"
            style={styles.btn}
            onPress={() =>
                navigation.navigate('AddTodo')
              }
          />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    tasksWrapper: {
        flex: 9,
        paddingTop: 70
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    btnWrapper: {
        flex: 1,
    }
});
