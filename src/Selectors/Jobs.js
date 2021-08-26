import { createSelector } from '@reduxjs/toolkit'
import {
    chain,
} from 'lodash';

export const getJobs = state => state.jobs.jobs;

export const getCampaigns = createSelector(
    getJobs, (jobs) => {
        /* 
        * Since we don't have a predefined list of campaigns to work with, 
        * we reduce the campaigns from the jobs themselves and then map
        * to a new list. This will keep the UI code clean and we leave
        * the data handling open to future improvements.
        * 
        * Needed to do some weird string mapping here because the campaign
        * titles were inconsistent in the data set
        */
        const campaigns = chain(jobs)
            .reduce((arr, j) => [...arr, ...j.campaigns], [])
            .uniqBy(title => title.toLowerCase())
            .map(campaignName => ({
                title: campaignName,
                jobs: jobs.filter(j => j.campaigns.map(t => t.toLowerCase()).includes(campaignName.toLowerCase()))
            }))
            .value();
        
        return campaigns;
    });

export const getHighestPay = (shifts) => {
    return chain(shifts)
        .map(s => s.hourly_pay_in_eur)
        .sort()
        .last()
        .value();
}   

export const getPayByShiftType = (shifts) => {
    return chain(shifts)
        .groupBy('time')
        .map((days, time) => {
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
}