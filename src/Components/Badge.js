import React from 'react';
import {
    View, 
} from 'react-native';
import CCText from '@/Components/CCText';

const Badge = ({
    right,
    top,
    color,
    content,
}) => {
    const WIDTH = 50;
    return (
        <View
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
                }}
            >
                <CCText
                    color="#121314"
                    fontWeight="800"
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
        </View>
    );
}

export default Badge;