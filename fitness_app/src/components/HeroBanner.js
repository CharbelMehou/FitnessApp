import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import GymLiftersCarousel from './GymLiftersCarousel';
import MotivationCarousel from './MotivationCarousel';
import { useTranslation } from 'react-i18next';

const HeroBanner = () => {
  const { t } = useTranslation();
  
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection:'column',
      m: 2,
      p: 2,
      gap:2
    }}>
      
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        flexWrap: {xs:'wrap',lg:'nowrap'},
        justifyContent: 'space-between',
      }}>
        <Box sx={{flexGrow: 1 , flexDirection:'column',display: 'flex', justifyContent: 'center',alignItems:'center',gap:2}}>
            <Box sx={{ flexGrow: 1 , display: 'flex', justifyContent: {xs:'flex-start',lg:'flex-end'}}}>
              <MotivationCarousel/>
            </Box>
          <Box sx={{textAlign:'justify'}}>
            <Typography  sx={{fontSize:'25px'}} fontWeight={700}>
            {t("workout")}
            </Typography>
            <Typography sx={{fontSize:'25px'}} fontWeight={700}>
            {t("sweat")}
            </Typography>
            <Typography sx={{fontSize:'25px'}} fontWeight={700}>
            {t("smile")}
            </Typography>
            <Typography sx={{fontSize:'25px'}} fontWeight={700}>
            {t("and-repeat")}
            </Typography>
          </Box>
              <Box sx={{mt:2,width:{xs:'50%',lg:'100%'}}}>
                <Typography sx={{textAlign:'center',fontSize:{xs:'16px',lg:'25px'}}}>
                  {t("exercises-below")}
                </Typography>
             </Box>
        </Box>
        
        <Box sx={{ flexGrow: 1 , display: 'flex', justifyContent: {xs:'flex-start',lg:'flex-end'}}}>
          <GymLiftersCarousel />
        </Box>
      </Box>
      
      
      
     
    
    </Paper>
  );
};

export default HeroBanner;
