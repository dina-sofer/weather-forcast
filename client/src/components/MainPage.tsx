import React from "react";

import AllLocations from "./AllLocations";
import Forecast from "./Forecast";

const MainPage = () => {
    return(
        <div style={{margin: '50px', display: "flex"}}>
            <AllLocations/>
            <Forecast/>
        </div>
    )
}

export default MainPage;