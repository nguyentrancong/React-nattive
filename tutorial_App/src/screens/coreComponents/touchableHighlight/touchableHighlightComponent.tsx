import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text, 
    TextInput,
    SafeAreaView,
    TouchableHighlight,
 } from 'react-native';
import LineComponent from '../commons/line';

 const TouchableHighlightComponent = () => {
     //value
     const [count, setCount] = useState(0);

     //function 
     const onPress = () => {
         setCount(count + 1);
     }

     return (
        <SafeAreaView style={styles.container}>
            <Text>TouchableHighlight</Text>
            <LineComponent/>
            <View style={styles.view}>
                <TouchableHighlight
                    onPress={onPress}
                >
                    <View style={styles.button}>
                        <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>Count: {count}</Text>
                </View>
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
         justifyContent: 'center',
         alignItems: 'center',
         paddingHorizontal: 10
     },
     button: {
         alignItems: 'center',
         backgroundColor: '#DDDDDD',
         padding: 10,
     },
     countContainer: {
        alignItems: 'center',
        padding: 10
     },
     countText: {
        color: '#D921f2'
     }

 });

 export default TouchableHighlightComponent;