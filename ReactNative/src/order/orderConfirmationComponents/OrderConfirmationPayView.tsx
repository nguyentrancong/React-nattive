import {colors} from '@utils/Colors';
import TitleDescriptionButtonView from '@views/TitleDescriptionButtonView';
import LineView from '@views/LineView';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  ordered?: any[];
}
const OrderConfirmationPayView: React.FC<Props> = React.memo(({ordered}) => {
  const onPressPayMethod = () => {};
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Thanh toán</Text>
      <LineView lineStyle={styles.line} />
      <TitleDescriptionButtonView
        onPress={onPressPayMethod}
        title="Chọn phương thức thanh toán"
        image={require('@icons/ic_more_than.png')}
        viewStyle={{paddingHorizontal: 0, paddingTop: 16}}
        titleStyle={{fontSize: 14, fontWeight: '300', color: colors.primary}}
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
  line: {
    paddingHorizontal: 16,
    marginTop: 12,
    backgroundColor: colors.background,
  },
  description: {
    marginTop: 16,
    fontWeight: '400',
    fontSize: 12,
    color: colors.primary,
  },
});

export default OrderConfirmationPayView;
