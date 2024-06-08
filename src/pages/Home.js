import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';



const Home = () => {
    const [bodyPart, setBodyPart] = useState(['all'])
    const [exercices, setExercices] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises 
        setExercices={setExercices} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
        <Exercises
              exercises={exercices}
              setExercices={setExercices} 
              bodyPart={bodyPart}
              
        />
    </Box>
  )
}

export default Home