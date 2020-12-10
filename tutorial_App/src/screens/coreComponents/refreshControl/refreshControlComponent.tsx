import React, { useState, useCallback } from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    RefreshControl,
    StyleSheet,
    ScrollView,
 } from 'react-native';
import LineComponent from '../commons/line';
import Constants from 'expo-constants';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const RefreshControlComponent = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Text>RefreshControl</Text>
                <LineComponent marginLeftAndRight={0}></LineComponent>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default RefreshControlComponent;