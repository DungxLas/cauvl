import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Button from 'react-native-button';


export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    marginTop: Platform.OS === 'ios' ? 34 : 0,
                }}
            >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 40
                }}>Login with Firebase </Text>
                <Text style={{ margin: 20, fontSize: 15, }}>Logged in anonymous</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            borderRadius: 4,
                            backgroundColor: 'blue'
                        }}
                        style={{ fontSize: 17, color: 'white' }}
                    >Login</Button>
                </View>
            </View>
        );
    }
}