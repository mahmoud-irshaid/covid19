import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from '../pages/style/style.module.css'
function Loader() {
    return (
        <div className={style.loader}>
            <Box>
                <CircularProgress sx={{ size: 70 }} />
            </Box>
        </div>)
}

export default Loader