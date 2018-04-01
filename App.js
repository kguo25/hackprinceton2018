/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';
import MainScreen from './components/MainScreen';

type Props = {};
export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MainScreen,
          title: 'Let\'s Explore!',
        }}
        style={{flex: 1}}
      />
    );
  }
}

