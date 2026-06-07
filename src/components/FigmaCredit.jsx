import React, { useMemo, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import { projects } from '../data/MyWorkData'
import { Design } from './AllSvgs'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import WorkProjectCard from '../subComponents/WorkProjectCard'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  position: relative;
`

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
  font-family: 'Karla', sans-serif;
`

const DesignLabel = styled.a`
  color: ${props => props.theme.text};
  position: fixed;
  top: 30%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 3;
  font-family: 'Karla', sans-serif;
  white-space: nowrap;
`

const ProjectCount = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.5rem;
  font-family: 'Karla', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  `
  
  const PointerHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &::before {
   content: '';
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: ${props => props.theme.text};
   margin-top: 0.25rem;
  }
`

const CountHolder = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`
const PageContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 7rem calc(2rem + 8vw) 4rem calc(2rem + 10vw);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`

const HeaderSection = styled.div`
  display: flex;
  align-items: strech;
  justify-content: space-between;
`
const HeaderLeft = styled.div`
  flex-grow: 2;
`
const HeaderRight = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 2rem;
`
const SectionLabel = styled.span`
  display: block;
  font-family: 'Karla', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  opacity: 0.7;
`

const PageTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`

const Subheading = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
  opacity: 0.7;
  max-width: 26rem;
  margin-bottom: 2rem;
`

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
`

const TabGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const Tab = styled.button`
  font-family: 'Karla', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.55rem 1.25rem;
  border-radius: 50px;
  border: 1.5px solid ${props => props.theme.text};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  background-color: ${props => (props.$active ? props.theme.text : props.theme.body)};
  color: ${props => (props.$active ? props.theme.body : props.theme.text)};

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`


const CardList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}
const Main = styled.div`
//   border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  border-radius: 10rem;

  /* ✅ Increased width */
  width: 52vw;
//   min-height: calc(var(--vh) * 60);

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

//   &:hover {
//     color: ${props => props.theme.body};
//     background-color: ${props => props.theme.text};
//   }

  /* ✅ Mobile responsive */
  @media (max-width: 768px) {
    width: 90vw;
    min-height: auto;
  }
`

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
    font-family: Georgia, serif;
    font-size: 4rem;
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
    // ${Main}:hover & {
    //     color: ${props => props.theme.body};
    // }
`;
const HeroSubtitle = styled.p`
  font-family: 'Karla', sans-serif;
  line-height: 1.5;
    margin-bottom: 0.5rem;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.75;
  }

//   ${Main}:hover & {
//     color: ${props => props.theme.body};
//   }
`;
const ClaimButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem;
  min-width: 100px;

  border-radius: 999px;
  text-decoration: none;

  background: linear-gradient(
    180deg,
    rgb(39, 27, 27) 0%,
    rgb(30, 21, 21) 100%
  );

  color: white;
  font-family: 'Karla', sans-serif;
  font-size: 1rem;
  font-weight: 700;

  overflow: hidden;

  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
    inset 0 -1px 0 rgba(255,255,255,0.08),
    0 1px 3px rgba(47,43,67,0.1);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /* Rotating border line */
  &::before {
    content: '';
    position: absolute;

    width: 200%;
    height: 350%;

    background: conic-gradient(
      transparent 0deg,
      transparent 300deg,
      rgba(255,255,255,0.9) 340deg,
      transparent 360deg
    );

    animation: rotateBorder 6s linear infinite;
  }

  /* Actual button surface */
  &::after {
    content: '';
    position: absolute;
    inset: 1px;

    border-radius: inherit;

    background: linear-gradient(
      180deg,
      rgb(39, 27, 27) 0%,
      rgb(30, 21, 21) 100%
    );

    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
  }
  
    &:hover {
    transform: translateY(-2px);

    box-shadow:
        inset 0 -1px 0 rgba(255, 255, 255, 0.12),
        0 8px 16px rgba(0, 0, 0, 0.15),
        0 0 12px rgba(34, 197, 94, 0.15);
    }

    &:hover::after {
    background:
        linear-gradient(
        to top,
        rgba(34, 197, 94, 0.18) 0%,
        rgba(34, 197, 94, 0.08) 10%,
        transparent 25%
        ),
        linear-gradient(
        180deg,
        rgb(39, 27, 27) 0%,
        rgb(30, 21, 21) 100%
        );
    }


  @keyframes rotateBorder {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const FigmaCredit = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Contact href="mailto:kkhushi3058@gmail.com" target="_blank" rel="noreferrer">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: -2.5 }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            MSG ME..
          </motion.h2>
        </Contact>

        <Main>
            <HeroContent>
                <HeroTitle>10000 Figma Credits</HeroTitle>
                <HeroSubtitle>
                    Follow{' '}
                    <a
                        href="https://www.instagram.com/unfoldwith.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @unfoldwith.me
                    </a>{' '}
                    for design
                    <br />
                    updates!
                </HeroSubtitle>

                <ClaimButton href="https://www.figma.com/files/team/1303224090348052843/recents-and-sharing?utm_source=Brand+Marketing&utm_medium=hackathon&utm_campaign=Config&ai_promo_code=CONFIG-MAKEATHON-HACKATHON-CREDITS_5F1D1E84&fuid=973208590615846962">
                    <span>Claim for free</span>
                </ClaimButton>
            </HeroContent>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default FigmaCredit
