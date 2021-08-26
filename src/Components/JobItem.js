import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '@/Components/Logo';
import CCText from './CCText';
import Tag from './Tag';
import { Colors } from '../Theme/Colors';
import { getHighestPay } from '../Selectors/Jobs';

const JobItem = ({ 
    job,
    navigation,
}) => {
    const {
        employer_name: employerName,
        department,
        average_rating: rating,
        available_shifts: shifts,
        distance_in_km: distance,
        logo,
        background_image: backgroundImage,
    } = job;

    const highestPay = getHighestPay(shifts);

    return (
        <View
            style={{
                backgroundColor: Colors.background,
                width:  Dimensions.get('window').width * 0.9,
            }}
        >
            <TouchableOpacity
                style={{
                    marginVertical: 20,
                    marginLeft: 20,
                    backgroundColor: Colors.white,
                    shadowColor: Colors.black,
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
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: Colors.brand1,
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Icon
                            size={24}
                            color={Colors.white}
                            name="chevron-forward"
                        />
                    </View>
                    <Logo
                        size={50}
                        source={logo}
                        style={{
                            marginBottom: 10,
                        }}
                    />
                    <CCText
                        size="m"
                        bold
                    >
                        {employerName}
                    </CCText>
                    <CCText
                        size="s"
                        fontWeight="600"
                    >
                        {department}
                    </CCText>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                        }}
                    >
                        <Tag
                            title={`${highestPay}/h`}
                            color={Colors.brand4}
                            icon="logo-euro"
                        />
                        <Tag
                            title={`${distance}km`}
                            color={Colors.brand3}
                            icon="home"
                        />
                        <Tag
                            title={shifts.length}
                            color={Colors.brand2}
                            icon="calendar"
                        />
                        <Tag
                            title={rating}
                            color={Colors.brand1}
                            icon="star"
                        />
                        
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

JobItem.propTypes = ({
    job: PropTypes.object.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
});

export default JobItem;