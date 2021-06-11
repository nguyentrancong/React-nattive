import React from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {PDescriptionType, Product} from '@models/Product';
import {colors} from '@utils/Colors';
import {CART_SCREEN, dimensions} from '@utils/Constant';
import PriceUtils from '@utils/PriceUtils';
import TitleDescriptionButtonView from '@views/TitleDescriptionButtonView';
import OrderCategoryView from './orderComponents/OrderCategoryView';
import NavigationManager from '@managers/NavigationManager';
import Modal from 'react-native-modal';

enum ItemType {
  HEADER = 'HEADER',
  ROW = 'ROW',
}

const DATA: any[] = [
  {
    type: ItemType.HEADER,
    title: 'Món phải thử',
  },
  {
    id: 1,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 2,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 3,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 4,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 5,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    type: ItemType.HEADER,
    title: 'Coffee',
  },
  {
    id: 1,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 2,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 3,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 4,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
  {
    id: 5,
    type: ItemType.ROW,
    name: 'Trà Sửa Oolong Nướng',
    price: {price: 500000, discount: 0},
    desc: {
      id: 1,
      type: PDescriptionType.TEXT,
      content:
        'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
    },
  },
];

interface Props extends NavigationComponentProps {}
interface State {}
class OrderScreen extends NavigationComponent<Props, State> {
  private _dataProvider: DataProvider;
  private _layoutProvider: LayoutProvider;
  categoryRef: any;

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
          case ItemType.HEADER:
            (dim.height = 54), (dim.width = dimensions.screenWidth);
            break;
          default:
            const imgHeight = 80;
            const padding = 16 * 2;
            const separatorHeight = 1;
            const itemHeight = imgHeight + padding + separatorHeight;
            dim.width = dimensions.screenWidth;
            dim.height = itemHeight;
            break;
        }
      },
    );
  }

  _renderRow = (type: any, data: any[]) => {
    switch (type) {
      case ItemType.HEADER:
        return <TitleDescriptionButtonView title={data?.title} />;
      default:
        return (
          <View style={styles.item}>
            <View style={styles.infoItem}>
              <Text style={styles.titleItem}>{data?.name}</Text>
              <Text style={styles.descItem} numberOfLines={2}>
                {data?.desc?.content}
              </Text>
              <Text style={styles.priceItem}>
                {PriceUtils.format(data?.price?.price || 0)}
              </Text>
            </View>
            <Image
              style={styles.imageItem}
              source={{
                uri: 'https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg',
              }}
            />
          </View>
        );
    }
  };

  _handleCartVisible = () => {
    NavigationManager.showModal(CART_SCREEN);
  };

  _handleCategoryVisible = () => {
    this.categoryRef?.open();
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
            contentContainerStyle: {
              paddingBottom: 80,
            },
          }}
        />
        <Pressable onPress={this._handleCartVisible} style={styles.btShowCart}>
          <View style={styles.btInfo}>
            <Text style={styles.btTitle}>2 món trong giỏ hàng</Text>
            <Text style={styles.btPrice}>{PriceUtils.format(1450000.0)}</Text>
          </View>
          <Image
            style={styles.btImage}
            source={require('@icons/ic_order.png')}
          />
        </Pressable>
        <OrderCategoryView ref={(ref: any) => (this.categoryRef = ref)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  btShowCart: {
    position: 'absolute',
    flex: 1,
    backgroundColor: colors.primary,
    bottom: 10,
    left: 16,
    right: 16,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  btInfo: {
    flex: 1,
  },
  btTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.white,
  },
  btPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  btImage: {
    height: 24,
    width: 24,
    tintColor: colors.white,
  },

  item: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    borderRadius: 6,
    marginVertical: 8,
    flexDirection: 'row',
    padding: 12,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  infoItem: {
    flex: 1,
  },
  titleItem: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  descItem: {
    marginTop: 4,
    color: colors.black,
    fontSize: 12,
  },
  priceItem: {
    marginTop: 6,
    color: colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
  imageItem: {
    marginLeft: 8,
    height: 75,
    width: 75,
    borderRadius: 6,
  },
  headerItem: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'column-reverse',
    marginBottom: 8,
  },
  titleHeader: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
