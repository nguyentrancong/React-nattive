import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {dimensions} from '../utils/Constant';

const DATA = [1, 2, 3, 4, 5, 15, 6, 7, 8, 9];

interface Props extends NavigationComponentProps {}
export default class HomeScreen extends NavigationComponent<Props> {
  private _dataProvider: DataProvider;
  private _layoutProvider: LayoutProvider;
  constructor(props: Props) {
    super(props);

    this.state = {};
    this._dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
    this._layoutProvider = new LayoutProvider(
      index => 1,
      (type, dim, index) => {
        const imgHeight = 100;
        const padding = 16 * 2;
        const separatorHeight = 1;
        const itemHeight = imgHeight + padding + separatorHeight;
        dim.width = dimensions.screenWidth;
        dim.height = itemHeight;
      },
    );
  }

  _renderRow = (type: any, data: any) => {
    return (
      <View style={{width: dimensions.screenWidth, height: 20}}>
        <Text style={{color: 'black'}}>xxxxx{data}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Home Screen textInComponent </Text>
        <RecyclerListView
          style={styles.listView}
          dataProvider={this._dataProvider.cloneWithRows(DATA)}
          layoutProvider={this._layoutProvider}
          rowRenderer={this._renderRow}
          // onEndReached={this._fetch}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
            // refreshControl: (
            //   <RefreshControl
            //     colors={['#9Bd35A', '#689F38']}
            //     refreshing={loading}
            //     onRefresh={this._refresh}
            //   />
            // ),
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
    backgroundColor: 'red',
  },
});
