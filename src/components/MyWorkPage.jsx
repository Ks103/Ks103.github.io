import React, { useMemo, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import { projects } from '../data/MyWorkData'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import WorkProjectCard from '../subComponents/WorkProjectCard'

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'other', label: 'Projects' },
]

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100%;
  min-height: calc(var(--vh) * 100);
  position: relative;
  overflow-x: hidden;
`

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 3;
  font-family: 'Karla', sans-serif;

  @media (max-width: 768px) {
    top: 1.25rem;
    right: 1.25rem;
  }
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: 0.5rem;
`

const PageContent = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1400px;

  margin: 0 auto;

  padding: 7rem 7rem 4rem;

  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 7rem 5rem 4rem;
  }

  @media (max-width: 900px) {
    padding: 6.5rem 3rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 5.5rem 1rem 2rem;
  }
`

const HeaderSection = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const HeaderLeft = styled.div`
  flex-grow: 2;
  min-width: 0;
`

const HeaderRight = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  margin: 0 2rem 0 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const PageTitle = styled.h1`
  font-family: 'Karla', sans-serif;

  font-size: clamp(2rem, 4vw, 3rem);

  font-weight: 600;

  line-height: 1.15;

  margin: 0 0 1rem;

  color: ${props => props.theme.text};

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const FilterRow = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  flex-wrap: wrap;

  gap: 1rem;

  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
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

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  background-color: ${props =>
    props.$active ? props.theme.text : props.theme.body};

  color: ${props =>
    props.$active ? props.theme.body : props.theme.text};

  &:hover {
    background-color: ${props => props.theme.text};

    color: ${props => props.theme.body};
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;

    padding: 0.5rem 1rem;
  }
`

/* =========================================
   PROJECT GRID
   ========================================= */

const CardList = styled(motion.div)`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 1.5rem;

  row-gap: 1.5rem;

  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1.25rem;
  }
`

/* =========================================
   CARD WRAPPER

   IMPORTANT:
   No fixed height.

   The card height is determined by
   its content.
   ========================================= */

const CardWrapper = styled.div`
  width: 100%;

  min-width: 0;

  height: auto;

  box-sizing: border-box;

  cursor: ${props =>
    props.$hasLink ? 'pointer' : 'default'};

  /*
    Do NOT force height here.
    Let WorkProjectCard determine
    the height naturally.
  */

  & > * {
    width: 100% !important;

    box-sizing: border-box;
  }
`

const listVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
}

const MyWorkPage = () => {
  const [activeTab, setActiveTab] =
    useState('all')

  const [sortOrder, setSortOrder] =
    useState('featured')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    return result
  }, [activeTab, sortOrder])

  const countLabel = String(
    filteredProjects.length
  ).padStart(2, '0')

  /*
    =========================================
    PROJECT CLICK
    =========================================
  */

  const handleProjectClick = (
    event,
    project
  ) => {
    if (!project.link) {
      return
    }

    event.preventDefault()

    event.stopPropagation()

    window.open(
      project.link,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>

        {/* LOGO */}

        <LogoComponent theme="light" />

        {/* SOCIAL ICONS */}

        <SocialIcons theme="light" />

        {/* BACKGROUND */}

        <ParticleComponent theme="light" />

        {/* CONTACT */}

        <Contact
          href="mailto:kkhushi3058@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: -2.5,
            }}
            transition={{
              type: 'spring',
              duration: 1.5,
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            MSG ME..
          </motion.h2>
        </Contact>

        {/* WORK */}

        <BigTitle
          text="WORK"
          top="8%"
          right="20%"
        />

        <PageContent>

          {/* HEADER */}

          <HeaderSection>

            <HeaderLeft>

              <PageTitle>
                Case Studies &amp; Projects
              </PageTitle>

            </HeaderLeft>

          </HeaderSection>

          {/* FILTER */}

          <FilterRow>

            <TabGroup>

              {TABS.map(tab => (
                <Tab
                  key={tab.id}
                  $active={
                    activeTab === tab.id
                  }
                  onClick={() =>
                    setActiveTab(tab.id)
                  }
                >
                  {tab.label}
                </Tab>
              ))}

            </TabGroup>

            <HeaderRight>

              <ProjectCount>

                <PointerHolder />

                <CountHolder>
                  {countLabel}

                  <span>
                    Projects
                  </span>
                </CountHolder>

              </ProjectCount>

            </HeaderRight>

          </FilterRow>

          {/* PROJECT CARDS */}

          <CardList
            key={`${activeTab}-${sortOrder}`}
            variants={listVariants}
            initial="hidden"
            animate="show"
          >

            {filteredProjects.map(
              project => (

                <CardWrapper
                  key={project.id}
                  $hasLink={Boolean(
                    project.link
                  )}
                  onClickCapture={event =>
                    handleProjectClick(
                      event,
                      project
                    )
                  }
                >

                  <WorkProjectCard
                    project={project}
                    activeTab={activeTab}
                  />

                </CardWrapper>

              )
            )}

          </CardList>

        </PageContent>

      </Box>
    </ThemeProvider>
  )
}

export default MyWorkPage