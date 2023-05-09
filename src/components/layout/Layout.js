import React from 'react'
import {Box} from '@mui/material'
import Navbar from '../Navbar'
import Hero from '../Hero'


const Layout = () => {
    return (
        // Navbar
        <Box sx={{overflowX:'hidden', height:'100vh', position:'relative'}}>
            <Box sx={{height:'4rem', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Navbar />
            </Box>
            <Box sx={{maxWidth:'1100px',marginInline:'auto'}}>
                <Hero />
            </Box>
        </Box>
    
    )
}

export default Layout
