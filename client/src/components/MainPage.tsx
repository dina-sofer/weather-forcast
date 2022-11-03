import React from "react";
import AddLocation from "./AddLocation";
import AllLocations from "./AllLocations";

const MainPage = () => {
    return(
        <>
            <h1>Weather App</h1>
            <AddLocation/>
            <AllLocations/>
        </>
    )
}

export default MainPage;