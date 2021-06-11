import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {
  NavigationComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import RowTitleDescriptionView from '@common/views/RowTitleDescriptionView';

enum AccountItemType {
  NORMAL = 'NORMAL',
  ACCOUNT = 'ACCOUNT',
}

type Account = {
  id: number;
  title?: string;
  desc?: string;
  image?: number;
  itemType?: AccountItemType;
};

const DATA: Account[] = [
  {
    id: 1,
    title: 'Account',
    desc: undefined,
    image: undefined,
    itemType: AccountItemType.ACCOUNT,
  },
  {
    id: 4,
    title: 'Hotline',
    desc: '0989.009.090',
    image: undefined,
    itemType: AccountItemType.ACCOUNT,
  },
  {
    id: 2,
    title: 'Điều khoản & Chính sách',
    desc: undefined,
    image: undefined,
    itemType: AccountItemType.ACCOUNT,
  },
  {
    id: 3,
    title: 'Về Thoáng Quê',
    desc: undefined,
    image: undefined,
    itemType: AccountItemType.ACCOUNT,
  },
];

interface Props extends NavigationComponentProps {}

class OtherScreen extends NavigationComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  _keyExtractor = (item: any, index: number) => {
    return `${item.id}`;
  };

  _renderItem = ({item, index}: {item: any; index: number}) => {
    return <RowTitleDescriptionView data={item} key={index} />;
  };

  render() {
    return (
      <FlatList
        style={styles.flatList}
        data={DATA}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default OtherScreen;
