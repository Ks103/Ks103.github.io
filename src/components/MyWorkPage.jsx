import React, { useMemo, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './Themes'
import { projects } from '../data/MyWorkData'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import WorkProjectCard from '../subComponents/WorkProjectCard'

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'other', label: 'Other Projects' },
]

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

const SortWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: "⌄";
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-55%);
    pointer-events: none;
    font-size: 1rem;
    opacity: 0.7;
  }
`;

const SortSelect = styled.select`
  appearance: none;

  padding: 0.8rem 2.5rem 0.8rem 1rem;

  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);

  background: rgba(255,255,255,0.04);
  color: ${({ theme }) => theme.text};

  font-weight: 600;
  font-size: 0.85rem;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.08);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent || '#7c3aed'};
  }
`;


const CardList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`

const ScrollHint = styled.div`
  text-align: center;
  padding: 3rem 0 1rem;
  font-family: 'Karla', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
  color: ${props => props.theme.text};
`

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const MyWorkPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [sortOrder, setSortOrder] = useState('featured')

  const filteredProjects = useMemo(() => {
    let result = [...projects]

    if (activeTab !== 'all') {
      result = result.filter(p => p.category === activeTab)
    }

    if (sortOrder === 'featured') {
      result.sort((a, b) => a.featured - b.featured)
    } else {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [activeTab, sortOrder])

  const countLabel = String(filteredProjects.length).padStart(2, '0')

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

        {/* <DesignLabel
          href="https://www.figma.com/@khushishroff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 10 }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Design Work
          </motion.h2>
        </DesignLabel> */}

        <BigTitle text="WORK" top="8%" right="20%" />

        <PageContent>
            <HeaderSection>
                <HeaderLeft>
                    <SectionLabel>Selected Work —</SectionLabel>
                    <PageTitle>Case Studies &amp; Projects .</PageTitle>
                    <Subheading>
                        A collection of selected projects where I led the design process from
                        problem solving to final product.
                    </Subheading>
                </HeaderLeft>
                <HeaderRight>
                    <ProjectCount>
                        <PointerHolder></PointerHolder>
                        <CountHolder>{countLabel} <span>Projects</span></CountHolder> 
                    </ProjectCount>
                </HeaderRight>
            </HeaderSection>
            <FilterRow>
                <TabGroup>
                {TABS.map(tab => (
                    <Tab
                    key={tab.id}
                    $active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {activeTab === tab.id ? ' ' : ''}
                    {tab.label}
                    </Tab>
                ))}
                </TabGroup>
                
                {/* <SortWrapper>
                    <SortSelect
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="featured">Featured First</option>
                        <option value="alphabetical">A–Z</option>
                    </SortSelect>
                </SortWrapper> */}
            </FilterRow>

            <CardList
                key={`${activeTab}-${sortOrder}`}
                variants={listVariants}
                initial="hidden"
                animate="show"
            >
                {filteredProjects.map(project => (
                <WorkProjectCard key={project.id} project={project} activeTab={activeTab} />
                ))}
            </CardList>

            {/* <ScrollHint>↓ Scroll to Explore</ScrollHint> */}
        </PageContent>
      </Box>
    </ThemeProvider>
  )
}

export default MyWorkPage
