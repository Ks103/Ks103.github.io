import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:calc(var(--vh) * 100);
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid rgb(252, 246, 244);
    color: rgb(252, 246, 244);
    padding: 1.5rem;
    width: 60vw;
    height: calc(var(--vh) * 65);
    z-index: 3;
    line-height: 1.5;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
    position: absolute;
    left: calc(2.5rem + 5vw);
    top: 10rem;
    font-family: "Ubuntu Mono", monospace;
    font-style: italic;
`



const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
  "I design and build ideas into meaningful digital experiences."
  Always curious and ready to explore what’s next.
  <br /> <br />
  With 3+ years of experience in UI/UX design, I’ve worked across AI-powered platforms,
  blockchain products, e-commerce solutions, and modern product-based applications.
  As a Figma expert, backed by internships, freelancing, and real-world product work,
  I’ve successfully delivered impactful designs for 10+ clients and mentored 100+ aspiring designers.
  <br /> <br />
  I also create educational UI/UX content on YouTube and leverage my frontend development
  skills to bridge the gap between design and development—ensuring seamless handoff
  and highly interactive user experiences.
</Main>


        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
