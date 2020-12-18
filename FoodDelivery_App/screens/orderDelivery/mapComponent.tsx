import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
 } from 'react-native';
 import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
 import { COLORS, icons, images, SIZES, FONTS, GOOGLE_API_KEY } from '../../constants';
 import MapViewDirections from 'react-native-maps-directions';

const DestinationMarker = ({ toLocation }) => {
    return (
        <Marker coordinate={toLocation}>
            <View
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.white,
                }}
            >
                <View
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <Image source={icons.pin} 
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </View>
            </View>
        </Marker>
    )
}

const CarIcon = ({fromLocation}) => {
    return (
        <Marker coordinate={fromLocation}
            anchor={{x: 0.5, y: 0.5}}
            flat={true}
        >
            <Image
                source={icons.car}
                style={{
                    width: 40,
                    height: 40,
                }}
            />
        </Marker>
    )
}

 const MapComponent = ({ region, toLocation, fromLocation, mapView, isReady, setDuration, calculateAngle, setAngle, setFromLocation, setIsReady }) => {
    return (
        <View style={{flex: 1}}>
            <MapView style={{flex: 1}}
                // ref={mapView}
                // provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                   <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        strokeColor={COLORS.primary}
                        optimizeWaypoints={true}
                        onReady={result => {
                            setDuration(result.duration)

                            if (!isReady) {
                                // Fit route into maps
                                mapView.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (SIZES.width / 20),
                                        bottom: (SIZES.height / 4),
                                        left: (SIZES.width / 20),
                                        top: (SIZES.height / 8)
                                    }
                                })

                                // Reposition the car
                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"]
                                }

                                if (result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)
                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        }}
                    />
                <DestinationMarker toLocation={toLocation} />
                <CarIcon fromLocation={fromLocation}/>
            </MapView>
        </View>
    )
 }

 const styles = StyleSheet.create({

 })

 export default MapComponent;