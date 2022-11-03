import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import locations from '../locationsArr';
import AllLocations from "./AllLocations";

const AddLocation = () => {

    const [open, setOpen] = useState(false);
    const [newLocation, setNewLocation] = useState("");

    const openDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const addNewLocation = () => {
        setOpen(false);
        const loc = {name: newLocation}
        locations.push(loc);
         console.log(locations[locations.length-1]);
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
                        onClick={addNewLocation}
                        fullWidth
                    >OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddLocation;