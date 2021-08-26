import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
} from 'react-native';
import { Colors } from '../Theme/Colors';

const CCText = ({
    size = 's',
    color = Colors.white,
    fontWeight = '400',
    bold = false,
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
                fontWeight : bold ? '800' : fontWeight,
                fontSize,
                ...style,
            }}
        >
            {children}
        </Text>
    )
};

CCText.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    bold: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default CCText;