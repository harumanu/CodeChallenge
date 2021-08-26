import React from 'react';
import { View } from 'react-native';
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
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 6,
                }}
            >
                <CCText>
                    Map placeholder
                </CCText>
            </View>
        </View>
    )

}

export default Map;