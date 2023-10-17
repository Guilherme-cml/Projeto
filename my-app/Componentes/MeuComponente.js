import React from 'react';
import { Text } from 'react-native';

export default function MinMax(props){
    const {min,max} = props;
    const num_aleatorio =  Math.floor(Math.random() * (max - min + 1)) + min;
    console.warn(props);
 
    
    return (
        <Text> Numero aleatório entre {min} e {max} é: {num_aleatorio} </Text>
    )
}
