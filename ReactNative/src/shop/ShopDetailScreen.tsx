import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';

interface Props extends NavigationComponentProps {
  data: any;
}
class ShopDetailScreen extends NavigationComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShopDetailScreen;
