import React from 'react';
import { 
    View,
    SafeAreaView,
    StyleSheet,
    SectionList,
    Text,

 } from 'react-native';
import Constants from 'expo-constants';
import LineComponent from '../commons/line';

 const SectionListComponent = () => {
     return (
         <SafeAreaView style={styles.container}>
             <Text>SectionListComponent</Text>
             <LineComponent marginLeftAndRight/>
             <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item}/>}
                renderSectionHeader={({ section: { title } }) => (
                  <Text style={styles.header}>{title}</Text>
                )}
          
             />
         </SafeAreaView>
     );
 }

 const Item = ({title}) => {
     return(
         <View style={styles.item}>
             <Text>{title}</Text>
         </View>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
      },
      item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 24
      }
 });

 export default SectionListComponent;

 const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];