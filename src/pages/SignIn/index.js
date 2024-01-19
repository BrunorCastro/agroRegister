import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from "../SignIn/style";

import * as Animatable from 'react-native-animatable'

import {useNavigation } from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
                    style={{width: "100%" }}
                    resizeMode="contain"
                />    
            </View>

            <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text 
                    style={styles.buttonText}
                    onPress={ () => navigation.navigate('Main')}
                    >Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text 
                    style={styles.resisterText} 
                    onPress={ () => navigation.navigate('Registrations')}>
                    Não possui uma conta? cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>        
        
    );
}