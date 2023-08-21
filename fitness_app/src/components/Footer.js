import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Logo from '../assets/images/Logo.png'

const handleLInkedLnClick = () => {
  window.open('https://www.linkedin.com/in/charbel-mehou/', '_blank');
}
const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }}  textAlign="center" pb="40px">Made by Charbel MEHOU</Typography>
    <Box sx={{display:"flex",flexDirection:"row"}}>
    <Button
      variant="contained"
      color="primary"
      onClick={handleLInkedLnClick}
    >
     <LinkedInIcon />
    </Button>
    </Box>
  </Box>
);

export default Footer