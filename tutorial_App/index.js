/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

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
import coreComponent from './src/screens/coreComponents/virtualizedList/virtualizedList';

AppRegistry.registerComponent('tutorial_App', () => coreComponent);