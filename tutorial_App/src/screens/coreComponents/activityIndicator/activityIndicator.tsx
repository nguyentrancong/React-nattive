import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

const ActivityIndicatorComponent = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={{...styles.textHeader, fontSize: 22}}>ActivityIndicator</Text>
            <Text style={{...styles.textHeader, color: 'blue'}}>ActivityIndicator 1</Text>
            <View style={styles.viewActivityIndicator}>
                <ActivityIndicator />
                <ActivityIndicator size='small' color='#0000ff'/>
                <ActivityIndicator size='large' color='#00ff00'/>
                <ActivityIndicator size='large' color='red'/>
            </View>
            {/* <Text style={{...styles.textHeader, color: 'green'}}>ActivityIndicator 2</Text> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        flexDirection: 'column'
    },
    textHeader: {
        height: 44,
        color: 'red',
        fontSize: 16,
        backgroundColor: 'white',
        textAlign: "center",
        padding: 8,
        fontWeight: '600'
    },
    viewActivityIndicator: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});

export default ActivityIndicatorComponent;