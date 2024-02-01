import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';

import styles from "../Header/style";

import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight;

export default function Header({name}) {
    return (
       <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.username}>{name}</Text>

            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="user" size={27} color="#fff"/>
            </TouchableOpacity>
        </View>

       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#034001",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom:44,
    },
    content:{
        flex: 1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    usarname:{
        fontSize: 18,
        color: "#fff",
        fontWeight:"bold",
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255, 0.5)",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 44 / 2,
    },
});