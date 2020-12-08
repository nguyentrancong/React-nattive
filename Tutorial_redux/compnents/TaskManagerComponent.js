import { platform } from 'os';
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Platform,
} from 'react-native';

import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component {
    render() {
        return(
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 32 : 0 }}>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        );
    }
}