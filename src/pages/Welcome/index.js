import React from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from "../Welcome/style";

import * as Animatable from 'react-native-animatable'

import {useNavigation } from '@react-navigation/native'

export default function Welcome(){
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

            <Animatable.View delay={500} animation='fadeInUp' style={styles.containerForm}>
                
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}