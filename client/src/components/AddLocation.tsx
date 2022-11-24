import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getByName } from '../api/weatherForecast';

import { createLocation } from '../api/location'

export interface Location {
    locationName: string;
    temp: Number,
    humidity: Number
}

const AddLocation = (props:any) => {

    const [open, setOpen] = useState(false);
    const [newLocation, setNewLocation] = useState('');

    const openDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOnAdd = async () => {
        setOpen(false);
        const location: Location = {
            locationName: newLocation,
            temp: 0,
            humidity: 0
        };
        

        getByName(location.locationName)
        .then((data) => {
            location.temp = data.list[0].main.temp;
            location.humidity = data.list[0].main.humidity;
        })
        .then(() => {
            createLocation(location);;
            setNewLocation('');
        })
        
    }

    return(
        <>
            <Button variant="outlined" onClick={openDialog}>
                + ADD LOCATION
            </Button>

            <Dialog
                open = {open}
                onClose = {handleClose}
                fullWidth = {true}
            >
                <DialogTitle>Add a Location</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Location Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        fullWidth
                    >Cancel
                    </Button>
                    <Button
                        onClick={ handleOnAdd }
                        fullWidth
                    >OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddLocation;