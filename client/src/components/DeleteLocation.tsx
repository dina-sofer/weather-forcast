import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteLocation } from '../api/location'

const DeleteLocation = (props: any) => {

    const handleDeleteLocation = () => {
        const id = props.currentLocation._id;
        deleteLocation(id);
    }

    return (
        <>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon onClick={handleDeleteLocation} />
            </IconButton>
        </>
    )
}

export default DeleteLocation;