import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import {
    View, 
    ScrollView,
} from 'react-native';
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
            }}
            contentContainerStyle={{
                paddingTop: 50,
            }}
        >
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
                        <CCText
                            size="m"
                            bold
                            style={{
                                padding: 20,
                                paddingBottom: 0,
                            }}
                        >
                            {campaign.title}
                        </CCText>
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