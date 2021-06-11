import {colors} from '@utils/Colors';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  viewStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  title?: string;
  subtitle?: string;
  onPress?: () => void;
}
const TitleSubButtonView: React.FC<Props> = React.memo(
  ({viewStyle, titleStyle, subtitleStyle, title, subtitle, onPress}) => {
    return (
      <Pressable onPress={onPress} style={[styles.view, viewStyle]}>
        {!!title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {!!subtitle && (
          <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        )}
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
});

export default TitleSubButtonView;
