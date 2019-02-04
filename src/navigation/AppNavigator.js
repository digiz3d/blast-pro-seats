import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TopBarLabel from '../components/TopBarLabel';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthScreen from '../screens/AuthScreen';

import CalendarScreen from '../screens/CalendarScreen';
import StoreScreen from '../screens/StoreScreen';
import InformationScreen from '../screens/InformationScreen';

import FriendsListScreen from '../screens/FriendsListScreen';
import LobbiesScreen from '../screens/LobbiesScreen';
import MyLobbyScreen from '../screens/MyLobbyScreen';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import QuizScreen from '../screens/QuizScreen';

import Colors from '../constants/Colors';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Quiz: {
      screen: QuizScreen,
    },
  },
  { headerMode: 'none' }
);

const FriendsTopTabsNavigator = createMaterialTopTabNavigator(
  {
    FriendsList: {
      screen: FriendsListScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <TopBarLabel focused={focused}>Friends List</TopBarLabel>
        ),
      },
    },
    Lobbies: {
      screen: LobbiesScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <TopBarLabel focused={focused}>Lobbies</TopBarLabel>
        ),
      },
    },
    MyLobby: {
      screen: MyLobbyScreen,
      navigationOptions: {
        tabBarLabel: ({ focused }) => (
          <TopBarLabel focused={focused}>My Lobby</TopBarLabel>
        ),
      },
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Colors.activeTabIcon,
      indicatorStyle: { backgroundColor: Colors.activeTabIcon },
      inactiveTintColor: Colors.inactiveTabBarIcon,
      style: { backgroundColor: Colors.background },
    },
  }
);

const MainTabNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-home" />
        ),
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-calendar" />
        ),
      },
    },
    FriendsTabs: {
      screen: FriendsTopTabsNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-people" />
        ),
      },
    },
    Store: {
      screen: StoreScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-cart" />
        ),
      },
    },
    Information: {
      screen: InformationScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-information-circle" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: Colors.background,
        shadowColor: '#000000',
        shadowRadius: 10,
        elevation: 1,
      },
    },
  }
);

const MainSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Auth: { screen: AuthScreen },
    Main: { screen: MainTabNavigator },
  },
  { initialRouteName: 'AuthLoading' }
);

export default createAppContainer(MainSwitchNavigator);
