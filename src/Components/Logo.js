import React from 'react';
import {
    Image,
} from 'react-native';

const Logo = ({ 
    size = 60, 
    source, 
    style = {},
}) => {
    return (
        <Image
            source={{uri: source}}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                overflow: 'hidden',
                ...style,
            }}
        />
    );
}

export default Logo;