import * as firebase from 'firebase';
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

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFdHmbAzPfZpHcNJw12Eq6J2itWwd8uwI",
  authDomain: "hack-princeton-dc555.firebaseapp.com",
  databaseURL: "https://hack-princeton-dc555.firebaseio.com/",
  storageBucket: "gs://hack-princeton-dc555.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class AddPhoto extends Component {
	render() {
		return (
	      <View style={{flex: 1}}>
	      	<TouchableOpacity style={styles.footerButton}>
	      		<Text style={styles.buttonText}>Post</Text>
	      	</TouchableOpacity>
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
  footerButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

