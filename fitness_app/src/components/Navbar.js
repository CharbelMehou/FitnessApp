import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'

import Logo from'../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack sx={{display:'flex',justifyContent:'space-around',flexDirection:'row',backgroundColor:"gray"}}>
      <Link to="/">
         <img src={Logo} alt='logo' />
      </Link>
    <Stack sx={{display:'flex',flexDirection:'row',alignItems:'flex-end',gap:"40px"}}>
      <Link to="/">Home</Link>
      <a href="#exercises">Exercises</a>
    </Stack>

    </Stack>
  )
}

export default Navbar