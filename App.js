import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import Layout from './src/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Layout />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
