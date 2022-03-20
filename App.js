import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Button from 'react-native-button';
import { firebase } from '@react-native-firebase/auth';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.unsubcriber = null
        this.state = {
            isAuthenticated: false,
            typedEmail: ' ',
            typedPassword: ' ',
            user: null,
        }
    };
    componentDidMount() {
        this.unsubcriber = firebase.auth().onAuthStateChanged(
            (changedUser) => {
                this.setState({user: changedUser})
            }
        )
    }
    componentWillUnmount() {
        if(this.unsubcriber) {
            this.unsubcriber()
        }
    }
    onAnonymousLogin = () => {
        firebase.auth().signInAnonymously()
            .then(() => {
                console.log(`Login succesfully`)
                this.setState({
                    isAuthenticated: true
                })
            })
            .catch((error) => {
                console.log(`Login failed. Error = ${error}`)
            })
    }
    onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then((loggedInUser) => {
            this.setState({user: loggedInUser})
            console.log(`Login with user: ${JSON.stringify(loggedInUser)}`)
        })
        .catch((error) => {
            console.log(`Login failed. Error = ${error}`)
        })
    }
    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
        .then((loggedInUser) => {
            this.setState({user: loggedInUser})
            console.log(`Resgister with user: ${JSON.stringify(loggedInUser)}`)
        })
        .catch((error) => {
            console.log(`Register failed. Error = ${error}`)
        })
    }
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
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 4,
                        backgroundColor: 'blue'
                    }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={this.onAnonymousLogin}
                >
                    Loggin in anonymous
                </Button>
                <Text style={{ margin: 20, fontSize: 15, color: 'black' }}>
                    {this.state.isAuthenticated == true ? 'Logged in anonymous' : ''}
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        color: 'black'
                    }}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ typedEmail: text })
                        }
                    }
                />
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1,
                        color: 'black'
                    }}
                    keyboardType='default'
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={
                        (text) => {
                            this.setState({ typedPassword: text })
                        }
                    }
                />
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            borderRadius: 4,
                            backgroundColor: 'green'
                        }}
                        style={{ fontSize: 17, color: 'white' }}
                        onPress={this.onRegister}
                    >
                        Register
                    </Button>
                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            borderRadius: 4,
                            backgroundColor: 'yellow'
                        }}
                        style={{ fontSize: 17, color: 'white' }}
                        onPress={this.onLogin}
                    >
                        Loggin
                    </Button>
                </View>
            </View>
        );
    }
}