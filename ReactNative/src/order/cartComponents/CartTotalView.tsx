import {colors} from '@utils/Colors';
import TitleSubButtonView from '@views/TitleSubButtonView';
import LineView from '@views/LineView';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  ordered?: any[];
}
const CartTọtalView: React.FC<Props> = React.memo(({ordered}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Tổng cộng</Text>
      <LineView
        lineStyle={{
          paddingHorizontal: 16,
          marginTop: 12,
          backgroundColor: colors.background,
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: Colors.white,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});

export default CartTọtalView;
