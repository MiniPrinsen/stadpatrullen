// Plan3.js

import React from 'react';
import { Alert, TouchableOpacity, Button, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    zIndex: 0,
    position: 'absolute',
    resizeMode: 'cover', // or 'stretch'
  },
  cloudImage: {
    flex: 1,
    zIndex: 0,
    position: 'relative',
    resizeMode: 'contain',
    marginLeft: "40%",
  
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 24,
    zIndex: 3,
    position: 'relative',
    marginBottom: "10%",
    color: "#707070",
    zIndex: 1,
  },
  planText: {
    fontSize: 46,
    color: "#707070",
    marginTop: "40%",
  },
  zoneOnePlanThreeBlack: {
    height: 100,
    width: 75,
    backgroundColor: "black"
  },
  zoneOnePlanThreeCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF"
  },
  zoneTwoPlanThree: {
    height: 100,
    width: 75,
    backgroundColor: "#909090",
    marginTop: "1%"
  },
  zoneThreePlanThree: {
    height: 100,
    width: 75,
    backgroundColor: "#707070",
    marginTop: "1%"
  }
});

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      zoneColor: '#000',
      toggledButton: false,
    }
  }

  render() {
    const { 
      cloudImage, 
      zoneOnePlanThreeCleared, 
      zoneOnePlanThreeBlack,
      headerText
    } = styles

    const { toggledButton } = this.state
    let zoneOnePlanThree = toggledButton ? zoneOnePlanThreeCleared : zoneOnePlanThreeBlack

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Image style={cloudImage} source={require('../../assets/Cloud.png')}/>
        <Text style={headerText}>  NATURVETARHUSET</Text>
        <TouchableOpacity style={zoneOnePlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 1',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => this.setState(prevState => ({
              toggledButton: !prevState.toggledButton
            })), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>






        <TouchableOpacity style={styles.zoneTwoPlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 2',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => console.log('Ask me later pressed'), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>
        <TouchableOpacity style={styles.zoneThreePlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 3',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => console.log('Ask me later pressed'), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>
        <Text style={styles.planText}>Plan 3</Text>
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        
      </View>
    );
  }
}