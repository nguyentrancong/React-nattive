import React from 'react';
import {
    View,
    Text,
    FlatList,
    Platform,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import { Courses } from './index';
import CourseItemComponent from "./courseItemComponent"

const FlatListCourse = () => {
    const text = "List Courses"
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}> {text}</Text>
            <FlatList
                data={Courses}
                renderItem={({item}) => {
                    return (
                        <CourseItemComponent id={item.id} title={item.title} desc={item.desc} images={item.images} />
                    );
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textHeader: {
        color: 'blue',
        fontSize: 30,
        paddingBottom: 16
    }
});

export default FlatListCourse;