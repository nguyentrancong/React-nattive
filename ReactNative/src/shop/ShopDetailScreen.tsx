import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {
  Navigation,
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {Address} from '@models/Address';
import CloseButtonView from '@views/CloseButtonView';
import {colors} from '@utils/Colors';
import {dimensions} from '@utils/Constant';
import ImageTitleRowButtonView from '@views/ImageTitleRowButtonView';

interface Props extends NavigationComponentProps {
  data: Address;
}
class ShopDetailScreen extends NavigationComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  _handleClose = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  render() {
    const {data} = this.props || {};
    const {title, desc, distance} = data || {};
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg',
            }}
          />

          <View style={styles.info}>
            <Text style={styles.shopName}>F99</Text>
            <Text style={styles.address}>{title}</Text>
            <Text style={styles.time}>Giờ mở cửa: 07:00 - 22:00</Text>
          </View>
          <ImageTitleRowButtonView
            title={data.title}
            image={require('@images/common/ic_close.png')}
          />
        </ScrollView>
        {/* Button Close */}
        <CloseButtonView
          onPress={this._handleClose}
          viewStyle={styles.closeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    height: 35,
    width: 35,
    top: 16,
    right: 16,
    backgroundColor: 'rgba(230,230,230,0.5)',
    borderRadius: 22,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  image: {
    height: dimensions.screenWidth,
    width: dimensions.screenWidth,
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  shopName: {
    height: 16,
    fontSize: 12,
    marginTop: 8,
    color: colors.black,
    opacity: 0.5,
  },
  address: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  time: {
    height: 18,
    marginTop: 6,
    fontSize: 14,
    opacity: 0.5,
    color: colors.black,
  },

  detail: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
    color: colors.black,
  },
  distance: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.5,
  },
});

export default ShopDetailScreen;
