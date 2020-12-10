import React from 'react';
import {
    View,
} from 'react-native';

interface Line {
    height: number;
    color: string;
    marginLeftAndRight: number;
}

const LineComponent: React.FC<Line> = ({
    height = 0.5,
    color = 'gray',
    marginLeftAndRight = 8,
}) => {
    return (
        <View 
            style={{
                backgroundColor: color, 
                height: height,
                marginLeft: marginLeftAndRight,
                marginRight: marginLeftAndRight,
            }}>
        </View>
    );
}

export default LineComponent;