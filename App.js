import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/index';

export default class App extends React.Component {
  render() {
    return (
      <Layout />
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
