import React from 'react'
import {
    CardContent,
    Typography,
    Card,
    Paper
} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import style from '../pages/style/style.module.css'

function GlobalStats() {
    const DashboardSlice = useSelector((state) => state.DashboardSlice)
    let GlobalStats = [
        {
            name: 'Total Cases',
            value: DashboardSlice?.global?.TotalConfirmed
        }
        , {
            name: 'Total Deaths',
            value: DashboardSlice?.global?.TotalDeaths
        }
        , {
            name: 'Total Recovered',
            value: DashboardSlice?.global?.TotalRecovered
        }]
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >{GlobalStats.map((item) =>
            <Paper elevation={3} style={{ padding: "10px", borderWidth: "10px", borderColor: 'black' }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item?.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item?.value || 0}
                    </Typography>

                </CardContent>

            </Paper>
        )}
        </Stack >

    )
}

export default GlobalStats