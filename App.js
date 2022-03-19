import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    FlatList,
    StyleSheet,
    Text,
    View,
    Alert,
    Platform,
    TouchableHighlight,
} from 'react-native';


export default class BasicFlatList extends Component {
  constructor(props) {
      super(props)
  }
  render() {
      return (
          <View style={{
              flex: 1,
              marginTop: Platform.OS === 'ios' ? 34 : 0,
              backgroundColor: 'green'
          }} >
              <Text style={{fontSize: 20}}>
                jskjkhvukhdgvusjkhdvuyshd
              </Text>
          </View>
      )
  }
}