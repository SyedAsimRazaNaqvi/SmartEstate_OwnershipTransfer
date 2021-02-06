import React from 'react';
import Grid from '../Grid'; //Services
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo,homeObjFour } from '../InfoSection/Data';
import { OwnershipTransferList } from '../OwnershipTransferList';


const Home = () => {
    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Grid />
            <InfoSection {...homeObjThree} />
            <OwnershipTransferList />
        </>
    );
};

export default Home;
