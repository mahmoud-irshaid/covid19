import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
    const history = useHistory()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant="h6">
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={() => history.push('/')}>Back Home</Button>

        </Box>)
}

export default PageNotFound