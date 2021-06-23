import NavigationManager from '@managers/NavigationManager';
import {colors} from '@utils/Colors';
import {EDIT_PRODUCT_ORDER_CONFIRMATION_SCREEN} from '@utils/Constant';
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
    const handleEditItem = () => {};
    const handleDisplayingItem = () => {
      const params = {
        product: product,
      };
      NavigationManager.showModal(
        EDIT_PRODUCT_ORDER_CONFIRMATION_SCREEN,
        params,
      );
    };
    return (
      <View style={styles.view}>
        <Pressable style={styles.btEdit} onPress={handleEditItem}>
          <Image
            style={styles.imageEdit}
            source={require('@icons/ic_edit.png')}
          />
        </Pressable>

        <Pressable style={{flex: 1}} onPress={handleDisplayingItem}>
          <TitleDescriptionButtonView
            onPress={handleDisplayingItem}
            title={`${amount} x ${name}`}
            description={PriceUtils.format(amount * price.price)}
            viewStyle={{paddingHorizontal: 0, paddingTop: 0}}
            titleStyle={{color: colors.black}}
          />
          <Text style={styles.note}>
            {option ? `${option?.name} ` : null}
            {note ? `/ ${note}` : null}
          </Text>
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 16,
    flexDirection: 'row',
  },
  btEdit: {
    padding: 20,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 16,
  },
  imageEdit: {
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
