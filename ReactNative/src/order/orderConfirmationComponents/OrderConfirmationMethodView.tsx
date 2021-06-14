import TitleSubButtonView from '@views/TitleSubButtonView';
import {colors} from '@utils/Colors';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import LineView from '@views/LineView';
import {Address, AddressType} from '@models/Address';
import NavigationManager from '@managers/NavigationManager';
import {SOTRE_LIST_SCREEN} from '@utils/Constant';

interface Props {
  method?: any;
  onChangedMethod?: () => void;
}
const ADDRESS: Address = {
  id: 11,
  type: AddressType.ROW,
  title: '114 Đường 9A Khu Dân cư Trung Sơn',
  desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
  distance: 1.1,
  image: undefined,
  location: undefined,
};
const OrderConfirmationMethodView: React.FC<Props> = React.memo(
  ({method, onChangedMethod}) => {
    const {title} = method || {};
    const [address, setAddress] = useState(ADDRESS);

    useEffect(() => {});

    const handleSwitchStore = () => {
      const params = {
        handleSwitch: handleSwitch,
      };
      NavigationManager.showModal(SOTRE_LIST_SCREEN, params);
    };

    const handleSwitch = (value?: any) => {
      console.log('=======>>>> handleSwitch: ', value);
      setAddress(value || ADDRESS);
    };

    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TitleSubButtonView
            onPress={onChangedMethod}
            title="Thay đổi"
            viewStyle={{paddingHorizontal: 12, paddingVertical: 5}}
            titleStyle={{color: colors.white, fontSize: 12, fontWeight: '400'}}
          />
        </View>
        <LineView
          lineStyle={{
            paddingHorizontal: 16,
            marginTop: 12,
            backgroundColor: colors.background,
          }}
        />
        <Pressable onPress={handleSwitchStore} style={styles.switchStore}>
          <View style={styles.addressInfo}>
            <Text style={styles.titleAddress}>{address?.title}</Text>
            <Text style={styles.descAddress}>{address?.desc}</Text>
          </View>
          <Image
            style={styles.image}
            source={require('@icons/ic_more_than.png')}
          />
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: colors.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  switchStore: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  addressInfo: {
    flex: 1,
  },
  titleAddress: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  descAddress: {
    flex: 1,
    marginTop: 4,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  image: {
    marginLeft: 8,
    height: 30,
    width: 30,
    tintColor: colors.primary,
  },
});

export default OrderConfirmationMethodView;
