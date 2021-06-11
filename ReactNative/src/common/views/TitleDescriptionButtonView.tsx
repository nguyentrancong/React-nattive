import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {colors} from '@utils/Colors';

interface Props {
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  viewStyle?: ViewStyle;
  onPress?: () => void;
  title?: string;
  description?: string;
}
const TitleDescriptionButtonView: React.FC<Props> = React.memo(
  ({titleStyle, descriptionStyle, viewStyle, onPress, title, description}) => {
    return (
      <Pressable style={[styles.item, viewStyle]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.desc, descriptionStyle]}>{description}</Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
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
});

export default TitleDescriptionButtonView;
