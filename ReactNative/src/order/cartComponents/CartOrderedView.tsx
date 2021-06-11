import {colors} from '@utils/Colors';
import TitleSubButtonView from '@views/TitleSubButtonView';
import LineView from '@views/LineView';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  ordered?: any[];
}
const CartOrderedView: React.FC<Props> = React.memo(({ordered}) => {
  const handleAddMore = () => {
    // Navigation.dismissModal(NavigationManager.getComponentId());
  };
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.title}>Các món đã chọn</Text>
        <TitleSubButtonView
          onPress={handleAddMore}
          title="Thêm món"
          viewStyle={{paddingHorizontal: 12, paddingVertical: 5}}
          titleStyle={{color: colors.white, fontSize: 12, fontWeight: '400'}}
        />
      </View>
      <LineView
        lineStyle={{
          paddingHorizontal: 16,
          marginTop: 12,
          backgroundColor: colors.background,
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 8,
    padding: 16,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
});

export default CartOrderedView;
