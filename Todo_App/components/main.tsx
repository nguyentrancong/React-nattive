import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard

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
         if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevTodos
                ]
             })
         } else {
            //  Alert.alter('OOPS!', 'Todos must be over 3 chars long', [
            //      {text: 'Understood', onPress: () => console.log("Cancel Pressed")},
            //  ])
            Alert.alert('OOPS!','Todos must be over 3 chars long')
         }
     }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            }}
        >
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
        </TouchableWithoutFeedback>
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