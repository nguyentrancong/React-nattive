import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/Colors';

interface Props {
  data: any;
}
const ShopTitleSectionView: React.FC<Props> = React.memo(({data}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default ShopTitleSectionView;
