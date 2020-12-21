import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,

 } from 'react-native'

 import { createStore } from 'redux';
 import { Provider } from 'react-redux';

 import { reducer } from './redux/reducer';
import Home from './components/Home';

 const store = createStore(reducer);

 const Main = () => {
     return (
        <Provider store={store}>
            <Home/>
        </Provider>
     )
 }

 export default Main;