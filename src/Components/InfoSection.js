import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import CCText from '@/Components/CCText';
import { Colors } from '../Theme/Colors';

const InfoSection = ({ 
    title,
    children,
    content,
}) => {
    return (
        <View
            style={{
                padding: 20,
                margin: 15,
                marginBottom: 0,
                backgroundColor: Colors.lightBackground,
                borderRadius: 6,
            }}
        >
            <CCText
                size="l"
                bold
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
};

InfoSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    content: PropTypes.string,
};

export default InfoSection;