import React, {useState} from "react";
import { StyleSheet, View, Button, FlatList, SafeAreaView } from 'react-native';
import AzaliaIcon from '../components/AzaliaIcon';
import Task from '../components/Task';

export default function Home({tasks}) {

  return (
    <SafeAreaView  style={styles.homeWrapper}>
      <View style={styles.tasksWrapper}>
        <AzaliaIcon style={styles.title}/>
        <View style={styles.items}>
          <FlatList data={tasks} renderItem={({item}) => (
            <Task text={item.text} key={item.id}/>
          )}/>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button
            title="+"
            style={styles.btn}
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
