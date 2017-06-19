import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";

export class Schedule extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <View>
        <Text>Something about Scheduling</Text>
      </View>
    );
  }
}

export class Founder extends React.Component {
  static navigationOptions = {
    title: 'Founder Info',
  };
  render() {
    return (
      <View>
        <Text>Something about Founder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 91
  }
})