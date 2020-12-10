import React, { useState } from 'react';
import { 
    View,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Text,
    Pressable,
 } from 'react-native';
import LineComponent from '../commons/line';

const PressableComponent = () => {

    const [timesPressed, setTimesPressed] = useState(0);
    let textLog = '';

    if (timesPressed > 1){
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

     return (
         <SafeAreaView style={styles.container}>
             <View>
                 <Text style={styles.textHeader}>Pressable Component</Text>
                 <LineComponent marginLeftAndRight={0}/>
             </View>
             <View style={{justifyContent: "center", flex: 1}}>
             <Pressable
                onPress={() => {
                setTimesPressed((current) => current + 1);
                }}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white'
                },
                styles.wrapperCustom
                ]}>
                {({ pressed }) => (
            <Text style={styles.text}>
                {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
            )}
      </Pressable>
                 <View style={styles.logBox}>
                    <Text testID="pressable_press_console">{textLog}</Text>
                </View>
             </View>
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,

     },
     textHeader: {
        height: 44,
        color: 'blue',
        padding: 8,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center'
     }, 
     text: {
         fontSize: 16,
     },
     wrapperCustom: {
        borderRadius: 8,
        padding: 6
     },
     logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
      }
    
 });

 export default PressableComponent;