import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Aler,
 } from 'react-native';
import LineComponent from '../commons/line';

const opPressTitle = () => {
    console.log("title pressed");
    alert('Press header');
}

 const TextComponent = () => {

    //value
    const titleText = useState("Bird's Nest");
    const bodyText = useState("This is not really a bird nest.");

     return (
         <SafeAreaView style={styles.container}>
             <Text style={styles.textHeader}>Text Component</Text>
             <LineComponent marginLeftAndRight={0}/>
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={opPressTitle}>
                    {titleText}
                    {'\n'}
                    {'\n'}
                </Text>
                <Text numberOfLines={5}>{bodyText}</Text>
            </Text>
         </SafeAreaView>
     );
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    textHeader: {
        height: 44,
        fontSize: 20,
        paddingTop: 8
    },
    baseText: {
        fontFamily: "Cochin"
        
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: 'gray'
    }
});

 export default TextComponent;