import { StyleSheet } from 'react-native';

export default TodoStyle = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#3A2A4C',
    },
    delete: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#FD2443',
        backgroundColor: '#E74C3C',
        padding: 20,
        bottom: 10,
        top: 10,
        right: 10,
    },
    delButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});