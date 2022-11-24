import React, { useState,useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { getAllLocations } from '../api/location'

import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";
import Refresh from "./Refresh";

const AllLocations = () => {
    
    const [loading, setLoading] = useState(false);
    const[data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            getAllLocations()
            .then((res: any) => { setData(res) });
            setLoading(false);
        }
        fetchData();
     }, []);

    return(
        <>
            <AddLocation/>
            { loading && <div>loading</div> }
            {!loading && (
                <TableContainer component={Paper} style={{ padding:'70px', width: '90%' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Location</TableCell>
                                <TableCell>Temperature</TableCell>
                                <TableCell>Humidity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row: any) => (
                                <TableRow
                                    key={row.locationName}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.locationName}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.temp}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.humidity}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Refresh currentLocation={row}/>
                                        <DeleteLocation currentLocation={row}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    )
}

export default AllLocations;