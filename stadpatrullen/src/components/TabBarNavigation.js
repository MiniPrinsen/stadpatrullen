import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import plan3 from "../screens/Plan3Screen";
import plan4 from "../screens/Plan4Screen";
import details from "../screens/DetailScreen";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: { screen: plan3, navigationOptions:  {
    title: 'Plan 3'
} },
  Details: { screen: details, navigationOptions:  {
    title: 'Detaljer'
} },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: plan4, navigationOptions:  {
      title: 'Plan 4'
  } },
  Details: { screen: details, navigationOptions:  {
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