import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

const Stack = createStackNavigator();

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Add" component={Add} options={{ title: 'Add Task' }} />
            <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Task' }}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigator;
