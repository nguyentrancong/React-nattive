import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableOpacity,
    RefreshControl, TextInput
} from 'react-native';

export default class itemTaskModel = {
    name: String,
    iamge: String,
    id: Number,
};

export default class TaskItemComponent extends Component {
    constructor(props){
        super(props);
        this.itemTaskModel.name = props.taskName
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    //Call this action in Container
                }}
                    style={{
                        position: 'absolute', top: 0, bottom: 0,
                        left: 0, right: 0,
                    }}
                >
                </TouchableOpacity>
                <Text style={{ margin: 20, color: this.props.completed == true ? 'darkgreen' : 'black' }}>
                    {this.props.taskName}
                </Text>
            </View>);
    }
};

