import React, {useState} from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    TextInput,
 } from 'react-native'

 import { connect } from 'react-redux';

 import {ADD_NEW_WORD} from '../redux/actionTypes';

 const Form = (props) => {

    const [en, setEn] = useState('')
    const [vn, setVn] = useState('')

    const onPressAdd = () => {
        let id = Math.floor(Math.random() * 100) + 1
        props.dispatch({
            type: ADD_NEW_WORD,
            item: {id: id, en: en, vn: vn, memorized: false, isShow: true}
        })
    }

     return (
         <View style={styles.content}>
             <TextInput
                style={styles.input}
                placeholder='Enter English'
                value={en}
                onChangeText={value => setEn(value)}
             />
             <TextInput
                style={styles.input}
                placeholder='Enter Vietnamese'
                value={vn}
                onChangeText={value => setVn(value)}
             />

             <TouchableOpacity
                onPress={() => onPressAdd()}
                style={{height: 40, margin: 5, paddingLeft: 10, paddingRight: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray'}}
             >
                 <View style={{alignItems: 'center', justifyContent: 'center'}}>
                     <Text style={{fontSize: 18, fontWeight: 'bold'}}>Add</Text>
                 </View>
             </TouchableOpacity>
         </View>
     )
 }

export default connect()(Form);

 const styles = StyleSheet.create({
     content: {
        margin: 8,
        backgroundColor: 'white',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 8,


     },
     input: {
        
        height: 44,
        paddingLeft: 8,
        paddingRight: 8,
        borderBottomColor: 'blue',
        borderBottomWidth: 0.5
        // backgroundColor: 'gray'
     }

 })