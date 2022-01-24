import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import RecommendedMovieScreen from './screens/Recommendation';
import PopularMovieScreen from './screens/Popular';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {RFValue} from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMovieScreen,
    navigationOptions : {
      tabBarLabel: "Recommend",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: '#000'},
        indicatorStyle: {backgroundColor: '#000'}
      }
    }
  },
  PopularMovies: {
    screen: PopularMovieScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: "#000"},
        indicatorStyle: {backgroundColor: "#000"}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#fff",
        headerTitle: "Recommend Movies",
        headerStyle: {
          backgroundColor: "#d500f9"
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: RFValue(18)
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
)

