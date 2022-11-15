import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import style from '../pages/style/style.module.css'
function Loader() {
    return (
        <div className={style.loader}>
            <CircularProgress sx={{ size: 70 }} />
        </div>)
}

export default Loader