import React from 'react';
import { 
    View,
    Text,
    Dimensions,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
 } from 'react-native';
import QuickAccessItemComponent from './quickAccessItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const QuickAccessComponent = ({selectHandle, data}) => {
     return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            {/* {data.map((item, key) => {
                return (
                    <Text>sdadf</Text>
                    // <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
                );
            })} */}
            
                 <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
                 <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
                 <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
                 <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
                 <QuickAccessItemComponent name='text 1 dsssss sddd' image='http://tutofox.com/foodapp//banner/banner-3.png'/>
            </View>
        </ScrollView>
         
     );
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         height: 120,
         left: 16,
         right: 16,
         flexDirection: 'row',
         justifyContent: 'space-evenly',
         alignItems: 'center',
     },
     scroll: {
        flex: 1,
        flexDirection: 'row',
     },
     quickAccess: {
         marginRight: 16,
     }
 });

 export default QuickAccessComponent;