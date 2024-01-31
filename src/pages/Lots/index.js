import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from "../Lots/style";

import * as Animatable from 'react-native-animatable';

export default function Lots() {
    return (
       <View style={styles.container}>
        <View style={styles.title}>
        <Text style={styles.textTitle}>ADICIONAR LOTE</Text>
        </View>
        <View style={styles.texts}>
            <Text style={styles.texto}>Nome do lote</Text>
            <Text style={styles.texto}>Periodo (data inicial)</Text>
            <Text style={styles.texto}>Periodo (data final)</Text>
            <TextInput placeholder='Nome do lote' style={styles.textInputs}></TextInput>
        </View>
            <TouchableOpacity>
                <Text>SALVAR</Text>
            </TouchableOpacity>
       </View>
    );
}
