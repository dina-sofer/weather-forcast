import React from 'react'
import SyncIcon from '@mui/icons-material/Sync';
import { IconButton } from '@mui/material';

import { getWeatherByName } from '../api/weatherForecast';
import { updateLocation } from '../api/location';

const Refresh = (props: any) => {

    const currentLocation = props.currentLocation;

    const handleOnUpdate = async () => {
        getWeatherByName(currentLocation.locationName)
        .then((data) => {
            currentLocation.temp = data.list[0].main.temp;
            currentLocation.humidity = data.list[0].main.humidity;
        })
        .then(() => {
            updateLocation(currentLocation._id, currentLocation);
        })
    }

    return(
        <>
            <IconButton aria-label="delete" size="large">
                    <SyncIcon onClick={handleOnUpdate}/>
            </IconButton>
        </>
    )
}

export default Refresh;