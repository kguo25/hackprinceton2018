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
  View
} from 'react-native';
import MyMap from './components/map';

type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MyMap />
      </View>
    );
  }
}
