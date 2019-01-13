import React from 'react';
import { Rect, Button, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import plan3 from "../screens/Plan3Screen";
import plan4 from "../screens/Plan4Screen";
import details from "../screens/DetailScreen";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { DARESAY_SENSOR_API_PLAN3_REAL } from 'react-native-dotenv'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      pirCounter: 0,
      totalVisitors: 0
     // pirCounter: 0,
      
    }
  }
  componentDidMount(){
    
    this.timer = setInterval(() => this.getPirCount(), 10000)}
    
    async getPirCount(){
      fetch(DARESAY_SENSOR_API_PLAN3_REAL,
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
    
    
  
  /*componentDidMount(){
    return fetch('https://daresay.herokuapp.com/nv/plan/4/sensor/4?key=41938416368104621')
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
  }*/
  
  
  render() {
    //let pirCounter = 0;
    let test = this.state.dataSource
    let totalVisitors = this.state.pirCounter + test
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
        </View>
        )
      }
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
        /> 
        </View>
        );
      }
    }
    
    class SettingsScreen extends React.Component {
      render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Plan 4!</Text>
          {/* <Button
            title="Go to Plan 3"
            onPress={() => this.props.navigation.navigate('Plan 3')}
          />*/}
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
          /> 
          </View>
          );
        }
      }
      
      class DetailsScreen extends React.Component {
        render() {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
            </View>
            );
          }
        }
        
        const HomeStack = createStackNavigator({
          Home: { screen: plan3, navigationOptions:  {
            title: 'Plan 3'
          } },
          Details: { screen: DetailsScreen, navigationOptions:  {
            title: 'Detaljer'
          } },
        });
        
        const SettingsStack = createStackNavigator({
          Settings: { screen: plan4, navigationOptions:  {
            title: 'Plan 4'
          } },
          Details: { screen: DetailsScreen, navigationOptions:  {
            title: 'Detaljer'
          } },
        });
        
        export default createAppContainer(createBottomTabNavigator(
          {
            Home: { screen: HomeStack, navigationOptions:  {
              title: 'Plan 3'
            } },
            Settings: { screen: SettingsStack, navigationOptions:  {
              title: 'Plan 4'
            } },
          },
          {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                  iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                  iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons title={iconName} size={25} color={tintColor} />;
              },
            }),
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            },
          }
          ));