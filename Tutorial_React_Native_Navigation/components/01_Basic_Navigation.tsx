// const { Navigation } = require('react-native-navigation');
// const React = require('react');
// const { View, Text, StyleSheet, Button } = require('react-native');

// const styles = StyleSheet.create({
//     root: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'whitesmoke'
//     }
// });

// const HomeScreen = (props) => {
//     return(
//         <View style={styles.root}>
//             <Text>Hello React Native Navigation 👋</Text>
//             <Button
//                 title='Push Setting Screen'
//                 color='#710ce3'
//                 onPress={() => Navigation.push(props.componentId, {
//                     component: {
//                         name: 'Settings'
//                     }
//                 })}
//             ></Button>
//       </View>
//     );
// }
// Navigation.registerComponent('Home', () => HomeScreen);

// HomeScreen.options = {
//     topBar: {
//       title: {
//         text: 'Home',
//       }
//     }
// }

// const SettingScreen = () => {
//     return(
//         <View style={styles.root}>
//             <Text>Setting Screen</Text>
//         </View>
//     );
// }
// Navigation.registerComponent('Settings', () => SettingScreen);

// // export default HomeScreen;

// Navigation.setDefaultOptions({
//     statusBar: {
//       backgroundColor: '#4d089a'
//     },
//     topBar: {
//       title: {
//         color: 'white'
//       },
//       backButton: {
//         color: 'white'
//       },
//       background: {
//         color: '#4d089a'
//       }
//     }
//   });