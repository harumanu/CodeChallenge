import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
} from 'react-native';
import CCText from '@/Components/CCText';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../Theme/Colors';

const Badge = ({
    right,
    top,
    color,
    content,
    icon,
    index,
}) => {
    const WIDTH = 50;
    return (
        <Animatable.View
            animation="zoomIn"
            easing="ease-out-back"
            delay={300 + (100 * index)}
            duration={400}
            style={{
                width: WIDTH,
                height: 100,
                overflow: 'hidden',
                paddingTop: 20,
                position: 'absolute',
                right,
                top,
            }}
        >
            <View
                style={{
                    backgroundColor: color,
                    width: WIDTH + 10,
                    height: 20,
                    transform: [{
                        rotate: '-5deg',
                    }]
                }}
            >

            </View>
            <View
                style={{
                    backgroundColor: color,
                    width: WIDTH,
                    height: 50,
                    marginTop: -5,
                    marginBottom: -10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                }}
            >
                <Icon
                    name={icon}
                    size={24}
                    color={Colors.white}
                    style={{
                        marginBottom: 5,
                    }}
                />
                <CCText
                    bold
                >
                    {content}
                </CCText>
            </View>
            <View
                style={{
                    backgroundColor: color,
                    width: WIDTH + 10,
                    height: 20,
                    transform: [{
                        rotate: '-5deg',
                    }]
                }}
            >

            </View>
        </Animatable.View>
    );
};

Badge.propTypes = {
    right: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired   
};

export default Badge;