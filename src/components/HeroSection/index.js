import React, {useState} from 'react';
import Video from '../video/video.mp4';
import { Button } from "../ButtonElement";
import {
HeroContainer,
HeroBg,
VideoBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight } from "./HeroElements";

const HeroSection = () => {

const [hover, setHover] = useState(false);

const onHover = () => {
    setHover(!hover);
};

    return (
        <HeroContainer >
            <HeroBg>
               
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                
            </HeroBg>
            <HeroContent>
      
        <HeroH1> Now Buying House Is So Much Easy </HeroH1>

        <HeroP>
            Sign up right now.
        </HeroP>

        <HeroBtnWrapper>

            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary ='true'
            dark='true'
            >
                Let's Get it started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>

        </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
