import React from 'react';
import { 
    View,
    SafeAreaView,
    VirtualizedList,
    Text,
    StyleSheet,
 } from 'react-native';
import LineComponent from '../commons/line';
import Constants from 'expo-constants'

const DATA = [];

const getItem = (data, index) => {
    return {
        id: Math.random().toString(12).substring(0),
        title: `item ${index + 1}`,
    }
}

const getItemCount = (data) => {
    return 10;
}



const Item = ({title}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}


const VirtualizedListCustom = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>VirtualizedList</Text>
            <LineComponent/>
            <View style={styles.view}>
                <VirtualizedList
                    data={DATA}
                    initialNumToRender={4}
                    renderItem={({item}) => <Item title={item.title}></Item>}
                    keyExtractor={item => item.key}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
      },
      title: {
        fontSize: 32,
      },
});

export default VirtualizedListCustom;

