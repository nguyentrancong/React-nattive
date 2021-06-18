import {colors} from '@utils/Colors';
import PriceUtils from '@utils/PriceUtils';
import TitleHeaderView from '@views/TitleHeaderView';
import React from 'react';
import {Text, StyleSheet, View, ScrollView, Pressable} from 'react-native';
import {
  Navigation,
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import OrderConfirmationMethodView from './orderConfirmationComponents/OrderConfirmationMethodView';
import OrderConfirmationOrderedView from './orderConfirmationComponents/OrderConfirmationOrderedView';
import OrderConfirmationPayView from './orderConfirmationComponents/OrderConfirmationPayView';
import OrderConfirmationTotalView from './orderConfirmationComponents/OrderConfirmationTotalView';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {connect} from 'react-redux';
import {updateCart} from '@redux/actions/Cart';
import CartManager from '@managers/CartManager';
import {sumBy} from 'lodash';

const Methods = [
  {id: 0, title: 'Tự đến lấy hàng'},
  {id: 1, title: 'Giao hàng tận nơi'},
];

interface Props extends NavigationComponentProps {
  updateCart: (products: any[]) => void;
  products: any[];
}
interface State {
  method: any;
}
class OrderConfirmationScreen extends NavigationComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      method: Methods[0],
    };
  }

  _handleClose = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  _handleClearOrder = () => {
    this.props.updateCart([]);
    Navigation.dismissModal(this.props.componentId);
  };

  _handleChekcOut = () => {
    //todo: handle check out
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    const {method} = this.state || {};
    const {products} = this.props || {};
    const totalOfProudct = sumBy(products, item => item.amount);
    const totalPrice = sumBy(products, item => item.amount * item.price.price);
    return (
      <View style={styles.view}>
        <TitleHeaderView
          onPressClose={this._handleClose}
          title="Xác nhận đơn hàng"
          viewStyle={styles.headerView}
        />
        <ScrollView style={styles.scrollView}>
          <OrderConfirmationMethodView method={method} />
          <OrderConfirmationOrderedView products={products} />
          <OrderConfirmationTotalView products={products} />
          <OrderConfirmationPayView />
          <Pressable
            style={styles.clearButton}
            onPress={this._handleClearOrder}>
            <Text style={styles.textClearButton}>Xoá đơn hàng</Text>
          </Pressable>
        </ScrollView>
        <Pressable style={styles.checkOutButton} onPress={this._handleChekcOut}>
          <View style={styles.checkOutInfo}>
            <Text style={styles.titleCheckOutButton}>
              Tự đến lấy - {totalOfProudct} món
            </Text>
            <Text style={styles.priceCheckOutButton}>
              {PriceUtils.format(totalPrice)}
            </Text>
          </View>
          <View style={styles.viewCheckOut}>
            <Text style={styles.textCheckOut}>ĐẶT HÀNG</Text>
          </View>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerView: {
    paddingVertical: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
  },
  scrollView: {
    flex: 1,
  },
  clearButton: {
    flex: 1,
    padding: 16,
    marginTop: 8,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  textClearButton: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.red,
  },

  checkOutButton: {
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: isIphoneX() ? 20 : 0,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  checkOutInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  titleCheckOutButton: {
    fontSize: 16,
    height: 20,
    fontWeight: '400',
    color: colors.white,
  },
  priceCheckOutButton: {
    marginTop: 4,
    fontSize: 18,
    height: 24,
    fontWeight: '500',
    color: colors.white,
  },
  viewCheckOut: {
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  textCheckOut: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
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
)(OrderConfirmationScreen);
