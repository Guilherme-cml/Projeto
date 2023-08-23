import React from 'react';
import { Text } from 'react-native';

export default function MinMax(props){
    const {min,max} = props;

    const maxValue = Math.max(parseInt(min), parseInt(max));
    const minValue = Math.min(parseInt(max), parseInt(min));
    
    return (
        <Text> O valor {maxValue} é maior que {minValue} </Text>
    )
}
