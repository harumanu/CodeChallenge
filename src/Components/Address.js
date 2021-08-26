import React from 'react';
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
}

export default Address;