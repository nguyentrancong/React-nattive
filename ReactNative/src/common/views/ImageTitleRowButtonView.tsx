import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  ImageStyle,
  Image,
} from 'react-native';
import {colors} from '@utils/Colors';

interface Props {
  onPress?: () => void;
  viewStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  titleStyle?: TextStyle;
  image?: number;
  uri?: string;
  title?: string;
}
const ImageTitleRowButtonView: React.FC<Props> = React.memo(
  ({onPress, viewStyle, imageStyle, titleStyle, image, uri, title}) => {
    return (
      <Pressable onPress={onPress} style={[styles.content, viewStyle]}>
        <Image
          style={[styles.image, imageStyle]}
          source={
            (!!uri ? {uri: uri} : image) ||
            require('@images/common/ic_close.png')
          }
        />
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 6,
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
});

export default ImageTitleRowButtonView;
