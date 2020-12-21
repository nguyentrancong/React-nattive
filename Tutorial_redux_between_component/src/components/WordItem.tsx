import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
 } from 'react-native'

 import { connect } from 'react-redux';

 import {TOGGLE_SHOW_HIDE, TOGGLE_MEMORIZED_FORGET} from '../redux/actionTypes';


 const WordItem = (props) => {
     const {id, en, vn, memorized, isShow} = props.item

     const textDecorationLine = memorized ? 'line-through' : 'none'
     const titleBtMemorizedOrForget = memorized ? 'Forget' : 'Memorized'

     const titleShowOrHide = isShow ? 'Hide' : 'Show'
     const textValue = isShow ? vn : '- - - - -'

    const memorizedHandle = () => {
        props.dispatch({
            type: TOGGLE_MEMORIZED_FORGET,
            id: id
        })
    }

    const showHandle = () => {
        props.dispatch({
            type: TOGGLE_SHOW_HIDE,
            id: id
        })
    }

     return (
        <View style={styles.content}>
            <Text style={{textDecorationLine, ...styles.text}} >{en}</Text>
            <Text style={{ ...styles.text}} >{textValue}</Text>

            <View style={styles.contentBt}>
                <TouchableOpacity 
                    style={{
                        padding: 10,
                        borderRadius: 6,
                        backgroundColor: 'lightgray',
                        alignItems: 'center',
                        justifyContent:'center',
                    }}
                    onPress={() => memorizedHandle()}
                >
                    <Text>{titleBtMemorizedOrForget}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        padding: 10,
                        borderRadius: 6,
                        backgroundColor: 'lightgray',
                        alignItems: 'center',
                        justifyContent:'center',
                    }}
                    onPress={() => showHandle()}
                >
                    <Text>{titleShowOrHide}</Text>
                </TouchableOpacity>
            </View>
        </View>
     )
 }

 const styles = StyleSheet.create({
     content: {
         flex: 1,
         backgroundColor: 'white',
         padding: 10,
         margin: 10,
         borderRadius: 8

     }, 
     text: {
         padding: 6,
         fontSize: 16,
     },
     contentBt: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-around',
     }
 })

 export default connect()(WordItem);