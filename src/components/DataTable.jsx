import React from 'react'
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@material-ui/core";
const DataTable = ({ data }) => {
    const keys = ['Country', 'Cases', 'Deaths', 'Recovered']

    return (
        <Table className="mb-0">
            <TableHead>
                <TableRow>
                    {keys.map(key => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(({ id, Slug, TotalConfirmed, TotalDeaths, TotalRecovered, }) => (
                    <TableRow key={id}>
                        <TableCell className="pl-3 fw-normal">{Slug}</TableCell>
                        <TableCell>{TotalConfirmed}</TableCell>
                        <TableCell>{TotalDeaths}</TableCell>
                        <TableCell>{TotalRecovered}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable