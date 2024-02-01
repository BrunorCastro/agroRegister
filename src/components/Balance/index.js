import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';
import styles from '../../pages/Main/style';

export default function Balance() {
    return (
       <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Lote</Text>
            <View>
                <Text style={styles.balance}>0</Text>
            </View>   
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Lote</Text>
            <View>
                <Text style={styles.balance}>0</Text>
            </View>   
        </View>

       </View>
    );
}