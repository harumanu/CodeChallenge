import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Theme/Colors';
import CCText from './CCText';

const Map = () => {
    // No time to implement a full map solution now, especially as we
    // don't have any coordinates to input. Going with a placeholder
    return (
        <View
            style={{
                backgroundColor: '#333',
                alignItems: 'center',
                justifyContent: 'center',
                height: 200,
                marginVertical: 20,
            }}
        >
            <View
                style={{
                    backgroundColor: '#111',
                    padding: 20,
                    borderRadius: 6,
                    alignItems: 'center',
                }}
            >
                <Icon
                    name="map"
                    color={Colors.white}
                    size={48}
                />
                <CCText
                    fontWeight="600"
                >
                    Map placeholder
                </CCText>
            </View>
        </View>
    )

};

export default Map;