import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';

export default function Background({children}) {
  return (
    <View style = {styles.container}>
        <View style={{position: 'absolute'}}>
        {children}
        </View>
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#250E67',
    }});
