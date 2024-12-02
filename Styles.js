import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF3E0', // Light creamy background
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF6B6B', // Vibrant coral pink
        marginBottom: 10,
        textAlign: 'center',
        marginTop:30,
    },
    taskContainer: {
        justifyContent: 'space-between', // Space between task cards
        paddingBottom: 10,
    },
    taskItem: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        flex: 1,
        borderWidth: 1,  // Add this line for debugging
        borderColor: '#FF6B6B',  // Add this line for debugging
    },
    taskText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    completionText: {
        fontSize: 14,
        color: '#4CAF50', // Green for completed tasks
        marginBottom: 10,
    },
    incompleteText: {
        fontSize: 14,
        color: '#FF6B6B', // Coral for incomplete tasks
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editText: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    deleteText: {
        color: '#FF4C4C',
        fontWeight: 'bold',
        fontSize: 14,
    },
    addButton: {
        backgroundColor: '#6BCB77', // Mint green button
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    summaryButton: {
        backgroundColor: '#4A90E2', // Sky blue button
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF6B6B', // Vibrant coral pink (matching the main title)
        marginVertical: 10,
        textTransform: 'uppercase', // Making titles uppercase for emphasis
        letterSpacing: 1, // Slight spacing for better readability
    },
    input: {
        backgroundColor: '#FFFFFF', // White background for text input
        borderRadius: 10, // Rounded corners
        padding: 15, // Padding inside the input
        marginVertical: 10, // Space above and below the input
        fontSize: 16, // Adjust font size
        color: '#333', // Darker text color for readability
        borderWidth: 1, // Border for clarity
        borderColor: '#FF6B6B', // Coral border to match theme
        shadowColor: '#000', // Subtle shadow effect
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
});

export default styles;
