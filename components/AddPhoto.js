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

import DisplayPhoto from './DisplayPhoto';
import ImagePicker from 'react-native-image-crop-picker';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFdHmbAzPfZpHcNJw12Eq6J2itWwd8uwI",
  authDomain: "hack-princeton-dc555.firebaseapp.com",
  databaseURL: "https://hack-princeton-dc555.firebaseio.com/",
  storageBucket: "gs://hack-princeton-dc555.appspot.com",
};

let firebaseApp;
try {
  firebaseApp = firebase.initializeApp(firebaseConfig)
  } catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default class AddPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  image : ""
		};
	}

	_displayPhoto(image) {
		const displayPhoto = {
	      component: DisplayPhoto,
	      title: 'Uploaded Photo',
	      passProps: { myImage: image }
	    };
	    this.props.navigator.push(displayPhoto);
	 }

	_addPhoto() {
		ImagePicker.openPicker({
		  cropping: false
		}).then(image => {
		  console.log(image);
		  this._displayPhoto(image);
		});
	}

	render() {
		return (
	      <View style={{flex: 1}}>
	      	<TouchableOpacity onPress={() => this._addPhoto()} style={styles.footerButton}>
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
    color: '#ffa',
    fontSize: 24,
  },
});

