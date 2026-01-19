import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design } from './AllSvgs'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;

  /* ✅ Increased width */
  width: 52vw;
  min-height: 60vh;

  z-index: 3;
  line-height: 1;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* ✅ True center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  /* ✅ Mobile responsive */
  @media (max-width: 768px) {
    width: 90vw;
    min-height: auto;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    display: block;
  }

  ul {
    margin-left: 1.2rem;
  }
`

const TwoColumn = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 110%;

  & > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Design width={40} height={50} /> Designer
          </Title>

          <Description>
            I design and build meaningful digital experiences with a strong focus
            on clarity, usability, and scalability. With 3+ years of experience,
            I’ve worked across AI-powered platforms, product-based applications,
            and modern web solutions.
          </Description>

          <TwoColumn>
            <Description>
              <strong>I Love To Design</strong>
              <ul>
                <li>AI & Product Platforms</li>
                <li>Web & Mobile Applications</li>
                <li>SaaS Dashboards</li>
                <li>Landing Pages & Portfolios</li>
                <li>Pitch Decks & Design Systems</li>
              </ul>
            </Description>

            <Description>
              <strong>Tools & Workflow</strong>
              <ul>
                <li>Figma</li>
                <li>Framer</li>
                <li>Wix</li>
                <li>AI Design Tools</li>
                <li>Blogs & Content Creation</li>
              </ul>
            </Description>
          </TwoColumn>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
