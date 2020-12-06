import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TextInput,
    Dimensions,
    StyleSheet,
    FlatList
} from 'react-native';
import flastListData from './data/flatListData';

export default class BasicFlatList extends Component {
    render() {
        return(
            <View
                style={{flex: 1, marginTop: 33}}
            >
                <FlatList
                    data={flastListData}
                    renderItem={({item, index}) => {
                        return(
                            <FlastListItem
                                item={item} index={index}    
                            ></FlastListItem>
                        );
                    }}
                >

                </FlatList>
            </View>
        );
    }
}

class FlastListItem extends Component {
    render() {
        return(
            <View>
                <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                    backgroundColor: "green" 
                }}
            >
                <Image
                    source={{uri: this.props.imageUrl}}
                    style={{height: 100, width: 100, backgroundColor: 'white', margin: 10}}
                ></Image>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}
                >
                <Text style={styles.itemText, {fontSize: 20}}>{this.props.item.name}</Text>
                <Text style={styles.itemText}>{this.props.item.foodDescription}</Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    height: 1,
                }}
            ></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemText: {
        color: "white",
        padding: 10,
        fontSize: 15,
    }
});