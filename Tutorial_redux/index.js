/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

// Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './compnents/TaskManagerComponent';

let store = createStore(allReducers);

const Appx = () => {
  <Provider store={store}>
    <TaskManagerComponent />
  </Provider>;
};

AppRegistry.registerComponent('Tutorial_redux', () => Appx);
