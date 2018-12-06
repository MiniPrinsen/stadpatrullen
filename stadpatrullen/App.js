import React from 'react';
import Firebase from './Firebase';
import TabBarNavigation from './src/components/TabBarNavigation';

export default class App extends React.Component {

  componentWillMount() {
    console.log("WOHOOOOOOO");
    Firebase.init();
  }
  render() {
    return (
      <TabBarNavigation />
    );
  }
}


