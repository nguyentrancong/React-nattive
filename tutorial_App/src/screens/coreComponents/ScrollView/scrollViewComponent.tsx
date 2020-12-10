import React from 'react';
import { 
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
 } from 'react-native';
 import Constants from 'expo-constants';
import LineComponent from '../commons/line';
import { Courses } from '../flatList/index';
import CourseItemComponent from '../flatList/courseItemComponent';


 const ScrollViewComponent = () => {
     return(
         <SafeAreaView style={styles.container}>
             <Text>ScrollView Component</Text>
             <LineComponent marginLeftAndRight={0}/>
             <ScrollView style={styles.scrollView}>
                 { Courses.map( item => {
                     return (
                        <CourseItemComponent key={item.id} id={item.id} title={item.title} desc={item.desc} images={item.images}/>
                     );
                 })}
                
             </ScrollView>
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }, 
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
        padding: 16,
        
      },
      text: {
        fontSize: 42,
      },
 });

 export default ScrollViewComponent;