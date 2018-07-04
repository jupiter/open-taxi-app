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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/images/HomeIcon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

export default HomeScreen;
