import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Course } from './index';
import LineComponent from '../commons/line';

const screenSize = Dimensions.get('screen');

const CourseItemComponent: React.FC<Course> = ({
    id,
    title,
    desc,
    images,
}) => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.image}/>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textDesc}>{title}</Text>
                </View>
            </View>
            <LineComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8
    },
    textTitle: {
        fontSize: 16,
        height: 30,
        padding: 8,
        color: 'black'

    },
    textDesc: {
        fontSize: 14,
        height: 40,
        color: 'darkgrey',
        padding: 8,
    },
    image: {
        height: 60,
        width: 60,
        backgroundColor: 'azure',
        borderWidth: 0.5,
        borderColor: 'darkgrey',
        borderRadius: 10,
    }
});

export default CourseItemComponent;