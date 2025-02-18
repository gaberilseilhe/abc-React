import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function LoginScreen() {
    function handleLogin() {}

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastre-se</Text>
            <Text style={{fontSize:15, fontWeight: 'bold', }} >Seu nome</Text>
            <TextInput
        
                style={styles.input}
                placeholder="Digite seu nome"
            />
              <Text style={{fontSize:15, fontWeight: 'bold', }} >Seu E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />  <Text style={{fontSize:15, fontWeight: 'bold', }} >Sua Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                
            />

            <Button title="Entrar" color="#007BFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
        paddingLeft: 15,
        fontSize: 16,
    },
});
