import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
 } from 'react-native'

 import { connect } from 'react-redux';
import Filter from './Filter';
import Form from './Form';
import Header from './Header';
import WordItem from './WordItem';

 const Home = (props) => {

    const {arrWords, filter, isAdding} = props

    const filterList = () => {
        if (filter === 'MEMORIZED') {
            return arrWords.filter(e => e.memorized)
        } else if (filter === 'NEED_PRACTICE') {
            return arrWords.filter(e => !e.memorized)
        } else {
            return arrWords
        }
    }

     return (
        <SafeAreaView style={styles.container}>

            <Header />

            { isAdding ? <Form /> : null}

            <FlatList
                data={filterList()}
                keyExtrator={(item) => `${item.id}`}
                renderItem={({item, index}) => {
                    return(
                        <WordItem key={index} item={item} />
                    )
                }}
            />

           <View style={{marginTop: 8}}>
                <Filter />
           </View>
        </SafeAreaView>
     )
 }

 const mapStateValue = (state) => {
     return {
            filter: state.filterStatus, 
            arrWords: state.arrWords,
            isAdding: state.isAdding,
        }
 }

 export default connect(mapStateValue)(Home);

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
 })