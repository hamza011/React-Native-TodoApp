import { StyleSheet } from 'react-native';

export default HomeStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        // backgroundColor: '#1E6883',
        backgroundColor: '#3A2A4C',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        padding: 26,
        fontWeight: 'bold',        
    },
    scrolContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    addButton: {
        backgroundColor: '#3A2A4C',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: '#ccc',
        alignItems: 'center',
        marginBottom: 10,
        zIndex: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 34,
        marginTop: 5
    },
    inputField: {
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 18,
        padding: 20,
        paddingTop: 25,
        backgroundColor: '#3A2A4C',
        borderTopWidth: 10,
        borderTopColor: '#ddd',
    }
});