import React, { useState } from 'react';
import { View, TextInput, Button, Switch, Text } from 'react-native';
import styles from './Styles.js';

const Edit = ({ route, navigation }) => {
    const { item, setTasks } = route.params;
    const [description, setDescription] = useState(item.description);
    const [completed, setCompleted] = useState(item.completed);

    const handleEdit = () => {
        if (description.trim()) {
            const updatedTasks = tasks.map((task) =>
                task.id === currentTask.id ? { ...task, description } : task
            );
            setTasks(updatedTasks);
            navigation.goBack();
        } else {
            Alert.alert('Error', 'Task description cannot be empty.');
        }
    };

    const saveTask = () => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === item.id ? { ...task, description, completed } : task
            )
        );
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Task</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />
            <View style={styles.switchContainer}>
                <Text>Completed:</Text>
                <Switch value={completed} onValueChange={setCompleted} />
            </View>
            <Button title="Save" onPress={saveTask} />
        </View>
    );
};

export default Edit;
