import {Order} from '@models/Order';
import {colors} from '@utils/Colors';
import PriceUtils from '@utils/PriceUtils';
import TitleDescriptionButtonView from '@views/TitleDescriptionButtonView';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  product: any;
}
const OrderConfirmationOrderItemView: React.FC<Props> = React.memo(
  ({product}) => {
    const {amount, name, price, option, note} = product || {};
    return (
      <Pressable style={styles.view}>
        <Image
          style={styles.imageEdit}
          source={require('@icons/ic_edit.png')}
        />
        <View style={{flex: 1}}>
          <TitleDescriptionButtonView
            title={`${amount} x ${name}`}
            description={PriceUtils.format(amount * price.price)}
            viewStyle={{paddingHorizontal: 0, paddingTop: 0}}
            titleStyle={{color: colors.black}}
          />
          <Text style={styles.note}>
            {option ? `${option?.name} ` : null}
            {note ? `/ ${note}` : null}
          </Text>
        </View>
      </Pressable>
    );
  },
);

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
  note: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 6,
    color: colors.black,
    opacity: 0.8,
  },
});

export default OrderConfirmationOrderItemView;
