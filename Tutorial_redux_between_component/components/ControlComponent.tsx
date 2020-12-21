import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
 } from 'react-native'

import { connect } from 'react-redux'

 const ControlComponent = (props) => {

    const onPressDow = () => {
        props.dispatch({ type: 'DOWN'})
    }

    const onPressUp = () => {
        props.dispatch({ type: 'UP'})
    }

     return (
         <View style={styles.content}>
             <Text>ControlComponent</Text>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 20
                }}
            >
                 <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 20, 
                    }}

                    onPress={() => onPressDow()}
                >
                        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 40}} >-</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10, 
                    }}
                    onPress={() => onPressUp()}
                >
                        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 40}} >+</Text>
                        </View>
                </TouchableOpacity>
            </View>
         </View>
     )
 }

 const styles = StyleSheet.create({
    content: {
        backgroundColor: 'lightgray',
        // height: 200,
        padding: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
 })

 export default connect()(ControlComponent);