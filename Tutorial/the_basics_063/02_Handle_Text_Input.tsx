import React, { useState } from 'react';
import {View, Text, TextInput } from 'react-native';

const PizzaTranslator = () => {
    const [text, setText] = useState('')
    return(
        <View
            style={{paddingTop:40, margin: 16}}
        >
            <TextInput
                style={{
                    height: 40,

                }}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text
                style={{padding: 10, fontSize: 42}}
            >{text.split(' ').map((item) => item && '🍕')}</Text>
        </View>
    );
}

export default PizzaTranslator;