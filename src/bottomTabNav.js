import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import About from './about/About';
import Youtube from './Youtube';
import Contact from './Contact';
import Watch from './Watch'

class Donate extends React.Component {
  render() {
    return (
      <WebView
        source={{uri:'https://rezasafa.com/donate_mobile/'}}
      />
    );
  }
}

 const Tabs = TabNavigator({
  About: {
    screen: About,
  },
  Donate: {
    screen: Donate,
  },
  Watch: {
    screen: Watch
  },
  Contact: {
    screen: Contact,
  },
  Youtube: {
    screen: Youtube,
  }
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: 'white'
      }
    },
    initialRouteName: 'Watch'
  });

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
