// Plan3.js

import React from 'react';
import { View, Text } from 'react-native';

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,

    }
  }


  render() {
    return (
      <View>
        <Text>THIS IS PLAN3</Text>
      </View>
    )
  }
}