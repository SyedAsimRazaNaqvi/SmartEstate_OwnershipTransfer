import React, {useState} from 'react';
import Grid from '../Grid'; //Services
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';


const Home = () => {



    return (
        <>
        
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Grid />
        <InfoSection {...homeObjThree}/>
        
        </>
    );
};

export default Home;
