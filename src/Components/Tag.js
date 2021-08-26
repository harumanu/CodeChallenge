import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CCText from './CCText';
import { Colors } from '../Theme/Colors';

const Tag = ({
    title,
    icon,
    color,
}) => {
    return (
        <View 
            style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 4,
                backgroundColor: color,
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 5,
            }}
        >
            <Icon
                name={icon}
                color={Colors.white}
                style={{
                    marginRight: 5,
                }}
            />
            <CCText>
                {title}
            </CCText>
        </View>
    );
};

Tag.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Tag;