import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeText: 'Please type your text',
      passwordText: '',
      description: '',
    };
  }
  componentWillMount() {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {this.setState(() => {
          return {typeText: "Keyboard is show"};
      })})
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.setState(() => {
          return {typeText: "Keyboard is hide"};
      }))
  }
  componentWillUnmount() {
      this.keyboardDidHideListener.remove();
      this.keyboardDidShowListener.remove();
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

            <TextInput
                style={{
                height: 100,
                margin: 20,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1,
                }}
                multiline={true}
                editable={true}
                returnKeyType="done"
                autoFocus={true}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => {this.setState(() => {
                    return {description: text};
                })}}
            />
            <Text style={{margin: 20}}>{this.state.description}</Text>
      </View>
    );
  }
}
