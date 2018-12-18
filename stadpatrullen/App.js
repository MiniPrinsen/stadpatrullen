import React from 'react';
import db from './Firebase';
import TabBarNavigation from './src/components/TabBarNavigation';

export default class App extends React.Component {

  componentWillMount() {
    console.log("WOHOOOOOOO");
    db.init();
   // let reference = db.createRef();
    //var test = reference.ref('/messages/');
    //console.log(test);
    
    //let hej = Firebase.database().ref('zones/dSJu2oAssLXusFihAOBW/lastcleaned');
    //console.log(hej);
  }
  render() {
    return (
      <TabBarNavigation />
    );
  }
}


