import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingBottom:38,
        backgroundColor : 'coral',
    },
    title:{
        fontWeight : 'bold',
        marginTop: 40,
        textAlign : 'center',
        color: '#fff',
        fontSize : 20,
        fontWeight : 'bold'
    }
})