import {PDescriptionType} from '@models/Product';
import {updateCart} from '@redux/actions/Cart';
import {colors} from '@utils/Colors';
import {dimensions} from '@utils/Constant';
import CloseButtonView from '@views/CloseButtonView';
import TitleSubButtonView from '@views/TitleSubButtonView';
import PriceUtils from '@utils/PriceUtils';
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  BackHandler,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import {
  EventSubscription,
  Navigation,
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {connect} from 'react-redux';
import CartManager from '@managers/CartManager';

const DATA = {
  id: 1,
  name: 'Trà Sửa Oolong Nướng',
  price: {price: 500000, discount: 0},
  desc: {
    id: 1,
    type: PDescriptionType.TEXT,
    content:
      'Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao" (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.',
  },
  image:
    'https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg',
  amount: 1,
};
interface Props extends NavigationComponentProps {
  id: any;
  products?: any;
  updateCart: (products: any[]) => void;
}
interface State {}
class ProductDetailScreen extends NavigationComponent<Props, State> {
  private navigationEventListener?: EventSubscription;
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  componentWillUnmount() {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
    BackHandler.removeEventListener('hardwareBackPress', this._handleBack);
  }

  _handleBack = () => {
    Navigation.dismissModal(this.props.componentId);
    return true;
  };

  _handleAddToCart = () => {
    const {products} = this.props || {};
    const newProducts = CartManager.addToCart(products, DATA);
    this.props.updateCart(newProducts);
    this._handleBack();
  };

  render() {
    const {id, products} = this.props || {};
    const {image, name, desc, price} = DATA || {};
    console.log(`products from redux`, products);
    return (
      <View style={styles.view}>
        <ScrollView style={styles.scrollView}>
          <Image style={styles.image} source={{uri: image}} />
          {/* info view */}
          <View style={styles.infoView}>
            <View
              style={{flex: 1, flexDirection: 'row', alignContent: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={styles.titleInfo}>{name}</Text>
                <Text style={styles.priceInfo}>
                  {PriceUtils.format(price?.price)}
                </Text>
              </View>
              <View style={styles.favoriteView}>
                <Image
                  style={{height: 20, width: 20, tintColor: colors.icon}}
                  source={require('@icons/ic_heart.png')}
                />
                <Text style={styles.textFavorite}>Yêu thích</Text>
              </View>
            </View>
            <Text style={styles.descriptionInfo}>{desc?.content}</Text>
          </View>
          {/* option view */}
          {/* note view */}
          <View style={styles.noteView}>
            <Text style={styles.titleOther}>Yêu cầu khác</Text>
          </View>
        </ScrollView>
        <CloseButtonView
          viewStyle={styles.closeButton}
          onPress={this._handleBack}
        />
        <View style={styles.orderView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <TitleSubButtonView
            title="Chọn món"
            onPress={this._handleAddToCart}
            viewStyle={{
              margin: 16,
              height: 44,
            }}
            titleStyle={{color: colors.white}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: dimensions.screenWidth,
    height: dimensions.screenWidth,
    backgroundColor: colors.white,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: colors.background,
  },
  infoView: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  titleInfo: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  priceInfo: {
    flex: 1,
    fontSize: 18,
    marginTop: 4,
    fontWeight: '400',
    color: colors.black,
  },
  descriptionInfo: {
    flex: 1,
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400',
    color: colors.black,
  },
  favoriteView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFavorite: {
    marginTop: 4,
    color: colors.black,
    fontWeight: '300',
    fontSize: 12,
  },
  noteView: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: colors.white,
  },
  titleOther: {
    flex: 1,
    color: colors.black,
    fontWeight: '600',
    fontSize: 16,
  },
  orderView: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});

const mapStateToProps = (state: any) => {
  return {
    products: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateCart: (products: any[]) => dispatch(updateCart(products)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailScreen);
