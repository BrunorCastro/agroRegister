import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from "../Registrations/style";

import * as Animatable from 'react-native-animatable';

export default function Registrations() {
    return (
        <View style={styles.container}>
             <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
                    style={{width: "25%" }}
                    resizeMode="contain"
                />    
            </View>

            <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
                    <Text style={styles.title}>Nome do proprietario</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.title}>Nome completo</Text>
                    <TextInput

                        style={styles.input}
                    />

                    <Text style={styles.title}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.title}>Estado</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.title}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.title}>Confirme sua senha</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}
