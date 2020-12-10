import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Button,
    Switch,
    Text,
 } from 'react-native';
import LineComponent from '../commons/line';

 const SwitchComponent = () => {
    
    //value
    const [isEnabled, setIsEnable] = useState(false);

    //function
    const toggleSwitch = () => setIsEnable(p => !p); 

     return(
         <SafeAreaView style={{flex: 1}}>
             <View>
                <Text>Switch Component</Text>
                <LineComponent/>
             </View>
             <View style={styles.container}>
                <Switch
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    ios_backgroundColor="#3e3e3e"
                    value={isEnabled}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                />
             </View>
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
 });

 export default SwitchComponent;