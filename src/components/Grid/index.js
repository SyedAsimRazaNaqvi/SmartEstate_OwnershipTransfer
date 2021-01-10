import React from 'react'
import Icon1 from '../images/buy_house_image.svg'
import Icon2 from '../images/image2.svg'
import Icon3 from '../images/image3.svg'

import { ServiceContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServiceP
} from "./GridElements";
const Grid = () => {
    return (
        <ServiceContainer id='services'>
            <ServicesH1> Here is some of out listing </ServicesH1>
            <ServicesWrapper>
                
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2></ServicesH2>
                <ServiceP> ABCD </ServiceP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2></ServicesH2>
                <ServiceP></ServiceP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2></ServicesH2>
                <ServiceP></ServiceP>
                </ServicesCard>

            </ServicesWrapper>
        </ServiceContainer>
            
        
    )
}

export default Grid
