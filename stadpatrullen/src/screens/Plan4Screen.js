// Plan4.js

import React from 'react';
import { Alert, TouchableOpacity, Button, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';


let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    zIndex: 0,
    position: 'absolute',
    resizeMode: 'cover', // or 'stretch'
  },
  sunImage: {
    flex: 1,
    zIndex: 0,
    position: 'relative',
    resizeMode: 'contain',
    marginLeft: "45%",
  
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
  zoneOnePlanFourBlack: {
    height: 100,
    width: 75,
    backgroundColor: "black"
  },
  zoneOnePlanFourCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF"
  },
  zoneTwoPlanFourBlack: {
    height: 100,
    width: 75,
    backgroundColor: "#909090",
    marginTop: "1%"
  },
  zoneTwoPlanFourCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF",
    marginTop: "1%"
  },
  zoneThreePlanFourBlack: {
    height: 100,
    width: 75,
    backgroundColor: "#707070",
    marginTop: "1%"
  },
  zoneThreePlanFourCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF",
    marginTop: "1%"
  },
});
export default class Plan4Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      zoneColor: '#000',
      toggledButton: false,
      toggledButton2: false,
      toggledButton3: false,
    }
  }

  render() {
    const { 
      sunImage, 
      zoneOnePlanFourCleared, 
      zoneOnePlanFourBlack,
      zoneTwoPlanFourCleared,
      zoneTwoPlanFourBlack,
      zoneThreePlanFourCleared,
      zoneThreePlanFourBlack,
      headerText
    } = styles

    const { toggledButton, toggledButton2, toggledButton3 } = this.state
    let zoneOnePlanFour = toggledButton ? zoneOnePlanFourCleared : zoneOnePlanFourBlack
    let zoneTwoPlanFour = toggledButton2 ? zoneTwoPlanFourCleared : zoneTwoPlanFourBlack
    let zoneThreePlanFour = toggledButton3 ? zoneThreePlanFourCleared : zoneThreePlanFourBlack

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>

      <Image style={styles.sunImage}source={require('../../assets/Sun.png')}/>

        <Text style={headerText}>  NATURVETARHUSET</Text>

        <TouchableOpacity style={zoneOnePlanFour} onPress={() => Alert.alert(
          'Plan 4 Zon 1',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => this.setState(prevState => ({
              toggledButton: !prevState.toggledButton
            })), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>

        <TouchableOpacity style={zoneTwoPlanFour} onPress={() => Alert.alert(
          'Plan 4 Zon 2',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => this.setState(prevState => ({
              toggledButton2: !prevState.toggledButton2
            })), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>

        <TouchableOpacity style={zoneThreePlanFour} onPress={() => Alert.alert(
          'Plan 4 Zon 3',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => this.setState(prevState => ({
              toggledButton3: !prevState.toggledButton3
            })), style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>

        <Text style={styles.planText}>Plan 4</Text>
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        
      </View>
    );
  }
}