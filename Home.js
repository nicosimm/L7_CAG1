import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { initialTasks } from './Data';

const Home = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const navigation = useNavigation();


    // Reusable deleteTask function
    const deleteTask = (tasks, id) => tasks.filter(task => task.id !== id);

    // Calculate completion summary
    const calculateSummary = (tasks) => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const percentageCompleted = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        return {
            completed: completedTasks,
            percentageCompleted,
        };
    };

    // Handle task deletion
    const handleDelete = (id) => setTasks(deleteTask(tasks, id));

    // Show task summary
    const showSummary = () => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        const incompleteTasks = totalTasks - completedTasks;
        const percentageCompleted = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

        Alert.alert(
            'Task Summary',
            `Completed Tasks: ${completedTasks}\n` +
            `Incomplete Tasks: ${incompleteTasks}\n` +
            `Percentage Completed: ${percentageCompleted.toFixed(2)}%`
        );
    };

    // Render a single task item
    const renderTaskItem = ({ item }) => (
        <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.description}</Text>
            <Text
                style={item.completed ? styles.completionText : styles.incompleteText}
            >
                {item.completed ? 'Completed' : 'Incomplete'}
            </Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => navigation.navigate('Edit', { item, setTasks })}
                >
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item.id)}
                >
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Filter completed and incomplete tasks
    const completedTasks = tasks.filter(task => task.completed);
    const incompleteTasks = tasks.filter(task => !task.completed);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task Manager</Text>

            {/* Completed Tasks Section */}
            {completedTasks.length > 0 && (
                <>
                    <Text style={styles.sectionTitle}>Completed Tasks</Text>
                    <FlatList
                        data={completedTasks}
                        keyExtractor={(item) => item.id}
                        renderItem={renderTaskItem}
                        numColumns={2}
                        contentContainerStyle={styles.taskContainer}
                    />
                </>
            )}

            {/* Incomplete Tasks Section */}
            {incompleteTasks.length > 0 && (
                <>
                    <Text style={styles.sectionTitle}>Incomplete Tasks</Text>
                    <FlatList
                        data={incompleteTasks}
                        keyExtractor={(item) => item.id}
                        renderItem={renderTaskItem}
                        numColumns={2}
                        contentContainerStyle={styles.taskContainer}
                    />
                </>
            )}

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('Add', { tasks, setTasks })}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.summaryButton} onPress={showSummary}>
                <Text style={styles.buttonText}>View Summary</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
