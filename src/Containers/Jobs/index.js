import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import {
    View, 
    ScrollView,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getCampaigns } from '@/Selectors/Jobs';
import JobItem from '@/Components/JobItem'
import CCText from '../../Components/CCText';
import { Colors } from '../../Theme/Colors';

const Jobs = ({ navigation }) => {
    
    const campaigns = useSelector(getCampaigns);
    
    return (
        
        <ScrollView
            style={{
                backgroundColor: Colors.background,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            contentContainerStyle={{
                paddingTop: 50,
            }}
        >
            <Image
                source={require('../../Assets/background.jpeg')}
                style={{
                    opacity: 0.7,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 400,
                }}
            />
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', Colors.background]}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 400,
                }}
            />
            <View
                style={{
                    marginHorizontal: 20,
                    paddingBottom: 10,
                    marginBottom: 20,
                    borderBottomColor: Colors.white,
                    borderBottomWidth: 6,
                    width: 198
                }}
            >
                <CCText
                    size="xl"
                    bold
                >
                    Campaigns
                </CCText>
            </View>
            {campaigns.map((campaign) => {
                return (
                    <View
                        key={campaign.title}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 20,
                                paddingBottom: 0,
                            }}
                        >
                            <CCText
                                size="m"
                                bold
                            >
                                {campaign.title}
                            </CCText>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 16,
                                    backgroundColor: Colors.brand4,
                                    marginRight: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <CCText
                                    size="s"
                                    bold
                                    color={Colors.white}
                                >
                                    {campaign.jobs.length}
                                </CCText>
                            </View>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingRight: 20,
                            }}
                        >
                            {campaign.jobs.map(job => (
                                <JobItem
                                    job={job}
                                    key={job.address.street}
                                    navigation={navigation}
                                />
                            ))}
                        </ScrollView>
                    </View>
                )
            })}
        </ScrollView>
    );

};

Jobs.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Jobs;