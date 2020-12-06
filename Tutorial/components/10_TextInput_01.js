import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {typeText: 'Please type your text', passwordText: ''};
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            marginTop: 60,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="red"
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {typeText: text};
            });
          }}
        />
        <Text
          style={{
            margin: 20,
          }}>
          {this.state.typeText}
        </Text>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyboardType="default"
          placeholderTextColor="red"
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState(() => {
              return {passwordText: text};
            })}}
            />
            <Text style={{margin: 20}}>{this.state.passwordText}</Text>
      </View>
    );
  }
}
