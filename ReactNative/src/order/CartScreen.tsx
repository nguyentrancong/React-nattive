import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';

interface Props extends NavigationComponentProps {}
export default class CartScreen extends NavigationComponent<Props> {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
