import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useState,useEffect } from "react";
import AddLocation from "./AddLocation";
import DeleteLocation from "./DeleteLocation";

export interface Location {
    locationName: string;
    temp: Number,
    humidity: Number
}

const AllLocations = () => {
    const [loading,setLoading]= useState(false);
    const[data,setData]= useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            // const response: SetStateAction<never[]>|any= await getAll();
            // setData(response);
            try {
                const {data: response} = await axios.get('http://localhost:8000/location/');
                setData(response);
              } catch (error) {
                // console.error(error.message);
                console.log(error)
              }
            setLoading(false);
        }
        fetchData();
     }, []);


    
    return(
        <>
        <AddLocation/>
            {loading && <div>loading</div>}
            {!loading&&(
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>Location</TableCell>
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
                        <TableCell><DeleteLocation currentLocation={row}></DeleteLocation></TableCell>
                        {/* <TableCell align="right">{row.calories}</TableCell> */}
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