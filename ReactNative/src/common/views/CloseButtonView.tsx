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
  imageString?: string;
  onPress: () => void;
}
const CloseButtonView: React.FC<Props> = React.memo(
  ({viewStyle, imageStyle, imageString, onPress}) => {
    return (
      <View style={[styles.content, viewStyle]}>
        <Pressable onPress={onPress} style={styles.btClick}>
          <Image
            style={[styles.image, imageStyle]}
            source={require('@images/common/ic_close.png')}
          />
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 22,
    backgroundColor: 'rgba(230,230,230,0.5)',
  },
  btClick: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 22,
    width: 22,
  },
});

export default CloseButtonView;
