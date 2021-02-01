import React, {useState} from 'react';
import Footer from '../Footer';
import Grid from '../Grid'; //Services
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Home = () => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
};


    return (
        <>
        <Navbar toggle={toggle}/>
         <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Grid />
        <InfoSection {...homeObjThree}/>
        
       
        </>
    );
};

export default Home;
