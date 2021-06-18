import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Pressable,
} from 'react-native';
import {colors} from '@utils/Colors';

// --------------------------
// |v| - title - description
// --------------------------
interface RadioButtonViewProps {
  viewStyle?: ViewStyle;
  colorRadio?: string;
  title?: string;
  titleStyle?: TextStyle;
  description?: string;
  descriptionStyle?: TextStyle;
  selected?: boolean;
  radioStyle?: ViewStyle;
  onPress?: () => void;
}
const RadioButtonView: React.FC<RadioButtonViewProps> = React.memo(
  ({
    selected,
    colorRadio,
    radioStyle,
    title,
    viewStyle,
    titleStyle,
    onPress,
    description,
    descriptionStyle,
  }) => {
    return (
      <Pressable style={[styles.view, viewStyle]} onPress={onPress}>
        <View
          style={[styles.selecteView, radioStyle, {borderColor: colorRadio}]}>
          {!!selected && (
            <View style={[styles.selected, {backgroundColor: colorRadio}]} />
          )}
        </View>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
  },
  selecteView: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 16,
    width: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  title: {
    flex: 1,
    marginLeft: 8,
    color: colors.black,
  },
  description: {
    marginLeft: 8,
    color: colors.black,
  },
});

export default RadioButtonView;
