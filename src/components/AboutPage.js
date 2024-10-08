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
height:100vh;
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
    height: 65vh;
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
      "I can build and design your ideas"
Always ready to discover new things.
<br /> <br/>
Providing experience in the design, installation, testing, and maintenance of web systems. Skilled in a variety of platforms and languages. Capable of successfully managing oneself while working on solo tasks. 
<br/> <br/>
I'm curious about the entire frontend stack. Enjoy exploring new ideas and creating amazing creations. When you put your consciousness into anything, I feel it becomes an art form. You may contact me through social media.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
