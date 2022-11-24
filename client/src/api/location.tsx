import axios from "axios";

export interface Location {
    locationName: string;
    temp: Number,
    humidity: Number
}

export const createLocation = async (newLocation: Location) => {
    try {
        await axios.post('http://localhost:8000/location/', newLocation);
    }
    catch (error) {
        console.log(error);
    }
}


export const getAll= async()=>
{
    try{
        await axios.get('http://localhost:8000/location/');
    }
    catch(error)
    {
        console.log(error);
    }
}


export const deleteLocation= async (id:string) => {
    try {
        await axios.delete(`http://localhost:8000/location/${id}`);
        return `location ${id} deleted successfully`;
    }
    catch (error) {
        console.log('error - deleteSystem', error);
        return `location ${id}failed to deleted successfully`;
    }
}
