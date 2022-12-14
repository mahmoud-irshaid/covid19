import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setStoreGlobal, setStoreCountries } from '../redux/DashboardSlice';
import ResponsiveAppBar from '../components/NavBar';
import style from './style/style.module.css'
import {
    Typography
} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import GlobalStats from '../components/GlobalStats';
import DataTable from '../components/DataTable';
import { IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {
    const dispatch = useDispatch()
    //get redux slice
    const DashboardSlice = useSelector((state) => state.DashboardSlice)


    const [countries, setCountries] = useState(DashboardSlice.countries || [])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [rankBy, setRankBy] = useState('')
    // get data from Api call 

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const result = await axios.get('https://api.covid19api.com/summary')

                console.log(result.data, 'data is here')
                // dispatch to save data in redux store
                await dispatch(setStoreGlobal(result.data.Global))
                await dispatch(setStoreCountries(result.data.Countries))
                setCountries(result.data.Countries)

                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        getData()
    }, [])


    // filter countries by search
    useEffect(() => {
        if (search.length > 0) {
            let filterCountries = DashboardSlice.countries?.filter((item) => item?.Slug?.includes(search))
            setCountries(filterCountries)
        } else setCountries(DashboardSlice.countries)
    }, [search, rankBy])


    // rank countries by Total (cases, deaths, and recoverd) 
    useEffect(() => {
        let newArr = Array.from(countries)
        switch (rankBy) {

            case 'Cases':
                newArr = newArr.sort((a, b) => a?.TotalConfirmed < b?.TotalConfirmed ? 1 : -1)
                setCountries(newArr)
                break;

            case 'Deaths':
                newArr = newArr.sort((a, b) => a?.TotalDeaths < b?.TotalDeaths ? 1 : -1)
                setCountries(newArr)
                break;

            case 'Recovered':
                newArr = newArr.sort((a, b) => a?.TotalRecovered < b?.TotalRecovered ? 1 : -1)
                setCountries(newArr)
                break;

            default:
                break;
        }
    }, [rankBy])



    return (
        <main className={style.main}>
            <ResponsiveAppBar />
            <div className={style.container}>
                <div className={style.pageTitleContainer}>
                    <Typography variant="h3" size="sm">
                        Covid19 Tracker
                    </Typography>
                </div>
                <div className={style.stats}>

                    <GlobalStats />
                </div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search By Country"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={(e) => { e.preventDefault() }}>
                        <SearchIcon />
                    </IconButton>

                </Paper>

                <Stack flexDirection={'row'} width='100%' alignItems='center' justifyContent='flex-end'>
                    <Typography>Rank By :</Typography>
                    <FormControl sx={{ m: 3, ml: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">filter</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="filter"
                            onChange={(e) => setRankBy(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Cases'}>Cases</MenuItem>
                            <MenuItem value={'Deaths'}>Deaths</MenuItem>
                            <MenuItem value={'Recovered'}>Recovered</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <div className={style.pageTitleContainer}>
                    <DataTable data={countries} loading={loading} />
                </div>

            </div>

        </main>

    );
}

export default Home;