import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';


const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{color: '#00bfa5', fontWeight: 600}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography  variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button sx={{backgroundColor: '#00bfa5'}} variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;