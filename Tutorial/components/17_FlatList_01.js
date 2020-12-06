import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import flatListData from './data/flatListData';
import Swipeout from 'react-native-swipeout';

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteKeyRow: null,
    };
  }

  refreshFlatList = (deleteKey) => {
    this.setState((prevState) => {
      return {deleteKeyRow: deleteKey};
    });
  };

  render() {
    return (
      <View style={{flex: 1, marginTop: 33}}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
      </View>
    );
  }
}

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deleteRow = this.props.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you want to delete row ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    // refresh FlatList
                    this.props.parentFlatList.refreshFlatList(deleteRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
              backgroundColor: 'green',
            }}>
            <Image
              source={{uri: this.props.imageUrl}}
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'white',
                margin: 10,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={(styles.itemText, {fontSize: 20})}>
                {this.props.item.name}
              </Text>
              <Text style={styles.itemText}>
                {this.props.item.foodDescription}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 1,
            }}
          />
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  itemText: {
    color: 'white',
    padding: 10,
    fontSize: 15,
  },
});
