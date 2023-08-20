import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.06,
    backgroundColor: '#FFFDFD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText: {
    position: 'absolute',
    color: '#1C0E57',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 22,
  }
});