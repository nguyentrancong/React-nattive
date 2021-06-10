import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {AddressType, Address} from '../common/models/Address';
import NavigationManager from '../managers/NavigationManager';
import {colors} from '../utils/Colors';
import {dimensions} from '../utils/Constant';
import ShopItemView from './shopComponents/ShopItemView';
import ShopTitleSectionView from './shopComponents/ShopTitleSectionView';

const DATA: Address[] = [
  {
    id: 1,
    type: AddressType.HEADER,
    title: 'Hà Nội',
    image: undefined,
    desc: undefined,
    distance: undefined,
    location: undefined,
  },
  {
    id: 11,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 12,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 13,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 14,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 2,
    type: AddressType.HEADER,
    title: 'HCM',
    desc: undefined,
    image: undefined,
    distance: undefined,
    location: undefined,
  },
  {
    id: 21,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 22,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 23,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
  {
    id: 3,
    type: AddressType.HEADER,
    title: 'Đà Nẵng',
    desc: undefined,
    distance: undefined,
    image: undefined,
    location: undefined,
  },
  {
    id: 31,
    type: AddressType.ROW,
    title: '114 Đường 9A Khu Dân cư Trung Sơn',
    desc: '114 Đường 9A Khu Dân cư Trung Sơn, Huyện Bình Chánh, Hồ Chí Minh, Việt Nam',
    distance: 1.1,
    image: undefined,
    location: undefined,
  },
];

interface Props extends NavigationComponentProps {}
class ShopScreen extends NavigationComponent<Props> {
  private _dataProvider: DataProvider;
  private _layoutProvider: LayoutProvider;

  constructor(props: Props) {
    super(props);

    this.state = {};

    this._dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this._layoutProvider = new LayoutProvider(
      index => {
        return DATA[index].type;
      },
      (type, dim, index) => {
        switch (type) {
          case AddressType.HEADER:
            (dim.height = 54), (dim.width = dimensions.screenWidth);
            break;
          default:
            const imgHeight = 80;
            const padding = 8 * 2;
            const separatorHeight = 4;
            const itemHeight = imgHeight + padding + separatorHeight;
            dim.width = dimensions.screenWidth;
            dim.height = itemHeight;
            break;
        }
      },
    );
  }

  _didSeletedRowAt = (data: any) => {
    //todo seleted address
    console.log('=====>>>> _didSeletedRowAt', data);
    NavigationManager.showModal('ShopDetail');
  };

  _renderRow = (type: any, data: Address) => {
    switch (type) {
      case AddressType.HEADER:
        return <ShopTitleSectionView data={data} />;
      case AddressType.ROW:
        return (
          <Pressable
            onPress={() => this._didSeletedRowAt(data)}
            style={{flex: 1, backgroundColor: colors.white}}>
            <ShopItemView address={data} />
          </Pressable>
        );
      default:
        return <ShopItemView address={data} />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          style={styles.listView}
          dataProvider={this._dataProvider.cloneWithRows(DATA)}
          layoutProvider={this._layoutProvider}
          rowRenderer={this._renderRow}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f2f2f2',
    backgroundColor: colors.white,
  },
  listView: {
    flex: 1,
  },
});

export default ShopScreen;
