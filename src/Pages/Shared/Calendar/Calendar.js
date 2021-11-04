import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = ({date, setDate}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                date={date}
                onChange={(newdate) => {
                setDate(newdate);
                }}
            />
        </LocalizationProvider>
    );
};

export default Calendar;