import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import ReturnIcon from "../components/ReturnIcon";


export default function AddTodo({handleAdd}) {
    const [taskText, setTaskText] = useState('');
    const [workable, setWorkable] = useState(false);

    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_400Regular
    });
    
    if (!fontsLoaded) {
        return null;
    }

    const onChange = (text) => {
        if(taskText && taskText.length > 3) {
            setWorkable(true);
        } else {
            setWorkable(false);
        }
        setTaskText(text);
    }
    
    return (
        <SafeAreaView style={styles.addWrapper}>
            <View style={styles.return}>
                <ReturnIcon style={styles.return__logo}/>
                <Text style={styles.return__text}>Вернуться назад</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} onChangeText={onChange} placeholder='Текст новой задачи' requred/>
                <Button 
                    title='Добавить' 
                    onPress={() => handleAdd(taskText)} 
                    color={workable ? '#222F3E' : 'rgba(34, 47, 62, 0.5)'}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addWrapper: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    return: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,

    },
    return__text: {
        paddingLeft: 30,
        fontFamily: 'Roboto_500Medium',
        fontSize: 28,
        color: '#999999'
    },
    inputWrapper: {
        flex: 9,
        justifyContent: 'center',
    },
    input: {
        background: '#FAFAFE',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 8,
        width: '100%',
        paddingLeft: 8,
        minHeight: 44,
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#222F3E',
        padding: 8,
        marginBottom: 16
    }
});
