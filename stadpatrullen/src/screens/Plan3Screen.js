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

var REQUEST_URL = "http://130.239.179.208:1337/getData?fbclid=IwAR0Syzq3lQFoUtXawsm3fx1YO4iYZNPWYhroG02Mebceqz4sTcQAMq3GmmE"
var RESET_URL_CLEAN = 'http://130.239.179.208:1337/cleanedZone/';

function getDirtynessColor(pirCounter) {
  //console.log(pirCounter + "CPCPCPCP")
  if( pirCounter <= 20) {
    //console.log("hej jag är grön")
    return "#76A5FF";
    
  } else if (pirCounter > 20 && pirCounter <= 50){
    //console.log("hej jag är gul")
    return "#5EFC8D"
  } else if (pirCounter > 50 && pirCounter <= 100) {
    return "#FCFF4B"
  }
  else {
    //console.log("hej jag är röd")
    return "#F85A3E";
  }
}

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      dataSource2: null,
      zoneColor: '#000',
      toggledButton: false,
      totalVisitors: 0,
      sensor: '',
      dityness: '',
      list: [],
      zone1DirtyNess: 0,
      zone2DirtyNess: 0,
      zone3DirtyNess: 0,
      toggledButton: false,
      toggledButton2: false,
      zone1BackgroundColor: "#fff",
      zone2BackgroundColor: "#fff",
      zone3BackgroundColor: "#fff",
      toggledButton3: false,    
    }
  }

  componentDidMount(){
    
    this.timer = setInterval(() => this.getPirCount(), 10000),
    this.timer = setInterval(() => this.getDirtynessEachSensor(), 10000)}
    
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

    async getDirtynessEachSensor(){
      fetch(REQUEST_URL, {method: "GET"})
      .then((responce1) => responce1.json())
      .then((responseHEu) => {
        this.setState({
          isLoading: false,
          dataSource2: responseHEu,

        })
        responseHEu.forEach(element => {
          console.log("HÄR ÄR JAG: " + element.dirtyness)
          if(element.sensor <  4){
            //this.setState(prevState => ({ count: prevState.count + 1 }))
            this.setState(prevState => ({zone1DirtyNess: prevState.zone1DirtyNess + element.dirtyness}))
            // this.setState({
            //   zone1DirtyNess: element.dirtyness
            // })
            
            console.log("LEEEEEEEEEEEROY: " + this.state.zone1DirtyNess)
          }
          else if (element.sensor < 7) {
            this.setState(prevState => ({zone2DirtyNess: prevState.zone2DirtyNess + element.dirtyness}))
          }
          else{
            this.setState(prevState => ({zone3DirtyNess: prevState.zone3DirtyNess + element.dirtyness}))
          }
        });
        //console.log("KÖTT FYFAN:" + responseHEu[0].sensor + " " + "ALIBABA" +" "+ responseHEu[0].dirtyness )
        //console.log("VALUE OF ZONE 1: " + this.zone1DirtyNess)
      })
      .catch((error) =>{
        console.error(error);
      });
    }
  
  cleanZone(id) {
    fetch(RESET_URL_CLEAN + id, {method: 'GET'})
    .then((response) => response.json())
    .then((responseJson) => {
        if(id < 4) {
          this.setState({
            zone1DirtyNess: 0
          })
        } else if( id < 7 ) {
            this.setState({
              zone2DirtyNess: 0
            })
        } else {
          this.setState({
            zone3DirtyNess: 0
          })
        }
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

    const { toggledButton, toggledButton2, toggledButton3, zone1BackgroundColor, zone2BackgroundColor, zone3BackgroundColor } = this.state
    
    
    let zoneOnePlanThree = toggledButton ? zoneOnePlanThreeCleared : zoneOnePlanThreeBlack
    //zone1BackgroundColor = getDirtynessColor(this.state.totalVisitors)
    let zoneTwoPlanThree = toggledButton2 ? zoneTwoPlanThreeCleared : zoneTwoPlanThreeBlack
    //zone2BackgroundColor = getDirtynessColor(this.state.totalVisitors)
    let zoneThreePlanThree = toggledButton3 ? zoneThreePlanThreeCleared : zoneThreePlanThreeBlack
    //zone3BackgroundColor = getDirtynessColor(this.state.totalVisitors)
  

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
        {console.log("JAG GILLAR GLASS:" + this.state.zone1DirtyNess)}
        {console.log(getDirtynessColor(this.state.totalVisitors))}
      
        <Text style={headerText}>  NATURVETARHUSET</Text>
        <Text>↑</Text>
        <Text>MIT</Text>
        <TouchableOpacity style={[zoneOnePlanThree, {backgroundColor: getDirtynessColor(this.state.zone1DirtyNess)}]} onPress={() => Alert.alert(
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

        <TouchableOpacity style={[zoneTwoPlanThree, {backgroundColor: getDirtynessColor(this.state.zone2DirtyNess)}]} onPress={() => Alert.alert(
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

        <TouchableOpacity style={[zoneThreePlanThree, {backgroundColor: getDirtynessColor(this.state.zone3DirtyNess)}]} onPress={() => Alert.alert(
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

        <Text>Biologi</Text>
        <Text>↓</Text>

        <Text style={styles.planText}>Plan 3</Text>
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        
      </View>
    );
  }
}