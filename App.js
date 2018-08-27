/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  state = {
    greeting: 'Hello'
  };

  setGreeting = text => {
    this.setState({ greeting: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.state.greeting}</Text>
        <Text>Update greeting:</Text>
        <TextInput
          onChangeText={this.setGreeting}
          name="greeting"
          value={this.state.greeting}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
