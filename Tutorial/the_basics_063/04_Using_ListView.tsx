import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    SectionList,
    Platform,
} from 'react-native';

const FlatListBasics = () => {
    return(
        <View style={style.container}>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Item name={item.key}/>}
            />
        </View>
    );
}

const SectionListBasics = () => {
    return(
        <View style={style.container}>
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) => <Item name={item}/>}
                renderSectionHeader={({section}) => <SectionHeaderItem title={section.title}/>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

const SectionHeaderItem = (props) => {
    return(
        <View>
            <Text style={style.sectionHeader}>{props.title}</Text>
        </View>
    );
}

const Item = (props) => {
    return(
        <View>
            <Text style={style.item}>{props.name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'ios' ? 34 : 0,
        ...Platform.select({
            ios: {
                paddingTop: 34,
                backgroundColor: 'gray',
            },
            android: {
                paddingTop: 0,
                backgroundColor: 'white',
            },
            default: {
                paddingTop: 0,
                backgroundColor: 'blue',
            }
        })
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'blue'
    },
    sectionHeader: {
        paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',  
    },
});

// export default FlatListBasics;
export default SectionListBasics;

