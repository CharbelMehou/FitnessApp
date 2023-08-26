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
        flexGrow: 1
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <MotivationCarousel />
          <Typography sx={{ fontSize: '22px' }} fontWeight={700}>
          {t("workout")}<br/>{t("sweat")}<br/>{t("smile")}<br/>{t("and-repeat")}
        </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          <GymLiftersCarousel />
        </Box>
      </Box>
      
      
        
        <Typography>
          {t("exercises-below")}
        </Typography>
     
    
    </Paper>
  );
};

export default HeroBanner;
