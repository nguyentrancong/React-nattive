import {colors} from '@utils/Colors';
import LineView from '@views/LineView';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TitleDescriptionButtonView from '@views/TitleDescriptionButtonView';
import PriceUtils from '@utils/PriceUtils';

interface Props {
  ordered?: any[];
  onPressVoucher?: () => void;
}
const OrderConfirmationTotalView: React.FC<Props> = React.memo(
  ({ordered, onPressVoucher}) => {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Tổng cộng</Text>
        <LineView lineStyle={styles.line} />
        <TitleDescriptionButtonView
          title="Thành tiền"
          description={PriceUtils.format(123232.0)}
          viewStyle={{paddingHorizontal: 0, paddingTop: 16}}
          titleStyle={{fontSize: 14, fontWeight: '300'}}
        />
        <LineView lineStyle={styles.line} />
        <TitleDescriptionButtonView
          onPress={onPressVoucher}
          title="Chọn khuyến mại"
          image={require('@icons/ic_more_than.png')}
          viewStyle={{paddingHorizontal: 0, paddingTop: 16}}
          titleStyle={{fontSize: 14, fontWeight: '300', color: colors.primary}}
        />
        <LineView lineStyle={styles.line} />
        <TitleDescriptionButtonView
          title="Số tiền thanh toán"
          description={PriceUtils.format(123232.0)}
          viewStyle={{paddingHorizontal: 0, paddingTop: 16}}
          titleStyle={{fontSize: 14, fontWeight: '400'}}
        />
      </View>
    );
  },
);

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
});

export default OrderConfirmationTotalView;
