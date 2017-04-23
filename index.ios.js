//  Index.ios.js - Place code in here for IOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />	
  </View>
 );

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);
