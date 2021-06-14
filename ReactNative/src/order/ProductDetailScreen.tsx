import {PDescriptionType} from '@models/Product';
import TitleHeaderView from '@views/TitleHeaderView';
import TitleSubButtonView from '@views/TitleSubButtonView';
import React from 'react';
import {Text, StyleSheet, View, BackHandler, Pressable} from 'react-native';
import {
  EventSubscription,
  Navigation,
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';

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
};
interface Props extends NavigationComponentProps {
  id: any;
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

  _handleAddToCart = () => {};

  render() {
    const {id} = this.props || {};
    return (
      <View style={styles.view}>
        <TitleHeaderView
          title="Product Details"
          isShowLine={true}
          viewStyle={{paddingVertical: 8}}
        />
        <Text> textInComponent {id} </Text>
        <Pressable onPress={this._handleAddToCart}>
          <Text>add to cart</Text>
        </Pressable>

        <TitleSubButtonView
          title="add to cart"
          onPress={this._handleAddToCart}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ProductDetailScreen;
