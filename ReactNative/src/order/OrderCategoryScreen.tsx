import {colors} from '@utils/Colors';
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  Navigation,
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';

interface Props extends NavigationComponentProps {
  selectedItem: (value?: any) => void;
}
class OrderCategoryScreen extends NavigationComponent<Props> {
  _handleClose = () => {
    Navigation.dismissModal(this.props.componentId);
  };
  render() {
    return (
      <View style={styles.content}>
        <Text> show modal </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.red,
  },
});

export default OrderCategoryScreen;
