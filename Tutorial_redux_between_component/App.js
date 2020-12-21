// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import ControlComponent from './components/ControlComponent';
// import TextComponent from './components/TextComponent';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const defaultValue = { value: 1000 };

// const reducer = (state = defaultValue, action) => {
//     if (action.type === 'UP') return { value: state.value + 1};
//     if (action.type === 'DOWN') return { value: state.value - 1};
//     return state;
  
// }

// const store = createStore(reducer);

// const App = () => {
//   return(
//     <Provider store={store}>
//       <SafeAreaView>
//         <TextComponent/>
//         <ControlComponent/>
//       </SafeAreaView>
//     </Provider>
//   )
// }

// export default App;
