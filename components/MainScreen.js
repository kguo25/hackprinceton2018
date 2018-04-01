import MyMap from './map';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPhoto from './AddPhoto';

export default class MainScreen extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _handleAddButton() {
    const addPost = {
      component: AddPhoto,
      title: 'Post Photo',
    };
    this.props.navigator.push(addPost);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MyMap />

        <TouchableOpacity onPress={() => this._handleAddButton()} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20, 
    bottom: 20,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});