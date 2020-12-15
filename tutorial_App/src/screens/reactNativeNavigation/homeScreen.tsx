import {Navigation} from 'react-native-navigation';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Animated,
    Platform,
    SafeAreaView,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,
    FlatList,

} from 'react-native';

import { Badge, withBadge } from 'react-native-elements';

import TextInputSearch from './home/textInputSearchComponent';
import { Courses } from '../coreComponents/flatList/index';
import CourseItemComponent from "../coreComponents/flatList/courseItemComponent";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Home screen declaration
const HomeScreen = () => {

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 110;
  //Max Height of the Header
  const Header_Minimum_Height = 60;
  //Min Height of the Header

  const animateHeaderBackgroundColor =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: ['#4286F4', '#00BCD4'],
      extrapolate: 'clamp',
    });

  const animateHeaderHeight =
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [Header_Maximum_Height, Header_Minimum_Height],
      extrapolate: 'clamp',
    });

  const animateSearchWidth = 
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [(windowWidth - 32), (windowWidth - 130)],
      extrapolate: 'clamp',
    });

    const animateSearchMarginRight = 
    AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
      outputRange: [16, 114],
      extrapolate: 'clamp',
    });

    const btCart = () =>{
      // todo: in to cart screen
      Alert.alert("Action", "todo in to cart screen");
    }

    const btNotification = () => {
      // todo: in to notification screen
      Alert.alert("Action", "todo in to notification screen");
    }

    const btChangeLocal = () => {
      // todo: in to change local screen
      Alert.alert("Action", "todo in to change local screen");
    }

    const btSearchHandle = () => {
      // todo: in to change local screen
      Alert.alert("Action", "todo in to search screen");
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}>
            <View 
              style={{
                // backgroundColor: 'yellow',
                width: windowWidth,
                alignItems:'center',
                flexDirection: 'row',
                justifyContent:'space-between',
                // padding: 8,
              }}
            >
              <View>
                <TouchableOpacity onPress={btChangeLocal} style={{padding: 12, paddingLeft: 16}}>
                  <View style={{flexDirection: 'row'}}>
                    <Image style={{height: 15, width: 15, marginRight: 8, paddingBottom: 8}} source={require('../../images/location_ic.png')}/>
                    <Text style={{color: 'white'}}>Ho Chi Minh</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontSize: 30, color: 'white', fontWeight: '600', textAlign: 'center'}}>F99</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={btCart} style={{paddingTop: 10, paddingRight: 16}}>
                      <Image style={{height: 40, width: 40}} source={require('../../images/cart_ic.png')}/>
                      <Badge
                        status="error"
                        value="19"
                        containerStyle={{ position: 'absolute', top: 10, right: 5 }}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={btNotification} style={{paddingTop: 15, paddingRight: 16}}>
                      <Image style={{height: 30, width: 30}} source={require('../../images/notification_ic.png')}/>
                      <Badge
                        status="error"
                        value="19"
                        containerStyle={{ position: 'absolute', top: 10, right: 5 }}
                      />
                  </TouchableOpacity>
              </View>
            </View>
            <Animated.View style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 10,
              marginRight: animateSearchMarginRight,
              marginLeft: 16,
              width: animateSearchWidth,             
            }}>
              <TextInputSearch placeholder='Tìm kiếm F99' searchHandle={btSearchHandle}/>
            </Animated.View>
        </Animated.View>
        <FlatList
          data={Courses}
          renderItem={({item}) => {
              return (
                  <CourseItemComponent id={item.id} title={item.title} desc={item.desc} images={item.images} />
              );
          }}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: AnimatedHeaderValue }
              }
            }],
            { useNativeDriver: false }
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    padding: 20,
  },

  //
  contentHeader: {
    position: 'absolute',
    backgroundColor: 'red',
  }
});

HomeScreen.options = {
  topBar: {
    visible: false,
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home'
  }
};

Navigation.registerComponent('Home', () => HomeScreen);
