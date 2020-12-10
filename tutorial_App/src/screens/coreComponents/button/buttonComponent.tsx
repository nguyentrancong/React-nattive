import React from 'react';
import {
    View,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    Button,
    FlatList,
    Alert,
} from 'react-native';
import LineComponent from '../commons/line';

const ButtonComponent = () => {
    const text1 = 'The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.'
    const text2 = 'Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.'
    
    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>Button Core Component</Text>
                <LineComponent height={0.5} color={'gray'}/>
            <View style={{marginLeft: 16, marginRight: 16, padding: 8}}>
                <Text style={styles.textDesc}>{text1}</Text>
                <Button title='click me' style={styles.button01}
                    onPress={() => Alert.alert('click button 1')}
                />
                <LineComponent height={0.5} color={'gray'}/>
            </View>
            <View style={{marginLeft: 16, marginRight: 16, padding: 8}}>
                <Text style={styles.textDesc}>{text2}</Text>
                <Button title='click me' style={styles.button02}
                    onPress={() => Alert.alert('click button 2')}
                />
                <LineComponent height={0.5} color={'gray'}/>
            </View>
            <View style={{margin: 16}}>
                <Text>{text1}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button title='click right' style={styles.button02}
                        onPress={() => Alert.alert('click button right')}
                    />
                    <Button title='click left' style={styles.button02}
                        onPress={() => Alert.alert('click button left')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    textHeader: {
        height: 44,
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        margin: 10,
        padding: 10,
        fontWeight: '600'
    },
    textDesc: {
        fontSize: 18,
        color: 'gray',
        fontWeight: '200',
        margin: 8,
        textAlign: 'center'
    },
    button01: {
        height: 44,
        borderWidth: 1,
        color: '#adaAFF'
    },
    button02: {
        height: 44,
        backgroundColor: 'green',
    }
});

export default ButtonComponent;