import React from "react";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = 'Home'
                container={Home}
                options={{title: 'Главная'}}
            />
            <Stack.Screen
                name = 'AddTodo'
                container={AddTodo}
                options={{title: 'Добавление задачи'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}