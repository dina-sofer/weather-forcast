import React from "react";

import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { ThunderstormTwoTone } from "@mui/icons-material";

const Forecast = () => {

    return (
        <>
            <div style={{ display: "flex", flexFlow: "column", alignItems: "center", padding: "4%", border: "solid 1px #8cbae8", borderRadius: "10px", margin: "30px", width: "100%", height: "100%" }}>
                <Typography variant="h3">
                    Israel
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Israel
                </Typography>
                <Stack direction="row" spacing={10}>
                    <div>
                        <Typography variant="h1">24°</Typography>
                        <Typography variant="h5">Temperature</Typography>
                    </div>
                    <div>
                        <Typography variant="h1">46%</Typography>
                        <Typography variant="h5">Humidity</Typography>
                    </div>
                </Stack>
                <img alt="" src="image.png" width={"20%"}/>
                <Stack direction="row" spacing={5}>
                    <div>
                        <Typography variant="h5">SUN</Typography>
                        <ThunderstormTwoTone color="primary" />
                        <Typography variant="subtitle1">15°</Typography>
                    </div>
                    <div>
                        <Typography variant="h5">MON</Typography>
                        <ThunderstormTwoTone color="primary" />
                        <Typography variant="subtitle1">15°</Typography>
                    </div>
                    <div>
                        <Typography variant="h5">TUE</Typography>
                        <ThunderstormTwoTone color="primary" />
                        <Typography variant="subtitle1">15°</Typography>
                    </div>
                    <div>
                        <Typography variant="h5">WED</Typography>
                        <ThunderstormTwoTone color="primary" />
                        <Typography variant="subtitle1">15°</Typography>
                    </div>
                    <div>
                        <Typography variant="h5">THU</Typography>
                        <ThunderstormTwoTone color="primary" />
                        <Typography variant="subtitle1">15°</Typography>
                    </div>
                </Stack>
            </div>
        </>
    )
}

export default Forecast;
