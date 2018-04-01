import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  Image
} from 'react-native';

export default class DisplayPhoto extends Component {
	render() {
		return (
	      <View style={{flex: 1}}>
	      	<Image source={this.props.myImage} />
	      </View>
	    );
	}
}	