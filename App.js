/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {Root} from './src/routing/Routing';

import Home from './src/components/home/Home';
export default class App extends Component {
  render() {
    return (
      // <Root />
      <Home />
    );
  }
}
