import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
 } from 'react-native';

 const QuickAccessItemComponent = ({image, name}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.text} numberOfLines={2}>{name}</Text>
        </View>
    );
 }

 const styles = StyleSheet.create({
     container: {
        flex: 1,
        height: 110,
        width: 60,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
     },
     image: {
        height: 50,
        width: 50,
        margin: 10,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 25,

     },
     text: {
        flex: 1,
        width: 60,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',        
     }
 });

 export default QuickAccessItemComponent;