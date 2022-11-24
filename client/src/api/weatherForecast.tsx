import axios from "axios";

export const getByName= async(name: string)=>
{
    try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${name}&units=metric&type=accurate&mode=json&APPID=343179ad9e9fcb6a23a9a106683eae49`);
        return res.data;
    }
    catch(error)
    {
        console.log(error);
    }
}