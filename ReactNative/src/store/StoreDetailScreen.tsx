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
import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';
import ImageTitleRowButtonView from '@views/ImageTitleRowButtonView';
import TitleSubButtonView from '@views/TitleSubButtonView';
import NavigationManager from '@managers/NavigationManager';

interface Props extends NavigationComponentProps {
  data: Address;
}
class StoreDetailScreen extends NavigationComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  _handleClose = () => {
    Navigation.dismissModal(this.props.componentId);
  };

  _handleShowMap = (value?: any) => {
    //todo: show map
  };

  _handleFavorites = (value?: any) => {
    //todo: handle favorites
  };

  _handleContacts = (value?: any) => {
    //todo: handle contacts
  };

  _handleShare = (value?: any) => {
    //todo: handle share
  };

  _handleOrder = (value?: any) => {
    //todo: handle order
    this._handleClose();
    NavigationManager.switchToTab(1);
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
            <Text style={styles.nameStore}>F99</Text>
            <Text style={styles.address}>{title}</Text>
            <Text style={styles.time}>Giờ mở cửa: 07:00 - 22:00</Text>
          </View>
          <ImageTitleRowButtonView
            onPress={this._handleShowMap}
            title={data?.desc}
            image={require('@images/thoangque/directions_black_3x.png')}
            viewStyle={{marginTop: 2, paddingVertical: 16}}
            imageStyle={{height: 40, width: 40, tintColor: colors.primary}}
            titleStyle={{fontSize: 16, marginLeft: 12}}
          />
          <ImageTitleRowButtonView
            onPress={this._handleFavorites}
            title="Thêm vào danh sách yêu thích"
            image={require('@images/thoangque/star_border_black_3x.png')}
            viewStyle={{marginTop: 2, height: 60}}
            imageStyle={{height: 35, width: 35, tintColor: colors.primary}}
            titleStyle={{fontSize: 16, marginLeft: 12}}
          />
          <ImageTitleRowButtonView
            onPress={this._handleContacts}
            title="Liên hệ"
            image={require('@images/thoangque/phone_black_3x.png')}
            viewStyle={{marginTop: 2, height: 60}}
            imageStyle={{height: 30, width: 30, tintColor: colors.primary}}
            titleStyle={{fontSize: 16, marginLeft: 12}}
          />
          <ImageTitleRowButtonView
            onPress={this._handleShare}
            title="Chia sẻ với bạn bè"
            image={require('@images/thoangque/share_black_3x.png')}
            viewStyle={{marginTop: 2, height: 60}}
            imageStyle={{height: 30, width: 30, tintColor: colors.primary}}
            titleStyle={{fontSize: 16, marginLeft: 12}}
          />
          <View style={{height: isIphoneX() ? getBottomSpace() + 30 : 44}} />
        </ScrollView>

        {/* Button order */}
        <TitleSubButtonView
          onPress={this._handleOrder}
          title="Đặt món"
          viewStyle={styles.viewOrder}
          titleStyle={{color: colors.white}}
        />

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
    top: 16,
    right: 16,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
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
  nameStore: {
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
  viewOrder: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: isIphoneX() ? 30 : 16,
    height: 44,
  },
});

export default StoreDetailScreen;
