import React, { useState, useEffect } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Animated,
    Alert,
 } from 'react-native';
 import { isIphoneX } from 'react-native-iphone-x-helper';
 import { COLORS, icons, images, SIZES, FONTS } from '../constants';

import FoodInfo from './restaurant/foodInfo';
import HeaderRestaurant from './restaurant/headerRestaurant';
import OrderComponent from './restaurant/orderRestaurant';


 const Restaurant = ({ route, navigation }) => {

    const scrollX = new Animated.Value(0)
    const [restaurant, setRestaurant] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [orderItems, setOrderItems] = useState([])
    function editOrderHandle(action, menuId, price) {
        
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)
        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(item => item.menuId == menuId)
        if(orderItem.length > 0) {
            return orderItem[0].qty
        }
        return 0
    }

    const getBasketItemCount = () => {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    const sumOrder = () => {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)
        return total.toFixed(2)
    }

    useEffect(() => {
        let {item, currentLocation} = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })

     return(
         <SafeAreaView style={styles.container}>
             <HeaderRestaurant restaurant={restaurant}/>
             <FoodInfo restaurant={restaurant} scrollX={scrollX} editOrderHandle={editOrderHandle} getOrderQty={getOrderQty} />
             <OrderComponent scrollX={scrollX} restaurant={restaurant} navigation={navigation} currentLocation={currentLocation} sumOrder={sumOrder} getBasketItemCount={getBasketItemCount} />
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
 })

 export default Restaurant;