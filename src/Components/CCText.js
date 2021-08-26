import React from 'react';
import {
    Text,
} from 'react-native';

const CCText = ({
    size = 's',
    color = '#FFF',
    fontWeight = '400',
    style = {},
    children,
}) => {
    const fontSize = (() => {
        switch (size) {
            case 's':
                return 14;
            case 'm':
                return 24;
            case 'l':
                return 28;
            case 'xl':
                return 36;
            default:
                return 18;
        }
    })();
    return (
        <Text
            style={{
                color,
                fontWeight,
                fontSize,
                ...style,
            }}
        >
            {children}
        </Text>
    )
}

export default CCText;