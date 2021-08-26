import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Logo from '@/Components/Logo';

const JobItem = ({ 
    job,
    navigation,
}) => {
    const {
        employer_name: employerName,
        department,
        logo,
        background_image: backgroundImage,
    } = job;
    return (
        <View
            style={{
                backgroundColor: '#121314',
                width:  Dimensions.get('window').width * 0.9,
            }}
        >
            <TouchableOpacity
                style={{
                    marginVertical: 20,
                    marginLeft: 20,
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: {
                        height: 5,
                        width: 0,
                    },
                    shadowRadius: 10,
                    shadowOpacity: 0.1,

                    borderRadius: 6,
                    overflow: 'hidden',
                }}
                onPress={() => {
                    navigation.navigate('Job', { job: job });
                }}
            >
                <ImageBackground
                    source={{uri: backgroundImage}}
                    style={{
                        height: 240,
                        padding: 20,
                        justifyContent: 'flex-end',
                    }}
                >
                    <Logo
                        size={50}
                        source={logo}
                        style={{
                            marginBottom: 10,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: '800',
                            color: '#FFF',
                        }}
                    >
                        {employerName}
                    </Text>
                    <Text
                        style={{
                            color: '#FFF',
                            fontWeight: '600'
                        }}
                    >
                        {department}
                    </Text>
                </ImageBackground>
                
            </TouchableOpacity>
            
        </View>
    );

};

export default JobItem;