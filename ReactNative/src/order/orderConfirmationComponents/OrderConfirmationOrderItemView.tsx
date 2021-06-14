import {Order} from '@models/Order';
import {colors} from '@utils/Colors';
import PriceUtils from '@utils/PriceUtils';
import TitleDescriptionButtonView from '@views/TitleDescriptionButtonView';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  orders?: Order[];
}
const OrderConfirmationOrderItemView: React.FC<Props> = React.memo(({}) => {
  return (
    <Pressable style={styles.view}>
      <Image style={styles.imageEdit} source={require('@icons/ic_edit.png')} />
      <View style={{flex: 1}}>
        <TitleDescriptionButtonView
          title="2 x Cam tươi sấy dẻo"
          description={PriceUtils.format(123232.0)}
          viewStyle={{paddingHorizontal: 0, paddingTop: 0}}
          titleStyle={{color: colors.black}}
        />
        <Text>Vừa</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 16,
    flexDirection: 'row',
  },
  imageEdit: {
    marginRight: 8,
    height: 20,
    width: 20,
    tintColor: colors.primary,
  },
});

export default OrderConfirmationOrderItemView;
