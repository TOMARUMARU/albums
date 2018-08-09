// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlubumList from '.;/src/components/AlbumList';

// Create a component
const App = () => (
  <Header headerText={'Albums'} />
  <AlbumList />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
