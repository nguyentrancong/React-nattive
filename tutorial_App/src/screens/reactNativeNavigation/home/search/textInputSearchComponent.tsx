import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

interface TextSearch {
    placeholder: string;
    // urlSource: any;
}

const TextInputSearch = ({
    placeholder = 'Tìm kiếm',
    searchHandle,
}) => {
    return (
        <TouchableOpacity onPress={searchHandle} style={styles.contentSearch}>
            <Image style={styles.imageSearch}
                source={require('../../../../images/search.png')}
            />
            <TextInput
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                style={{flex: 1}}
                pointerEvents="none"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contentSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 18,
    },
    imageSearch: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
});

export default TextInputSearch;