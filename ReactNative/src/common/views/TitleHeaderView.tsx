import {colors} from '@utils/Colors';
import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import CloseButtonView from './CloseButtonView';
// Header top
//---------------
// Title | button
//---------------
interface Props {
  viewStyle?: ViewStyle;
  onPressClose?: () => void;
  buttonCloseStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  isShowLine?: boolean;
  lineStyle?: ViewStyle;
}
const TitleHeaderView: React.FC<Props> = React.memo(
  ({
    viewStyle,
    onPressClose,
    buttonCloseStyle,
    title,
    titleStyle,
    isShowLine,
    lineStyle,
  }) => {
    return (
      <>
        <View style={[styles.view, viewStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <CloseButtonView
            onPress={onPressClose}
            viewStyle={[styles.closeButton, buttonCloseStyle]}
          />
        </View>
        {!!isShowLine && <View style={[styles.line, lineStyle]} />}
      </>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginLeft: 44,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: colors.black,
  },
  closeButton: {
    marginHorizontal: 6,
  },
  line: {
    height: 1,
    backgroundColor: colors.line,
  },
});

export default TitleHeaderView;
