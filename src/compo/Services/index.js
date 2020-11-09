import React from 'react'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP,
} from './ServicesElements'
import Icon1 from '../InfoSection/img.svg'
import Icon2 from '../InfoSection/img.svg'
import Icon3 from '../InfoSection/img.svg'

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP> Hello we help you so much do you wan that yhas tohzt kasf g wepo </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>This refers to ICON 2 do you know that</ServicesH2>
                        <ServicesP> Hello we help you so much do you wan that yhas tohzt kasf g wepo </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>For sure after icon 2 is icon 3 ha ha ha</ServicesH2>
                        <ServicesP> Hello we help you so much do you wan that yhas tohzt kasf g wepo </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>  
        </>
    )
}

export default Services
