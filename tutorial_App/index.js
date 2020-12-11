/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// import coreComponent from './src/screens/coreComponents/flatList/flatList';
// import coreComponent from './src/screens/coreComponents/activityIndicator/activityIndicator';
// import coreComponent from './src/screens/coreComponents/button/buttonComponent';
// import coreComponent from './src/screens/coreComponents/image/imageComponent';
// import coreComponent from './src/screens/coreComponents/imageBackground/imageBacgroundComponent';
// import coreComponent from './src/screens/coreComponents/keyboardAvoidingView/keyboardAvoidingView';
// import coreComponent from './src/screens/coreComponents/Modal/modalComponent';
// import coreComponent from './src/screens/coreComponents/pressable/pressableComponent';
// import coreComponent from './src/screens/coreComponents/refreshControl/refreshControlComponent';
// import coreComponent from './src/screens/coreComponents/ScrollView/scrollViewComponent';
// import coreComponent from './src/screens/coreComponents/sectionList/sectionListComponent';
// import coreComponent from './src/screens/coreComponents/statusBar/statusBarComponent';
// import coreComponent from './src/screens/coreComponents/switch/switchComponent';
// import coreComponent from './src/screens/coreComponents/text/textComponent';
// import coreComponent from './src/screens/coreComponents/textInput/textInputComponent';
// import coreComponent from './src/screens/coreComponents/touchableHighlight/touchableHighlightComponent';
// import coreComponent from './src/screens/coreComponents/touchableOpacity/touchableOpacityComponent';
// import coreComponent from './src/screens/coreComponents/touchableWithoutFeedback/touchableWithoutFeedbackComponent';
// import coreComponent from './src/screens/coreComponents/virtualizedList/virtualizedList';

// AppRegistry.registerComponent('tutorial_App', () => coreComponent);

// react-native-navigation

const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');

// need to import view in here
import HomeScreen from './src/screens/reactNativeNavigation/homeScreen';
import SettingsScreen from './src/screens/reactNativeNavigation/settingScreen';
import CartScreen from './src/screens/reactNativeNavigation/cartScreen';
import AccountScreen from './src/screens/reactNativeNavigation/accountScreen';
import CategoryScreen from './src/screens/reactNativeNavigation/categoryScreen';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title='Login'
        color='#710ce3'
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

Navigation.registerComponent('Login', () => LoginScreen);

const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
};

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [{
              component: {
                name: 'Home'
              }
            }]
          }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'Category'
            }
          }]
        }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'Cart'
            }
          }]
        }
      },
      {
        stack: {
          children: [{
            component: {
              name: 'Account'
            }
          }]
        }
      },
    ]
    }
  }
};

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

// set all navigation this the same
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});