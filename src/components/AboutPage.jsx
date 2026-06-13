import React, { useState, useEffect } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { Link } from 'react-router-dom'
import { experiences } from '../data/ExperienceData';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 200vh; /* enough space for About + Experience */
  position: relative;
  overflow-x: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
  position: absolute;
  right: 5%;
  width: 20vw;
  z-index: 2;

  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 30vw;
  }
`;
const Main =  styled.div`
  border: 2px solid rgb(252, 246, 244);
    color: rgb(252, 246, 244);
    padding: 0rem 1.5rem;
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

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 50%;
  color: ${props => props.theme.text};
  text-decoration: none;
  background-color: ${props => props.theme.body};
  transition: background-color 0.2s ease, color 0.2s ease;
  position: absolute;
  left: calc(2.5rem + 5vw);
  top: 6.5rem;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    left: 4.5rem;
  }
`
const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  z-index: 10;
`;

const ToggleLabel = styled.span`
  color: ${props => props.theme.text};
  font-family: 'Karla', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const Toggle = styled.button`
  width: 70px;
  height: 36px;

  border: none;
  border-radius: 999px;

  background: ${props =>
    props.$active ? '#ffffff' : 'rgba(255,255,255,0.2)'};

  cursor: pointer;
  position: relative;

  transition: all 0.3s ease;

  &::after {
    content: '';

    position: absolute;
    top: 3px;
    left: ${props => (props.$active ? '37px' : '3px')};

    width: 30px;
    height: 30px;

    border-radius: 50%;
    background: #000;

    transition: all 0.3s ease;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const NormalText = styled.span`
  color: ${props =>
    props.$highlight
      ? 'rgba(255,255,255,0.25)'
      : props.theme.text};

  text-decoration: ${props =>
    props.$highlight ? 'line-through' : 'none'};

  transition: all 0.4s ease;
`;

const HighlightText = styled.span`
  color: ${props =>
    props.$highlight
      ? '#66f2cf'
      : props.theme.text};

  transition: all 0.4s ease;
`;

const ExperienceSection = styled.section`
  position: absolute;
  top: 120vh;
  left: calc(2.5rem + 5vw);

  width: 60vw;

  border: 2px solid rgb(252, 246, 244); 

  backdrop-filter: blur(4px);

  padding: 2rem;

  color: white;
    z-index: 3;
  @media (max-width: 768px) {
    width: 85vw;
    left: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Karla', sans-serif;
`;

const ExperienceItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding: 1.5rem 0;

  border-bottom: 1px solid rgba(255,255,255,0.08);

  &:last-child {
    border-bottom: none;
  }
`;

const ExperienceLeft = styled.div`
  flex: 1;
`;

const Company = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const Role = styled.h4`
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 0.75rem;
  margin-left: 0.2rem;
`;

const DescriptionText = styled.p`
  opacity: 0.7;
  line-height: 1.6;
`;

const Duration = styled.div`
  white-space: nowrap;
  opacity: 0.75;
  font-weight: 600;
`;

const AboutPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    const [highlightMode, setHighlightMode] = useState(false);
    return (
        <ThemeProvider theme={DarkTheme}>
    <Box>   

    <LogoComponent theme='dark'/>
    <SocialIcons theme='dark'/>
    {/* <PowerButton /> */}
    <ParticleComponent theme='dark' />

        <Spaceman
            style={{
                top: `${150 + scrollY * 0.9}px`,
            }}
            >
        <img src={astronaut} alt="spaceman" />
        </Spaceman>  
        {/* <BackLink to="/" aria-label="Back to projects">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </BackLink> */}
            <ToggleWrapper>
        <ToggleLabel>HIGHLIGHT MODE</ToggleLabel>
            <Toggle
                $active={highlightMode}
                onClick={() => setHighlightMode(prev => !prev)}
            />
        </ToggleWrapper>
        <Main>
            <MainContent>   
                <Paragraph>
                    <NormalText $highlight={highlightMode}>
                    I design and build ideas into
                    </NormalText>{' '}
                    <HighlightText $highlight={highlightMode}>
                    meaningful digital experiences
                    </HighlightText>
                    <NormalText $highlight={highlightMode}>.</NormalText>
                </Paragraph>

                <Paragraph>
                    <NormalText $highlight={highlightMode}>
                    Always curious and ready to explore what's next.
                    </NormalText>
                </Paragraph>

                <Paragraph>
                    <HighlightText $highlight={highlightMode}>
                    Product Designer with 3+ years of experience
                    </HighlightText>{' '}
                    <NormalText $highlight={highlightMode}>
                    designing AI, enterprise SaaS, logistics, and consumer products. 
                    </NormalText>
                </Paragraph>

                <Paragraph>
                    <NormalText $highlight={highlightMode}>
                    Experienced in 
                    </NormalText>{' '}
                    <HighlightText $highlight={highlightMode}>
                     leading end-to-end 
                    </HighlightText>{' '}
                    <NormalText $highlight={highlightMode}>
                    product design,
                    </NormalText>{' '}
                    <HighlightText $highlight={highlightMode}>
                    simplifying complex workflows
                    </HighlightText>{' '}
                    <NormalText $highlight={highlightMode}>
                    and building scalable systems that align user needs with business goals.
                    </NormalText>{' '}
                </Paragraph>
            </MainContent>
        </Main>

        <ExperienceSection>
            {/* <SectionTitle>Experience</SectionTitle> */}

            {experiences.map(exp => (
                <ExperienceItem key={exp.company + exp.role}>
                <ExperienceLeft>
                    <HighlightText $highlight={highlightMode}>
                        <Company>{exp.company} | </Company> 
                        <Role> {exp.role}</Role>
                    </HighlightText>{' '}
                    <NormalText $highlight={highlightMode}>
                    <DescriptionText>
                    {exp.description}
                    </DescriptionText>
                    </NormalText>
                </ExperienceLeft>
                <HighlightText $highlight={highlightMode}>
                <Duration>{exp.duration}</Duration>
                </HighlightText>
                </ExperienceItem>
            ))}
            </ExperienceSection>

        <BigTitle position="absolute" text="ABOUT" top="2%" left="5%" opacity="0.1" />
        <BigTitle position="absolute" text="Experience" top="51%" left="5%" opacity="0.1" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
