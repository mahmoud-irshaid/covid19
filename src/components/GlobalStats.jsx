import React from 'react'
import {
    Grid,
    LinearProgress,
    Select,
    CardContent,
    Typography,
    Card
} from "@material-ui/core";
import { useSelector } from 'react-redux';

function GlobalStats() {
    const DashboardSlice = useSelector((state) => state.DashboardSlice)

    return (
        <Grid container justifyContent="center" spacing={8}>
            <Grid item>

                <Card sx={{ minWidth: 350 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Cases
                        </Typography>
                        <Typography variant="h5" component="div">
                            {DashboardSlice?.global?.TotalConfirmed || 0}
                        </Typography>

                    </CardContent>

                </Card>

            </Grid>
            <Grid item>

                <Card sx={{ minWidth: 350 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Deaths
                        </Typography>
                        <Typography variant="h5" component="div">
                            {DashboardSlice?.global?.TotalDeaths || 0}

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item>

                <Card sx={{ minWidth: 350 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total Recovered
                        </Typography>
                        <Typography variant="h5" component="div">
                            {DashboardSlice?.global?.TotalRecovered || 0}
                        </Typography>

                    </CardContent>

                </Card>

            </Grid>
        </Grid>


    )
}

export default GlobalStats