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

 import {SHOW_FORM_BUTTON} from '../redux/actionTypes';

 const Header = (props) => {

    const onPressAddShowForm = () => {
        props.dispatch({
            type: SHOW_FORM_BUTTON,
        })
    }
     return (
         <View style={styles.content}>
             <View style={styles.box}>

             </View>

             <View style={{...styles.box, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>Content</Text>
             </View>

             <View style={{...styles.box, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                    style={{ 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        height: 34, 
                        width: 44, 
                        backgroundColor: 'lightgray',
                        borderRadius: 8,
                    }}
                    onPress={() => onPressAddShowForm()}
                >
                    <Text style={{fontSize: 22, fontWeight: '600'}}>+</Text>
                </TouchableOpacity>
             </View>
         </View>
     )
 }

 export default connect()(Header);

 const styles = StyleSheet.create({
     content: {
         width: '100%',
         height: 50,
         flexDirection: 'row',
         justifyContent: 'space-around',
         backgroundColor: 'white',
     },
     box: {
        //  backgroundColor: 'gray',
         width: '30%'
     }
 })