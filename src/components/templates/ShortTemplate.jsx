import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Page = styled.div`
  padding: 5.5rem calc(2rem + 6vw) 4rem calc(2rem + 8vw);
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem 3rem;
  }
`
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`
const SubheadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 50%;
  color: ${props => props.theme.text};
  text-decoration: none;
  background-color: ${props => props.theme.body};
  transition: background-color 0.2s ease, color 0.2s ease;

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
const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const HeroLabel = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 800;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;
`

const HeroTitle = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`

const HeroDesc = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 1.25rem;
`


const HeroSubtitle = styled.h2`
  font-family: 'Karla', sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.75rem;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Tag = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 20px;
`

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Karla', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  border-radius: 50px;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;

  img {
    width: 100%;
    max-width: 500px;
    max-height: 350px;
    object-fit: contain;
  }
`


const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 380px;
  height: 260px;
  border: 1.5px dashed rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Karla', sans-serif;
  font-size: 0.8rem;
  opacity: 0.35;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const Card = styled.section`
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 12px;
  background-color: ${props => props.theme.body};
  margin-bottom: 1.5rem;
  overflow: hidden;
`

const OverviewBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1.5rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
`

const MetaBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 1rem;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  gap: 1rem;
  img{
    max-width: 24px;
    max-height: 24px;
  }
  p{
    font-size: 0.8rem;  
    opacity: 0.75;
  }
  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`
const BlockItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span{
    font-size: 0.8rem;
    font-weight: 700;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      opacity: 0.75;
      font-size: 0.8rem;  
    }
  }
`

const ToolTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.25rem;

  span {
    font-family: 'Karla', sans-serif;
    font-size: 0.6rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid ${props => props.theme.text};
    border-radius: 12px;
  }
`

const ProblemGoalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProblemGoalCol = styled.div`
  padding: 2rem;
  border-right: 1.5px solid ${props => props.theme.text};

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1.5px solid ${props => props.theme.text};

    &:last-child {
      border-bottom: none;
    }
  }
`

const SectionHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::after {
    content: '';
    flex: 1;
    height: 3px;
    max-width: 100px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`

const BodyText = styled.p`
  font-size: 0.8rem;
  opacity: 0.75;
  margin-bottom: 0.75rem;
`

const XList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.82rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    opacity: 0.8;

    span {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1.5px solid ${props => props.theme.text};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.55rem;
      margin-top: 2px;
    }
  }
`

const GoalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 0.75rem;
`

const GoalCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.02);

  span:first-child {
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  img{
    width: 18px;
    height: 18px;
  }

  div {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.72rem;
    line-height: 1.4;

    strong {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.15rem;
    }
  }
`

const ProcessSection = styled.div`
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 2rem;
`

const ProcessHeading = styled(SectionHeading)`
  color: ${props => props.theme.body};

  &::after {
    background-color: rgb(255, 255, 255);
    height: 2px;
    max-width: 100px;
  }
`

const ProcessRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 8%;
    right: 8%;
    border-top: 1.5px dashed rgba(255, 255, 255, 0.25);
    z-index: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);

    &::before {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;

  div {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    img{
      width: 24px;
      height: 24px;
    }
  }

  strong {
    font-size: 0.8rem;
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 0.6rem;
    line-height: 1.4;
    opacity: 0.75;
  }
`

const FeaturesSection = styled.div`
  padding: 2rem;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCol = styled.div`
  h4 {
    font-family: 'Karla', sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.72rem;
    line-height: 1.5;
    opacity: 0.75;
    margin-bottom: 0.75rem;
  }
`

const FeatureMockup = styled.div`
  width: 100%;
  max-width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  text-align: center;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`

const processIcons = ['✎', '◎', '🌱', '▦', '☑', '🚀']

const ShortTemplate = ({ data }) => {
  const { hero, overview, problem, goal, process, features } = data

  return (
    <Page>
      <Hero>
        <div>
        <HeadingContainer>
            <BackLink to="/mywork" aria-label="Back to projects">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </BackLink>
            <SubheadingContainer>
              <HeroLabel>{hero.label}</HeroLabel>
            </SubheadingContainer>
          </HeadingContainer>
          <Brand>
            <img src={hero.logo}></img>
          </Brand>
          <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
          <HeroDesc>{hero.description}</HeroDesc>
          <TagRow>
            {hero.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagRow>
          <CtaButton href={hero.ctaLink} target="_blank" rel="noreferrer">
            {hero.ctaLabel} →
          </CtaButton>
        </div>
        <HeroImage>
          {hero.image ? (
            <img src={hero.image} alt={hero.brand} />
          ) : hero.images?.length ? (
            hero.images.map((src, i) => <img key={i} src={src} alt={`${hero.brand} ${i + 1}`} />)
          ) : (
            <ImagePlaceholder>App Mockup</ImagePlaceholder>
          )}
        </HeroImage>
      </Hero>

      <Card>
        <OverviewBar>
          <MetaBlock>
            <img src={overview.roleImg} alt="Product" />
            <BlockItemRight>
              <span>MY ROLE</span>
              <p>{overview.role}</p>
            </BlockItemRight>
          </MetaBlock>
          <MetaBlock>
            <img src={overview.timelineImg} alt="timeline" />
            <BlockItemRight>
              <span>TIMELINE</span>
              <p>{overview.timeline}</p>
            </BlockItemRight>
          </MetaBlock>
          <MetaBlock>
            <img src={overview.platformImg} alt="platform" />
            <BlockItemRight>
              <span>PLATFORM</span>
              <p>{overview.platform}</p>
            </BlockItemRight>
          </MetaBlock>
          <MetaBlock>
            <img src={overview.toolsImg} alt="platform" />
            <BlockItemRight>
              <span>TOOLS</span>
              <ToolTags>
                {overview.tools.map(tool => (
                  <span key={tool}>{tool}</span>
                ))}
              </ToolTags>
            </BlockItemRight>
          </MetaBlock>
        </OverviewBar>
      </Card>

      <Card>
        <ProblemGoalGrid>
          <ProblemGoalCol>
            <SectionHeading>01 THE PROBLEM</SectionHeading>
            <BodyText>{problem.description}</BodyText>
            <XList>
              {problem.points.map(point => (
                <li key={point}>
                  <img src={problem.pointImg}></img>
                  {point}
                </li>
              ))}
            </XList>
          </ProblemGoalCol>
          <ProblemGoalCol>
            <SectionHeading>02 THE GOAL</SectionHeading>
            <BodyText>{goal.description}</BodyText>
            <GoalGrid>
              {goal.cards.map(card => (
                <GoalCard key={card.title}>
                  <img src={card.image}></img>
                  <div>
                    <strong>{card.title}</strong>
                    {card.subtitle}
                  </div>
                </GoalCard>
              ))}
            </GoalGrid>
          </ProblemGoalCol>
        </ProblemGoalGrid>

        <ProcessSection>
          <ProcessHeading>03 DESIGN PROCESS</ProcessHeading>
          <ProcessRow>
            {process.map((step, i) => (
              <ProcessStep key={step.title}>
                <div><img src={step.image}></img></div>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </ProcessStep>
            ))}
          </ProcessRow>
        </ProcessSection>
      </Card>

      <Card>
        <FeaturesSection>
          <SectionHeading>04 KEY FEATURES &amp; SOLUTIONS</SectionHeading>
          <FeaturesGrid>
            {features.map(feature => (
              <FeatureCol key={feature.title}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <FeatureMockup>
                  {feature.image ? (
                    <img src={feature.image} alt={feature.title} />
                  ) : (
                    'Mockup'
                  )}
                </FeatureMockup>
              </FeatureCol>
            ))}
          </FeaturesGrid>
        </FeaturesSection>
      </Card>
    </Page>
  )
}

export default ShortTemplate
