import React from 'react';
import {
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  Image,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors} from '@utils/Colors';

//----------------------||------------
// Title | Description  || Title |  >
//----------------------||------------

interface Props {
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  imageStyle?: ImageStyle;
  viewStyle?: ViewStyle;
  onPress?: () => void;
  title?: string;
  description?: string;
  image?: number;
  uri?: string;
}
const TitleDescriptionButtonView: React.FC<Props> = React.memo(
  ({
    titleStyle,
    descriptionStyle,
    viewStyle,
    imageStyle,
    onPress,
    title,
    description,
    image,
    uri,
  }) => {
    return (
      <Pressable style={[styles.view, viewStyle]} onPress={onPress}>
        {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {!!description && (
          <Text style={[styles.desc, descriptionStyle]}>{description}</Text>
        )}
        {(!!uri || !!image) && (
          <Image
            style={[styles.image, imageStyle]}
            source={
              !!uri ? {uri: uri} : image || require('@icons/ic_more_than.png')
            }
          />
        )}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default TitleDescriptionButtonView;
