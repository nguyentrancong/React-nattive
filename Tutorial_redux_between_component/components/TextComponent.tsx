import React, { useState } from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
 } from 'react-native'
 import { connect } from 'react-redux'

 const TextComponent = (props) => {

        return (
            <View style={styles.content}>
                <Text style={{color: 'white', fontSize: 20, padding: 10}} >ControlComponent</Text>
                <Text style={{color: 'white', fontSize: 40}} >{props.myValue}</Text>
            </View>
        )

 }

 const mapStateValue = (state) => {
    return {myValue: state.value}
 }

 const styles = StyleSheet.create({
    content: {
        backgroundColor: 'gray',
        padding: 20,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
 })


 export default connect(mapStateValue)(TextComponent);;