import {colors} from '@utils/Colors';
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  lineStyle?: ViewStyle;
}
const LineView: React.FC<Props> = React.memo(({lineStyle}) => {
  return <View style={[styles.line, lineStyle]} />;
});

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.background,
  },
});

export default LineView;
