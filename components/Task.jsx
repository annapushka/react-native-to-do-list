import React, { useState } from "react";
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';


function Task(props) {
    const [isSelected, setSelection] = useState(false);
    
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.item}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.item__text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#FAFAFE',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 8,
        width: 'calc(100% - 40px)',
        paddingLeft: 8,
        marginTop: 17,
        marginLeft: 20,
        marginRight: 20,
    },
    item__text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: '1.5rem',
        color: '#222F3E',
        padding: 8,
    },
    checkbox: {
        alignSelf: "center",
        accentColor: '#222F3E'
    }
  });

export default Task;