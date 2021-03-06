import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import { State } from 'react-native-gesture-handler'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
    jobs: [
        {
            "address": {
                "street": "Country Road 42",
                "postal_code": "12345",
                "city": "Stockholm"
            },
            "available_shifts": [
                {
                    "date": "2021-10-11",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-12",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-13",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-14",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-15",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-16",
                    "hourly_pay_in_eur": "44",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-17",
                    "hourly_pay_in_eur": "44",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                }
            ],
            "average_rating": "4",
            "background_image": "https://i.picsum.photos/id/288/3888/2592.jpg?hmac=pTLH4CMKuWqYGdf3jG4X_QBlbsiBuH7KOOnQsiijPks",
            "campaigns": ["Weekend shifts", "Best paid shifts"],
            "department": "Psychiatry",
            "distance_in_km": "5",
            "employer_description": "We are the oldest hospital of the country – but what makes us even prouder, is that we are also among the most modern health care facilities the world has to offer!",
            "employer_name": "Hospital, Inc.",
            "logo": "https://loremicon.com/ngon/128/128/25965299/png",
            "qualifications": "At least two years of relevant experience.",
            "tasks": "Care – and save lives."
        },
        {
            "address": {
                "street": "Main square 2",
                "postal_code": "23456",
                "city": "Bullerby"
            },
            "available_shifts": [
                {
                    "date": "2021-10-11",
                    "hourly_pay_in_eur": "38",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-12",
                    "hourly_pay_in_eur": "60",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-13",
                    "hourly_pay_in_eur": "60",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-14",
                    "hourly_pay_in_eur": "60",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-15",
                    "hourly_pay_in_eur": "60",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-16",
                    "hourly_pay_in_eur": "70",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                },
                {
                    "date": "2021-10-17",
                    "hourly_pay_in_eur": "70",
                    "number_of_hours": "10",
                    "time": "21:00–07:00",
                    "type": "night"
                }
            ],
            "average_rating": "3",
            "background_image": "https://i.picsum.photos/id/1078/3000/2000.jpg?hmac=kI-4ittyvRAG5-z9urHPPBQ4kDNJ4ItiEw6-NagOy10",
            "campaigns": ["Weekend shifts", "Urgent vacancies"],
            "department": "Pediatrics",
            "distance_in_km": "12",
            "employer_description": "Pippi Longstocking Care is a renowned children's hospital. Our motto: Let every patient leave with a smile.",
            "employer_name": "Pippi Longstocking Care",
            "logo": "https://loremicon.com/ngon/128/128/83790323/png",
            "qualifications": "A big heart for children and a large repertoire of nursing rhymes.",
            "tasks": "Hold hands, banish nightmares, sing lullabies."
        },
        {
            "address": {
                "street": "Street of Gold 77",
                "postal_code": "34567",
                "city": "Stockholm"
            },
            "available_shifts": [
                {
                    "date": "2021-10-04",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-05",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-11",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-12",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-18",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-19",
                    "hourly_pay_in_eur": "65",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                }
            ],
            "average_rating": "2",
            "background_image": "https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE",
            "campaigns": ["Best paid shifts"],
            "department": "Elderly Care",
            "distance_in_km": "22",
            "employer_description": "We provide exquisit elderly care at exquisit prices.",
            "employer_name": "Elderberry Elderly Care",
            "logo": "https://loremicon.com/ngon/128/128/62800372/png",
            "qualifications": "Elite education at an elite university is the absolute minimum requirement for this position.",
            "tasks": "Treat our residents with the utmost care and respect. Also, dress nicely."
        },
        {
            "address": {
                "street": "Rose Garden 9",
                "postal_code": "45678",
                "city": "Stockholm"
            },
            "available_shifts": [
                {
                    "date": "2021-10-07",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-08",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-09",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-10",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-21",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-22",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-23",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-24",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                }
            ],
            "average_rating": "5",
            "background_image": "https://i.picsum.photos/id/396/6000/4000.jpg?hmac=9QwWqLrCtrlxmtZCWQoUwUdDtIyIfpevsdF-Ioput4E",
            "campaigns": ["Weekend shifts", "Urgent Vacancies"],
            "department": "Elderly Care",
            "distance_in_km": "1",
            "employer_description": "We're the parking spot for elderly that nobody cares about anymore. Well, we do.",
            "employer_name": "The Park, Inc.",
            "logo": "https://loremicon.com/ngon/128/128/86407847/png",
            "qualifications": "Do you know how to use a spoon, make a bed and wipe a butt? You're in!",
            "tasks": "Keep 'em occupied – and, preferably, quiet."
        },
        {
            "address": {
                "street": "Sun Street 99",
                "postal_code": "56789",
                "city": "Stockholm"
            },
            "available_shifts": [
                {
                    "date": "2021-10-07",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-08",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-09",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-10",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-21",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-22",
                    "hourly_pay_in_eur": "36",
                    "number_of_hours": "9",
                    "time": "07:00–16:00",
                    "type": "day"
                },
                {
                    "date": "2021-10-23",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                },
                {
                    "date": "2021-10-24",
                    "hourly_pay_in_eur": "42",
                    "number_of_hours": "8",
                    "time": "13:30–21:30",
                    "type": "evening"
                }
            ],
            "average_rating": "4",
            "background_image": "https://i.picsum.photos/id/378/5184/3456.jpg?hmac=E6Sdrxcw9DS48dnqIfGkJ4QeEu9YhCzHVS3ugTknNdM",
            "campaigns": ["Weekend shifts", "Urgent Vacancies", "Best paid shifts"],
            "department": "Pediatrics",
            "distance_in_km": "18",
            "employer_description": "We offer the best obstetric and pediatric care – for moms, dads and all their little ones.",
            "employer_name": "Sunshine Clinic",
            "logo": "https://loremicon.com/ngon/128/128/86619855/png",
            "qualifications": "Trained in birthing procedures, background in psychology is a bonus.",
            "tasks": "Prenatal and postpartum care, child delivery, infant vaccinations."
        }
    ]
}

export default buildSlice('jobs', [], sliceInitialState).reducer
