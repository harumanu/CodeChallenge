import React from 'react';
import { Children } from 'react';
import {
    View,
    Text,
} from 'react-native';
import CCText from '@/Components/CCText';
const InfoSection = ({ title, children, content }) => {
    return (
        <View
                style={{
                    padding: 20,
                    margin: 15,
                    marginBottom: 0,
                    backgroundColor: '#222',
                    borderRadius: 6,
                }}
            >
                <CCText
                    size="l"
                    fontWeight="800"
                >
                    {title}
                </CCText>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
                        marginVertical: 15,
                    }}
                />
                {content ? (
                    <CCText>
                        {content}
                    </CCText>) : children}
            </View>
    );
}

export default InfoSection;