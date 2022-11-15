import React from 'react'
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@material-ui/core";
import style from '../pages/style/style.module.css'
import Loader from './Loader';

const DataTable = ({ data, loading }) => {
    const keys = ['Country', 'New Cases', 'Total Cases', 'New Deaths', 'Total Deaths', 'New Recovered', 'Total Recovered']

    return (
        <Table className="mb-0">
            <TableHead className={style.tableHead}>
                <TableRow >
                    {keys.map(key => (
                        <TableCell key={key} style={{ color: 'white' }}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.length > 0 ? data.map(({ id, Slug, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, }) => (
                    <TableRow key={id}>
                        <TableCell className="pl-3 fw-normal">{Slug}</TableCell>
                        <TableCell>{NewConfirmed}</TableCell>
                        <TableCell>{TotalConfirmed}</TableCell>
                        <TableCell>{NewDeaths}</TableCell>
                        <TableCell>{TotalDeaths}</TableCell>
                        <TableCell>{NewRecovered}</TableCell>
                        <TableCell>{TotalRecovered}</TableCell>

                    </TableRow>
                ))
                    :
                    loading ?
                        <Loader />
                        :
                        <div className={style.noData}>
                            <h4>No Available Data</h4>
                        </div>
                }
            </TableBody>
        </Table>
    )
}

export default DataTable