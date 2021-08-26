import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import CCText from './CCText';

const Address = ({ address }) => {
    const {
        street,
        postal_code: postalCode,
        city,
    } = address;
    return (
        <View>
            <CCText>
                {street}
            </CCText>
            <CCText>
                {postalCode} {city}
            </CCText>
        </View>
    );
};

Address.propTypes = {
    address: PropTypes.shape({
        street: PropTypes.string,
        postal_code: PropTypes.string,
        city: PropTypes.string
    }).isRequired,
};

export default Address;