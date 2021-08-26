import React from 'react';
import PropTypes from 'prop-types';
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
};

Logo.propTypes = {
    size: PropTypes.number,
    source: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default Logo;