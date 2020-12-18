import React, { useState, useEffect } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Alert,
 } from 'react-native';
import MapComponent from './orderDelivery/mapComponent';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS, icons, images, SIZES, FONTS, GOOGLE_API_KEY } from '../constants';


 const OrderDelivery = ({ route, navigation }) => { 

    const mapView = React.useRef()

    const [restaurant, setRestaurant] = useState(null)
    const [streetName, setStreetName] = useState("")
    const [fromLocation, setFromLocation] = useState(null)
    const [toLocation, setToLocation] = useState(null)
    const [region, setRegion] = useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    function zoomIn() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    useEffect(() => {
        let { restaurant, currentLocation } = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = restaurant.location
        let street = currentLocation.streetName

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }
        // Alert.alert(`${mapRegion.latitudeDelta}`)
        setRestaurant(restaurant)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)

    }, [])

     return(
         <View style={{flex: 1}}>
             <MapComponent 
                region={region} toLocation={toLocation} fromLocation={fromLocation} 
                mapView={mapView} isReady={isReady} setDuration={setDuration} 
                calculateAngle={calculateAngle} setAngle={setAngle} 
                setFromLocation={setFromLocation} setIsReady={setIsReady} 
            />
         </View>
     );
 }

 const styles = StyleSheet.create({

 });

 export default OrderDelivery;