import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get('/')
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error('Erro ao buscar dados', error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Backend diz:</Text>
            <Text style={styles.message}>{message || 'Carregando...'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default Home;
