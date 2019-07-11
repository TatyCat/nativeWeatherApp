import React from 'react';
import {
  Platform, TextInput, StyleSheet, Text, KeyboardAvoidingView
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container} behavior="padding">
      <Text style={[styles.largeText, styles.textStyle]}>
        San Tampa
        </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Clouds
        </Text>
      <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
      <TextInput
        autoCorrect={false}
        placeholder="Search any city"
        placeholderTextColor="white"
        style={styles.TextInput}
        clearButtonMode="always"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  }, TextInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
