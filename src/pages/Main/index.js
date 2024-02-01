import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from "../Main/style";

import * as Animatable from 'react-native-animatable';
import Header  from '../../components/Header';
import Balance from '../../components/Balance';

export default function Main() {
    return (
       <View>
        <Header name="Bruno Castro" />
        <Balance/>
        <Text>vamos nessa</Text>
       </View>
    );
}
