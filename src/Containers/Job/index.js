import React, { useState } from 'react';
import {
    View, 
    ScrollView,
    Animated,
} from 'react-native';
import { chain } from 'lodash';
import InfoSection from '@/Components/InfoSection';
import Address from '@/Components/Address';
import Map from '@/Components/Map';
import CCText from '@/Components/CCText';
import JobTop from '@/Components/JobTop';
import Badges from '@/Components/Badges';

const Job = ({ route }) => {
    
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


    const pay = chain(shifts)
        .groupBy('time')
        .map((days, time) => {
            console.log('DAYS', days)
            const values = days.map(d => d.hourly_pay_in_eur).sort();
            const lowest = values[0];
            const highest = values[values.length - 1];
            const pay = lowest === highest ? lowest : `${lowest} - ${highest}`;
            return {
                time,
                pay,
            }
        })
        .value();
    
    const HEADER_HEIGHT = 320;

    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#121314',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
        >
            <JobTop
                height={HEADER_HEIGHT}
                backgroundImage={backgroundImage}
                employerName={employerName}
                department={department}
                logo={logo}
                scrollValue={scrollValue}
            />

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
                    backgroundColor: '#121314',
                    paddingBottom: HEADER_HEIGHT,
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
                        backgroundColor: '#121314',
                        height: 100,
                        width: 2000,
                        position: 'absolute',
                        top: -80,
                        marginLeft: -250,
                        transform: [{
                            rotate: '-5deg',
                        }],
                        shadowColor: "#000",
                        shadowOffset: {
                            height: -4,
                            width: 0,
                        },
                        shadowRadius: 20,
                        shadowOpacity: 0.4,
                    }}
                />
                <Badges/>
                <InfoSection title="Tasks" content={tasks}/>
                <InfoSection title="Qualifications" content={qualifications}/>
                <InfoSection title="Salary & Working hours">
                    {pay.map((p) => {
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <CCText>
                                    {p.time}
                                </CCText>
                                <CCText>
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
        </View>
    );

};

export default Job;