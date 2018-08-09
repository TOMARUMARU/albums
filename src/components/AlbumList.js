import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axions from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    console.log('test');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
