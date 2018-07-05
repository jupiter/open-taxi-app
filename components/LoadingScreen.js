import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import gotInitialState from '../store/actions/gotInitialState';
import gotInitialLocation from '../store/actions/gotInitialLocation';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentDidUpdate() {
    if (this.props.registration.id) {
      if (this.props.initialLocation) {
        this.props.navigation.navigate('Main');
      }
      // TODO: Failed location should present warning
    } else {
      this.props.navigation.navigate('Auth');
    }
    console.log(this.props);
  }

  // Fetch the token from storage then navigate to our appropriate place
  async _bootstrapAsync() {
    AsyncStorage.multiGet(['userToken'], this.props.gotInitialState);

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then(granted => {
          if (granted && this.mounted) this._getCurrentLocation();
        });
    } else {
      this._getCurrentLocation();
    }
  }

  _getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(this.props.gotInitialLocation)
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({
  registration,
  initialLocation,
}) => ({
  registration,
  initialLocation,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  gotInitialState,
  gotInitialLocation,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingScreen);
