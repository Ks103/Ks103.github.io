import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

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

const Content = styled.div`
  position: relative;
  z-index: 2;
`

const MyWorkLayout = ({ children, watermark = 'WORK' }) => {
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

        <BigTitle text={watermark} top="8%" right="20%" />
        <Content>{children}</Content>
      </Box>
    </ThemeProvider>
  )
}

export default MyWorkLayout
