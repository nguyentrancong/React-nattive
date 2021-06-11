import React from 'react';
import {
  Image,
  ImageStyle,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
interface Props {
  viewStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  image?: number;
  onPress?: () => void;
}
const CloseButtonView: React.FC<Props> = React.memo(
  ({viewStyle, imageStyle, image, onPress}) => {
    return (
      <Pressable onPress={onPress} style={[styles.view, viewStyle]}>
        <Image
          style={[styles.image, imageStyle]}
          source={image ? image : require('@images/common/ic_close.png')}
        />
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    borderRadius: 22,
  },
  image: {
    height: 22,
    width: 22,
  },
});

export default CloseButtonView;
