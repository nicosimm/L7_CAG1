import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import styles from './Styles.js';

const Add = ({ route, navigation }) => {
    const { tasks, setTasks } = route.params;
    const [description, setDescription] = useState('');

    // Local addTask function
    const addTask = (tasks, description) => {
        const newTask = {
            id: (tasks.length + 1).toString(),
            description,
            completed: false,
        };
        return [...tasks, newTask];
    };

    const handleAdd = () => {
        if (description.trim()) {
            setTasks(addTask(tasks, description));
            navigation.goBack();
        } else {
            Alert.alert('Error', 'Task description cannot be empty.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            <TextInput
                style={styles.input}
                placeholder="Task description"
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Add" onPress={handleAdd} />
        </View>
    );
};

export default Add;
