import React, {useContext} from "react";
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TasksContext } from '../TasksContext';

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
        <TouchableOpacity style={styles.btnWrapper} onPress={() => navigation.navigate('AddTodo')}>
          <Ionicons name="add-circle-sharp" size={56} color="#222F3E" />
      </TouchableOpacity>
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
        marginTop: 30
    },
    btnWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 16,
    }
});
