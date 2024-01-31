import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from "../Weighing/style";

import * as Animatable from 'react-native-animatable';

export default function Weighing() {
    return (
       <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}> ADICIONAR PESAGEM</Text>
            </View>
            <View>
                <Text>N° Animal</Text>
                <TextInput></TextInput>
                <Text>Periodo (data inicio)</Text>
                <TextInput></TextInput>
                <Text>Periodo (data final)</Text>
                <TextInput></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text 
                    style={styles.buttonText}
                    >Buscar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>N° animal</Text>
                <TextInput></TextInput>
                <Text>Novo peso</Text>
                <TextInput></TextInput>
                <Text>Data</Text>
                <TextInput></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text 
                    style={styles.buttonText}
                    >Adicionar</Text>
                </TouchableOpacity>
            </View>

       </View>
    );
}
