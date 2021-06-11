import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '@utils/Colors';

interface Props {
  data: any;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  viewStyle?: ViewStyle;
}
const RowTitleDescriptionView: React.FC<Props> = React.memo(
  ({data, titleStyle, descriptionStyle, viewStyle}) => {
    return (
      <View style={[viewStyle || styles.item]}>
        <Text style={[titleStyle || styles.title]}>{data.title}</Text>
        <Text style={[descriptionStyle || styles.desc]}>{data.desc}</Text>
      </View>
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

export default RowTitleDescriptionView;
