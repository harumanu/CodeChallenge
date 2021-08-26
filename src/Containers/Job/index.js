import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    ScrollView,
    Animated,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import InfoSection from '@/Components/InfoSection';
import Address from '@/Components/Address';
import Map from '@/Components/Map';
import CCText from '@/Components/CCText';
import JobTop from '@/Components/JobTop';
import Badge from '@/Components/Badge';
import { Colors } from '../../Theme/Colors';
import { getHighestPay, getPayByShiftType } from '../../Selectors/Jobs';

const Job = ({ route, navigation }) => {
    
    const { job } = route.params;
    const [scrollValue, setScrollValue] = useState(new Animated.Value(0))
    const {
        employer_name: employerName,
        department,
        logo,
        background_image: backgroundImage,
        tasks,
        qualifications,
        employer_description: employerDescription,
        available_shifts: shifts,
        average_rating: rating,
        distance_in_km: distance,
        address,
    } = job;

    const highestPay = getHighestPay(shifts);
    const payByShiftType = getPayByShiftType(shifts);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Not implemented')
                    }}
                >
                    <View
                        style={{
                            backgroundColor: Colors.brand1,
                            paddingHorizontal: 12,
                            paddingVertical: 10,
                            borderRadius: 20,
                            marginTop: 4,
                            marginRight: 10,
                        }}
                    >
                        <CCText
                            fontWeight='600'
                        >
                            Show shifts
                        </CCText>
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
        
    
    const HEADER_HEIGHT = 320;

    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: Colors.background,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
        >
            <Animatable.View
                animation="zoomIn"
                duration={400}
            >
                <JobTop
                    height={HEADER_HEIGHT}
                    backgroundImage={backgroundImage}
                    employerName={employerName}
                    department={department}
                    logo={logo}
                    scrollValue={scrollValue}
                />
            </Animatable.View>
            <Animatable.View
                animation="fadeInUp"
                duration={400}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <ScrollView
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    contentContainerStyle={{
                        marginTop: HEADER_HEIGHT,
                        backgroundColor: Colors.background,
                        paddingBottom: HEADER_HEIGHT,
                        paddingTop: 50,
                    }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: {
                            contentOffset: {
                            y: scrollValue
                            },
                        }, 
                        }], 
                        {
                            useNativeDriver: false,
                        },
                    )}            >
                    <View
                        style={{
                            backgroundColor: Colors.background,
                            height: 100,
                            width: 2000,
                            position: 'absolute',
                            top: -80,
                            marginLeft: -250,
                            transform: [{
                                rotate: '-5deg',
                            }],
                            shadowColor: Colors.black,
                            shadowOffset: {
                                height: -4,
                                width: 0,
                            },
                            shadowRadius: 20,
                            shadowOpacity: 0.4,
                        }}
                    />
                    <View>
                        <Badge
                            right={20}
                            top={-120}
                            color={Colors.brand1}
                            content={rating}
                            icon="star"
                            index={4}
                        />
                        <Badge
                            right={80}
                            top={-115}
                            color={Colors.brand2}
                            content={shifts.length}
                            icon="calendar"
                            index={3}
                        />
                        <Badge
                            right={140}
                            top={-110}
                            color={Colors.brand3}
                            content={`${distance}km`}
                            icon="home"
                            index={2}
                        />
                        <Badge
                            right={200}
                            top={-105}
                            color={Colors.brand4}
                            content={`${highestPay}/h`}
                            icon="logo-euro"
                            index={1}
                        />
                    </View>
                    <InfoSection title="Tasks" content={tasks}/>
                    <InfoSection title="Qualifications" content={qualifications}/>
                    <InfoSection title="Salary & Working hours">
                        {payByShiftType.map((p) => {
                            return (
                                <View
                                    key={p.time}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <CCText>
                                        {p.time}
                                    </CCText>
                                    <CCText bold>
                                        {p.pay} EUR/Hour
                                    </CCText>
                                </View>
                            );
                        })}
                    </InfoSection>
                    <InfoSection title={`About ${employerName}`}>
                        <CCText>
                            {employerDescription}
                        </CCText>
                        <Map/>
                        <Address
                            address={address}
                        />
                    </InfoSection>
                </ScrollView>
            </Animatable.View>
        </View>
    );

};

Job.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            job: PropTypes.object,
        })
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Job;