import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setStoreGlobal, setStoreCountries } from '../redux/DashboardSlice';
import ResponsiveAppBar from '../components/NavBar';
import {
    Typography
} from "@material-ui/core";
import GlobalStats from '../components/GlobalStats';
import style from './style/style.module.css'
import DataTable from '../components/DataTable';

const Home = () => {
    const dispatch = useDispatch()
    const DashboardSlice = useSelector((state) => state.DashboardSlice)


    const [global, setGlobal] = useState(DashboardSlice.global || [])
    const [countries, setCountries] = useState(DashboardSlice.countries || [])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')


    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const result = await axios.get('https://api.covid19api.com/summary')

                console.log(result.data, 'here')
                await dispatch(setStoreGlobal(result.data.Global))
                await dispatch(setStoreCountries(result.data.Countries))
                setGlobal(result.data.global)
                setCountries(result.data.Countries)

                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        getData()
    }, [])


    useEffect(() => {
        if (search.length > 0) {
            let filterCountries = countries?.filter((item) => item?.Slug?.includes(search))
            setCountries(filterCountries)
        } else setCountries(DashboardSlice.countries)
    }, [search])

    return (
        <main>
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
                <input placeholder='search by country' onChange={(e) => setSearch(e.target.value)} />
                <div className={style.pageTitleContainer}>
                    <DataTable data={countries} />
                </div>

            </div>

        </main>

    );
}

export default Home;