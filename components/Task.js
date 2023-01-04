import React, { useState } from "react";
import { View, Text, StyleSheet, CheckBox, Animated, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Swipeable } from "react-native-gesture-handler";


export default function Task({text, id, handleDelete}) {
    const [isSelected, setSelection] = useState(false);
    
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    const renderRightActions = (
        progress,
        dragAnimatedValue,
        ) => {
            const opacity = dragAnimatedValue.interpolate({
                inputRange: [-150, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            });
            return (
                <View style={styles.swipedRow}>
                <Animated.View style={{opacity}}>
                    <TouchableOpacity onPress={() => handleDelete(id)}>
                        <Text style={styles.deleteButtonText}>DEL</Text>
                    </TouchableOpacity>
                </Animated.View>
                </View>
                );
            };
    

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity style={styles.item}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={!isSelected ? styles.item__text : [styles.item__text, styles.item__text_selected]}>{text}</Text>
            </TouchableOpacity>
        </Swipeable>
       
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
        marginVertical: 8,
        marginHorizontal: 20,
    },
    item__text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#222F3E',
        padding: 8,
    },
    item__text_selected: {
        color: 'rgba(34, 47, 62, 0.5)',
        textDecorationLine: 'line-through',
    },
    checkbox: {
        alignSelf: 'center',
        accentColor: '#222F3E'
    },
    deleteButtonText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        padding: 16,
        color: '#ff003c'
    }
  });