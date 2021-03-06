import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ImageBackground,
    Animated,
} from 'react-native';
import CCText from './CCText';
import Logo from './Logo';

const JobTop = ({ 
    employerName,
    department,
    backgroundImage,
    logo,
    height,
    scrollValue,
}) => {
    const marginTop = scrollValue.interpolate({
        inputRange: [0, height],
        outputRange: [0,  (height / 3) * -1],
        //extrapolate: 'clamp',
    });
    const opacity = scrollValue.interpolate({
        inputRange: [0, height],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })
    return (
        <Animated.View
            style={{
                height,
                marginTop,
                opacity,
            }}
        >
            <ImageBackground
                source={{uri: backgroundImage}}
                style={{
                    height,
                    padding: 30,
                    paddingBottom: 70,
                    justifyContent: 'flex-end',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.75)'
                    }}
                />
                <Logo
                    size={60}
                    source={logo}
                    style={{
                        marginBottom: 10,
                    }}
                />
                <CCText
                    size="l"
                    bold
                >
                    {employerName}
                </CCText>
                <CCText
                    size="s"
                    bold
                >
                    {department}
                </CCText>
            </ImageBackground>
        </Animated.View>
    )
};

JobTop.propTypes = {
    employerName: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    scrollValue: PropTypes.object.isRequired,
};

export default JobTop;