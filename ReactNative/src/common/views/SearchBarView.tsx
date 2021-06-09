import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  contentStyle?: ViewStyle;
}
const SearchBarView: React.FC<Props> = React.memo(({contentStyle}) => {
  return (
    <View style={[contentStyle || styles.content]}>
      <Text>search</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  content: {},
});
export default SearchBarView;
