import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Address} from '@common/models/Address';
import {colors} from '@utils/Colors';

interface Props {
  address: Address;
}
const ShopItemView: React.FC<Props> = React.memo(({address}) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={require('@images/flashSale/ic_flash_sale.png')}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {address.title}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {address.desc}
        </Text>
        <Text style={styles.distance} numberOfLines={1}>
          Cách đây {address.distance} km
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 6,
    marginHorizontal: 16,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  content: {
    marginLeft: 8,
    flex: 1,
  },
  image: {
    backgroundColor: colors.yellow,
    height: 80,
    width: 80,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    height: 20,
  },
  desc: {
    marginTop: 4,
    height: 36,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  distance: {
    marginTop: 4,
    height: 18,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
    opacity: 0.6,
  },
});

export default ShopItemView;
