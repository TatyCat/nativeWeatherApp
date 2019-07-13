import React from 'react';
import {
  Platform, StyleSheet, Text, KeyboardAvoidingView, View, ImageBackground
} from 'react-native';

import SearchInput from './components/SearchInput';
import getWeatherImg from './utils/getWeatherImg';
import { ContainerTypes } from 'expo-contacts';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'San Tampa'
    }
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    })
  }


  render() {
    const { location } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container} behavior="padding">

        <ImageBackground source={getWeatherImg('Clear')} style={styles.imageContainer} imageStyles={styles.image}>

          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              {location}
            </Text>


            <Text style={[styles.smallText, styles.textStyle]}>
              Light Clouds
              </Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

            <SearchInput placeholder="search any city" onSubmit={this.handleUpdateLocation} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
});
