import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { AppRegistry } from 'react-native'
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFdHmbAzPfZpHcNJw12Eq6J2itWwd8uwI",
  authDomain: "hack-princeton-dc555.firebaseapp.com",
  databaseURL: "https://hack-princeton-dc555.firebaseio.com/",
  storageBucket: "gs://hack-princeton-dc555.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

var database = firebaseApp.database();

const initialRegion = {
  latitude: 40.3573,
  longitude: -74.6672,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const testMarkers = [
  {latlng: {
      latitude: 40,
      longitude: -70,
    }
  },
  {latlng: 
    {
      latitude: 41,
      longitude: -76,
    }
  }
]

type Props = {};
export default class MyMap extends Component {
  map = null;

  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
    markers: null,
  }

  setRegion(region) {
    if(this.state.ready) {
      setTimeout(() => this.map.mapview.animateToRegion(region), 10);
    }
    //this.setState({ region });
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    let pressedLat = e.nativeEvent.coordinate.latitude;
    let pressedLng = e.nativeEvent.coordinate.longitude
    this.onRegionChange(region, region.latitude, region.longitude);
    database.ref('markers').once("value").then(function(snapshot) {
      let databaseVals = snapshot.val();
      let updatedVals = [];
      for (let tuple of databaseVals) {
        if (tuple.longitude > (pressedLat-0.05) && tuple.longitude < (pressedLat+0.05) && tuple.latitude > (pressedLat-0.05) && tuple.latitude < pressedLat+0.05) {
          updatedVals.push(tuple);
        }
      }
      //send updatedVals to new page
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={e => this.onMapPress(e)}>
        </MapView>

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MyMap);