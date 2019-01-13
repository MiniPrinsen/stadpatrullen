// Plan3.js

import React from 'react';
import { Alert, TouchableOpacity, Button, Text, View, Image, ActivityIndicator } from 'react-native';
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
    backgroundColor: "#000000"
  },
  zoneOnePlanThreeCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF"
  },
  zoneTwoPlanThreeBlack: {
    height: 100,
    width: 75,
    backgroundColor: "#909090",
    marginTop: "1%"
  },
  zoneTwoPlanThreeCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF",
    marginTop: "1%"
  },
  zoneThreePlanThreeBlack: {
    height: 100,
    width: 75,
    backgroundColor: "#707070",
    marginTop: "1%"
  },
  zoneThreePlanThreeCleared: {
    height: 100,
    width: 75,
    backgroundColor: "#76A5FF",
    marginTop: "1%"
  },
});

var REQUEST_URL = "Boobys"
var RESET_URL = 'http://130.239.179.208:1337/cleanedZone/';

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      zoneColor: '#000',
      toggledButton: false,
      toggledButton2: false,
      toggledButton3: false,
      totalVisitors: 0
    }

    
  }

  componentDidMount(){
    
    this.timer = setInterval(() => this.getPirCount(), 10000)}
    
    async getPirCount(){
      fetch('https://daresay.herokuapp.com/nv/plan/3/sensor/4?key=41938416368104621',
      {method: "GET"})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson[0].dd.pir
        })
        console.log(responseJson[0].dd)
      })
      .catch((error) =>{
        console.error(error);
      });
    }
  cleanZone(id) {
    fetch(RESET_URL + id, {method: 'GET'})
    .then((response) => response.json())
    .then((responseJson) => {
      return (responseJson.dirtyness == 0);
    });
  }
  render() {
    const { 
      cloudImage, 
      zoneOnePlanThreeCleared, 
      zoneOnePlanThreeBlack,
      zoneTwoPlanThreeCleared,
      zoneTwoPlanThreeBlack,
      zoneThreePlanThreeCleared,
      zoneThreePlanThreeBlack,
      headerText
    } = styles

    const { toggledButton, toggledButton2, toggledButton3 } = this.state
    function getDirtynessColor(pirCounter) {
      console.log(pirCounter + "CPCPCPCP")
      if( pirCounter < 10) {
        console.log("hej jag är grön")
        return "green";
        
      } else if (pirCounter > 12){
        console.log("hej jag är gul")
        return "yellow"
      }else {
        console.log("hej jag är röd")
        return "red";
      }
    }
    let zoneOnePlanThree = toggledButton ? zoneOnePlanThreeCleared : zoneOnePlanThreeBlack
    let zoneTwoPlanThree = toggledButton2 ? zoneTwoPlanThreeCleared : zoneTwoPlanThreeBlack
    let zoneThreePlanThree = toggledButton3 ? zoneThreePlanThreeCleared : zoneThreePlanThreeBlack

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
        </View>
        )
      }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>

      <Image style={cloudImage} source={require('../../assets/Cloud.png')}/>

      {console.log(this.state.totalVisitors = this.state.totalVisitors + this.state.dataSource)}
        {console.log(this.state.totalVisitors)}
        {console.log(getDirtynessColor(this.state.totalVisitors))}
      
        <Text style={headerText}>  NATURVETARHUSET</Text>

        <TouchableOpacity style={zoneOnePlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 1',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => {
              let zone_sensors = [0,1,2,3]
              zone_sensors.forEach(index => {
                this.cleanZone(index)
              });
              this.setState(prevState => ({
                toggledButton: !prevState.toggledButton
              }));

            }, style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>

        <TouchableOpacity style={zoneTwoPlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 2',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => {
              let zone_sensors = [4,5,6]
              zone_sensors.forEach(index => {
                this.cleanZone(index)
              });
              this.setState(prevState => ({
                toggledButton: !prevState.toggledButton
              }));

            }, style: 'default'},
          ],
          { cancelable: false }
        )}></TouchableOpacity>

        <TouchableOpacity style={zoneThreePlanThree} onPress={() => Alert.alert(
          'Plan 3 Zon 3',
          'Har du städat denna zon?',
          [
            {text: 'Avbryt', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Ja', onPress: () => {
              let zone_sensors = [7,8,9]
              zone_sensors.forEach(index => {
                this.cleanZone(index)
              });
              this.setState(prevState => ({
                toggledButton: !prevState.toggledButton
              }));

            }, style: 'default'},
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