import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    FlatList,


 } from 'react-native';
import AddTodo from './addTodo';
import Header from './header';
import TodoItem from './todoItem';

 const Main = () => {
     const [todos, setTodos] = useState([
         {text:'buy coffee', key: '1'},
         {text:'create app', key: '2'},
         {text:'play onn the switch', key: '3'}
     ]);

     const pressHandler = (key) => {
         setTodos((prevTodos) => {
             return prevTodos.filter(todo => todo.key != key);
         });
     }

     const submitHandler = (text) => {
         setTodos((prevTodos) => {
            return [
                {text: text, key: Math.random().toString()},
                ...prevTodos
            ]
         })
     }

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={ ({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </View>
            </View>
        </View>
    );
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1, 
         backgroundColor: '#fff',
     },
     content: {
        padding: 40,
     },
     list: {
        marginTop: 20,
     }
 });

 export default Main;