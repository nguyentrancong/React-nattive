import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
 } from 'react-native'

 import { connect } from 'react-redux';

 import {FILTER_MEMORIZED, FILTER_NEED_PRACTICE, FILTER_SHOW_ALL} from '../redux/actionTypes';

 const Filter = (props) => {
    const {filter} = props

    const onPressActionType = (actionType) => {
        props.dispatch({ type: actionType })
    }


    const selectedStyle = (bt) => {
        if (bt === filter) {
            return {fontSize: 20, color: 'blue', fontWeight: 'bold'}
        }
        return {fontSize: 18, color: 'black', fontWeight: 'normal'}
    }

     return (
        <View style={styles.content}>

            {/* show all */}
            <TouchableOpacity
                style={{
                    height: 50,
                    padding: 10,
                }}
                onPress={() => onPressActionType(FILTER_SHOW_ALL)}
            >
                <Text style={selectedStyle('SHOW_ALL')} >Show all</Text>
            </TouchableOpacity>

            {/* memorized */}
            <TouchableOpacity
                style={{
                    height: 50,
                    padding: 10,
                }}
                onPress={() => onPressActionType(FILTER_MEMORIZED)}
            >
                <Text style={selectedStyle('MEMORIZED')} >Memorized</Text>
            </TouchableOpacity>

            {/* need practice */}
            <TouchableOpacity
                style={{
                    height: 50,
                    padding: 10,
                }}
                onPress={() => onPressActionType(FILTER_NEED_PRACTICE)}
            >
                <Text style={selectedStyle('NEED_PRACTICE')} >Need practice</Text>
            </TouchableOpacity>

        </View>
     )
 }

 const mapStateValue = (state) => {
    return { filter: state.filterStatus,
    
    }
 }

 export default connect(mapStateValue)(Filter);

 const styles = StyleSheet.create({
     content: {
         flexDirection: 'row',
         justifyContent: 'space-around',
         backgroundColor: 'white',
         padding: 10,
         borderTopLeftRadius: 8,
         borderTopRightRadius: 8,

     }
 })

