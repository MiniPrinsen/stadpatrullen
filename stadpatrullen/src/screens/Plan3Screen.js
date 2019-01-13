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

var REQUEST_URL = "Boobys"

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      zoneColor: '#000',
      toggledButton: false,
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
  
  render() {
    const { 
      cloudImage, 
      zoneOnePlanThreeCleared, 
      zoneOnePlanThreeBlack,
      headerText
    } = styles

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
    const { toggledButton } = this.state
    let zoneOnePlanThree = toggledButton ? zoneOnePlanThreeCleared : zoneOnePlanThreeBlack

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
        </View>
        )
      }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: getDirtynessColor(this.state.totalVisitors) }}>
      <Image style={cloudImage} source={require('../../assets/Cloud.png')}/>
        {console.log(this.state.totalVisitors = this.state.totalVisitors + this.state.dataSource)}
        {console.log(this.state.totalVisitors)}
        {console.log(getDirtynessColor(this.state.totalVisitors))}
        <Text style={headerText}>  NATURVETARHUSET</Text>
        <TouchableOpacity style={zoneOnePlanThree
} onPress={() => Alert.alert(
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