import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        space: 10
    }
]

const AvailableAppointments = ({date}) => {

    return (
        <Container>
            <Typography variant="h5" sx={{color: '#00bfa5', mb:2, fontWeight: 500}}>Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments; 