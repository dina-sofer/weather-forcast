import React, { useState,useEffect } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ThunderstormTwoTone } from "@mui/icons-material";

import { getAllLocations } from '../api/location'

import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";
import Refresh from "./Refresh";

const AllLocations = () => {
    
    const [loading, setLoading] = useState(false);
    const[locationsList, setLocationsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            getAllLocations()
            .then((res: any) => { setLocationsList(res) });
            setLoading(false);
        }
        fetchData();
     }, [locationsList]);

    return(
        <>
            { loading && <div> Loading... </div>}
            {!loading && (
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '70px'}}>
                    <AddLocation/>
                    {locationsList.map((value: any) => {          
                        return (
                            <ListItem
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={() => {}} dense>
                                    <ListItemIcon>
                                        <ThunderstormTwoTone color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={value.locationName} secondary={`${value.temp}°C  ${value.humidity}%`}/>
                                    <ListItemIcon>
                                        <Refresh currentLocation={value}/>
                                        <DeleteLocation currentLocation={value}/>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            )}
        </>
    )
}

export default AllLocations;