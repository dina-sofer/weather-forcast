import axios from "axios";

import { LocationInterface } from '../interfaces/location'

export const createLocation = async (newLocation: LocationInterface) => {
    try {
        await axios.post('http://localhost:8000/location/', newLocation);
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllLocations = async () => {
    try {
        const res = await axios.get('http://localhost:8000/location/');
        return res.data;
    }
    catch(error) {
        console.log(error);
    }
}

export const deleteLocation = async (id: string) => {
    try {
        await axios.delete(`http://localhost:8000/location/${id}`);
        return `location ${id} deleted successfully`;
    }
    catch (error) {
        console.log('error - deleteSystem', error);
        return `location ${id} failed to deleted successfully`;
    }
}

export const updateLocation = async (id: string, location: LocationInterface) => {
    try {
        await axios.put(`http://localhost:8000/location/${id}`, location);
    }
    catch (error) {
        console.log(error);
    }
}
