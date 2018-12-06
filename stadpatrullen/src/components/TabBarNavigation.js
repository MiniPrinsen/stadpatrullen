import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Plan 3!</Text>
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
  Home: { screen: HomeScreen, navigationOptions:  {
    title: 'Plan 3'
} },
  Details: { screen: DetailsScreen, navigationOptions:  {
    title: 'Detaljer'
} },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen, navigationOptions:  {
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