import React from 'react';
import { useSelector } from 'react-redux'
import {
    View, 
    ScrollView,
    Text,
} from 'react-native';
import { getCampaigns } from '@/Store/Jobs';
import JobItem from '@/Components/JobItem'
import CCText from '../../Components/CCText';
const Jobs = ({ navigation }) => {
    
    const jobs = useSelector(state => state.jobs.jobs);
    console.log('JOBS', jobs);

    const campaigns = useSelector(getCampaigns);
    
    return (
        <ScrollView
            style={{
                backgroundColor: "#121314"
            }}
        >
            {campaigns.map((campaign) => {
                return (
                    <View>
                        <CCText
                            size="l"
                            fontWeight="800"
                            style={{
                                padding: 20,
                                paddingBottom: 0,
                            }}
                        >
                            {campaign.title}
                        </CCText>
                        <ScrollView
                            horizontal
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

export default Jobs;