import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  Image,
} from 'react-native';
import {colors} from '@utils/Colors';

interface Props {
  onPress?: () => void;
  viewStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
  data?: any;
}
const ImageTitleRowButtonView: React.FC<Props> = React.memo(
  ({onPress, viewStyle, imageStyle, textStyle, data}) => {
    const {image, title, uri} = data || {};
    return (
      <Pressable onPress={onPress}>
        <Image
          style={[imageStyle || styles.image]}
          source={!!uri ? {uri: uri} : image}
        />
        <Text style={[textStyle || styles.text]}>{title}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
});

export default ImageTitleRowButtonView;
