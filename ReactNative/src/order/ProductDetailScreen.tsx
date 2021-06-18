import {PDescriptionType} from '@models/Product';
import {updateCart} from '@redux/actions/Cart';
import {colors} from '@utils/Colors';
import {dimensions} from '@utils/Constant';
import CloseButtonView from '@views/CloseButtonView';
import TitleSubButtonView from '@views/TitleSubButtonView';
import PriceUtils from '@utils/PriceUtils';
import React, {Fragment} from 'react';
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
import Toast from 'react-native-easy-toast';
import LineView from '@views/LineView';
import RadioButtonView from '@views/RadioButtonView';

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

const OPTIONS = [
  {id: 0, name: 'Nhỏ', description: 'xxxx', price: 0},
  {id: 1, name: 'Vừa', description: 'xxxx', price: 9000},
  {id: 2, name: 'Lớn', description: 'xxxx', price: 15000},
];
interface Props extends NavigationComponentProps {
  id: any;
  products?: any;
  updateCart: (products: any[]) => void;
}
interface State {
  numberOfOrder: number;
  option: any;
  enabledPlus: boolean;
  enabledSubtract: boolean;
  noteOfOrder?: string;
}
class ProductDetailScreen extends NavigationComponent<Props, State> {
  private navigationEventListener?: EventSubscription;
  toastRef: Toast | null | undefined;
  constructor(props: Props) {
    super(props);

    this.state = {
      numberOfOrder: 1,
      option: OPTIONS[0],
      enabledPlus: true,
      enabledSubtract: false,
    };
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
    const {numberOfOrder} = this.state || {};
    const newProducts = CartManager.addToCart(products, {
      ...DATA,
      amount: numberOfOrder,
    });
    this.props.updateCart(newProducts);
    this._handleBack();
  };

  _handlePlus = () => {
    const {numberOfOrder} = this.state || {};
    this.setState({numberOfOrder: numberOfOrder + 1});
    this.setState({enabledSubtract: true});
  };

  _handleSubtract = () => {
    const {numberOfOrder} = this.state || {};
    if (numberOfOrder === 1) {
      return;
    } else {
      let index = numberOfOrder - 1;
      this.setState({numberOfOrder: index});
      if (index === 1) {
        this.setState({enabledSubtract: false});
      }
    }
  };

  _handleToast = (message: string) => {
    this.toastRef?.show(<Text style={styles.toast}>{message}</Text>);
  };

  _handleNote = () => {
    this.setState({
      noteOfOrder: 'Cho mình nhiều sữa, ít đá nhé bạn ơi, Cho mình nhiều sữa',
    });
  };

  _handleSeletedOpstion = (option: any) => {
    this.setState({option: option});
  };

  render() {
    const {id, products} = this.props || {};
    const {image, name, desc, price} = DATA || {};
    const {numberOfOrder, enabledSubtract, noteOfOrder, option} =
      this.state || {};
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
          <View style={styles.optionView}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TitleSubButtonView
                title="Lựa chọn"
                subtitle="Lựa chọn sản phẩn bạn mong muốn"
                viewStyle={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  backgroundColor: colors.white,
                  marginBottom: 12,
                }}
                subtitleStyle={{marginTop: 4, color: colors.gray}}
              />
              <TitleSubButtonView
                title="BẮT BUỘC"
                viewStyle={{height: 25, backgroundColor: colors.primary}}
                titleStyle={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  color: colors.white,
                  fontWeight: '400',
                }}
              />
            </View>

            {OPTIONS.map((item, index) => {
              const seleted = item.id === option.id;
              return (
                <Fragment key={index}>
                  <LineView />
                  <RadioButtonView
                    onPress={() => this._handleSeletedOpstion(item)}
                    title={item.name}
                    description={`+${PriceUtils.format(item.price)}`}
                    viewStyle={{paddingHorizontal: 0, padding: 8}}
                    colorRadio={colors.primary}
                    selected={seleted || false}
                  />
                </Fragment>
              );
            })}
          </View>
          {/* note view */}
          <View style={styles.noteView}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TitleSubButtonView
                title="Yêu cầu khác"
                subtitle="Những tuỳ chọn khác"
                viewStyle={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  backgroundColor: colors.white,
                  marginBottom: 12,
                }}
                subtitleStyle={{marginTop: 4, color: colors.gray}}
              />
              <TitleSubButtonView
                title="TUỲ CHỌN"
                viewStyle={{height: 25, backgroundColor: colors.background}}
                titleStyle={{
                  fontSize: 12,
                  paddingHorizontal: 8,
                  fontWeight: '400',
                }}
              />
            </View>
            <LineView />
            <Pressable onPress={this._handleNote} style={styles.btAddNote}>
              {!!noteOfOrder ? (
                <Text style={{color: colors.black, flex: 1}}>
                  {noteOfOrder}
                </Text>
              ) : (
                <Text style={{flex: 1, color: colors.black, opacity: 0.5}}>
                  Thêm ghi chú món ...
                </Text>
              )}
            </Pressable>
          </View>
          <View style={{height: 16}} />
        </ScrollView>
        <CloseButtonView
          viewStyle={styles.closeButton}
          onPress={this._handleBack}
        />
        <View style={styles.orderView}>
          <View style={styles.editOrderView}>
            <CloseButtonView
              viewStyle={{borderColor: colors.primary, borderWidth: 2}}
              image={require('@icons/ic_plus.png')}
              imageStyle={{tintColor: colors.primary}}
              onPress={this._handlePlus}
            />
            <Text style={styles.numberOfOrder}>{numberOfOrder}</Text>
            <CloseButtonView
              viewStyle={
                enabledSubtract
                  ? {borderColor: colors.primary, borderWidth: 2}
                  : {borderColor: colors.background, borderWidth: 2}
              }
              image={require('@icons/ic_subtract.png')}
              imageStyle={
                enabledSubtract
                  ? {tintColor: colors.primary}
                  : {tintColor: colors.background}
              }
              onPress={this._handleSubtract}
            />
          </View>
          <TitleSubButtonView
            title={`Chọn món - ${PriceUtils.format(
              (price.price + option.price) * numberOfOrder,
            )}`}
            onPress={this._handleAddToCart}
            viewStyle={{
              margin: 16,
              height: 44,
              marginTop: 0,
            }}
            titleStyle={{color: colors.white}}
          />
        </View>
        <Toast
          ref={toast => (this.toastRef = toast)}
          position="center"
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
        />
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
  optionView: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    paddingBottom: 0,
    backgroundColor: colors.white,
  },
  noteView: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: colors.white,
  },
  btAddNote: {
    paddingTop: 12,
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
  editOrderView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
  },
  numberOfOrder: {
    paddingHorizontal: 16,
    fontSize: 20,
    minWidth: 60,
    textAlign: 'center',
  },
  toast: {
    color: colors.white,
    paddingHorizontal: 16,
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
