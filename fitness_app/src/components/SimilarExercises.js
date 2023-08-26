import React from 'react';
import { Typography, Box, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';
import { useTranslation } from 'react-i18next';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  const {t}=useTranslation()
  return(

    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      {t("similar-exercises")}
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
    {t("similar")} <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{t("equipment")}</span> {t("exercises")}
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
    )
  }

export default SimilarExercises;