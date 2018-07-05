import React from 'react';
import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { MapView } from 'expo';

import MyLocationMapMarker from './MyLocationMapMarker';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    bottom: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pickupMarkerContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  bottomContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../../assets/images/HomeIcon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MyLocationMapMarker />
          </MapView>
          <View style={styles.buttonContainer}>
            <Button title="Hamburger" onPress={() => this.props.navigation.openDrawer()} />
          </View>
          <View style={styles.pickupMarkerContainer}>
            <Text>Pick me up here!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={() => this.props.navigation.openDrawer()} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Alt" onPress={() => this.props.navigation.openDrawer()} />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
