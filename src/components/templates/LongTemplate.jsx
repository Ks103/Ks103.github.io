import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bulb from '../../assets/Images/bulb.svg'
const Page = styled.div`
  padding: 5.5rem calc(2rem + 6vw) 4rem calc(2rem + 8vw);
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem 3rem;
  }
`

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const HeroLabel = styled.span`
  display: block;
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  // span:first-child {
  //   font-size: 1.1rem;
  //   color: #e85d2a;
  // }

  span:last-child {
    font-family: 'Karla', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
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
    max-width: 420px;
    max-height: 350px;
    object-fit: contain;
  }
`

const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 420px;
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
  padding: 2rem;
  margin-bottom: 1.5rem;
`

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SidebarTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const MetaBlock = styled.div`
  margin-bottom: 1.25rem;

  h4 {
    font-family: 'Karla', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 0.35rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  p,
  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.82rem;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

const SectionTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const BodyText = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.88rem;
  line-height: 1.65;
  opacity: 0.8;
  margin-bottom: 0.75rem;
`

const BulletList = styled.ul`
  list-style: disc;
  margin: 0.5rem 0 0.75rem 1.25rem;
  padding: 0;

  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.85rem;
    line-height: 1.6;
    opacity: 0.8;
    margin-bottom: 0.35rem;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px dashed rgba(0, 0, 0, 0.15);
  margin: 1.5rem 0;
`

const CheckGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem 2rem;
  margin-top: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.8;

  &::before {
    content: '✓';
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    margin-top: 2px;
  }
`

const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CompareCard = styled(Card)`
  margin-bottom: 0;
  padding: 1.5rem 0.5rem 1.5rem 1.5rem;
`

const CompareTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CompareBody = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const CompareList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
    opacity: 0.8;
  }
`

const CompareThumb = styled.div`
  min-width: 120px;
  min-height: 120px;
  max-width: 200px;
  max-height: 200px;
  border: 1px dashed rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  text-align: center;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`

const OutcomeCard = styled.section`
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 12px;
  background-color: ${props => props.theme.body};

  padding: 1.75rem;

  display: flex;
  align-items: center;

  gap: 2rem;

  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const OutcomeInfo = styled.div`
  flex: 0 0 280px;
  max-width: 280px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;  

const OutcomeTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-family: 'Karla', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  margin-bottom: 1rem;

  span {
    font-size: 1rem;
  }
`;

const OutcomeDescription = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  opacity: 0.75;
  margin: 0;
`;

const MetricsRow = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  text-align: center;

  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-left: 1px solid rgba(0, 0, 0, 0.12);

  &:first-child {
    border-left: none;
  }

  strong {
    display: block;

    font-family: 'Karla', sans-serif;
    font-size: 2rem;
    font-weight: 700;

    margin-bottom: 0.6rem;
  }

  span {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.82rem;
    line-height: 1.5;

    opacity: 0.75;
  }

  @media (max-width: 900px) {
    padding: 1.25rem;
    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    &:first-child {
      border-top: none;
    }
  }
`;

const MetricIcon = styled.div`
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const TakeawayCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TakeawayLeft = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const BulbIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`

const TakeawayText = styled.div`
  h3 {
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.85rem;
    line-height: 1.65;
    opacity: 0.8;
  }
`

const StepsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 10%;
    right: 10%;
    border-top: 1.5px dashed rgba(0, 0, 0, 0.8);
    z-index: 0;
  }
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
  flex: 1;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
  }

  span {
    font-family: 'Karla', sans-serif;
    font-size: 0.62rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.3;
    max-width: 90px;
  }
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

const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`
const SubheadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const stepIcons = ['👤', '✦', '🤖', '◎']
const listIcon = (type) => (type === 'before' ? '✕' : '✓')

const LongTemplate = ({ data }) => {
  const {
    hero,
    overview,
    introduction,
    problemStatement,
    solution,
    redesign,
    outcome,
    takeaway,
  } = data

  const half = Math.ceil(solution.points.length / 2)
  const solutionLeft = solution.points.slice(0, half)
  const solutionRight = solution.points.slice(half)

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
              <Brand>
                <span>{hero.brand}</span>
              </Brand>
            </SubheadingContainer>
          </HeadingContainer>
          <HeroTitle>{hero.headline}</HeroTitle>
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
          ) : (
            <ImagePlaceholder>Project Mockup</ImagePlaceholder>
          )}
        </HeroImage>
      </Hero>

      <Card>
        <OverviewGrid>
          <aside>
            <SidebarTitle>▦ PROJECT OVERVIEW</SidebarTitle>
            <MetaBlock>
              <h4>⊞ PRODUCT</h4>
              <p>{overview.product}</p>
            </MetaBlock>
            <MetaBlock>
              <h4>🖥 PLATFORM</h4>
              <p>{overview.platform}</p>
            </MetaBlock>
            <MetaBlock>
              <h4>📅 TIMELINE</h4>
              <p>{overview.timeline}</p>
            </MetaBlock>
            <MetaBlock>
              <h4>▣ MY ROLE</h4>
              <p>{overview.role}</p>
            </MetaBlock>
            <MetaBlock>
              <h4>👤 TEAM</h4>
              <ul>
                {overview.team.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MetaBlock>
            <MetaBlock>
              <h4>✦ SKILLS</h4>
              <ul>
                {overview.skills.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </MetaBlock>
            <MetaBlock>
              <h4>📊 IMPACT</h4>
              <p>{overview.impact}</p>
            </MetaBlock>
          </aside>

          <div>
            <SectionTitle>✿ INTRODUCTION</SectionTitle>
            {introduction.map((para, i) => (
              <BodyText key={i}>{para}</BodyText>
            ))}

            <Divider />

            <SectionTitle>✿ PROBLEM STATEMENT</SectionTitle>
            <BodyText>{problemStatement.intro}</BodyText>
            <BulletList>
              {problemStatement.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </BulletList>
            <BodyText>{problemStatement.closing}</BodyText>

            <Divider />

            <SectionTitle>✿ THE SOLUTION</SectionTitle>
            <BodyText>{solution.intro}</BodyText>
            <CheckGrid>
              <div>
                {solutionLeft.map(point => (
                  <CheckItem key={point}>{point}</CheckItem>
                ))}
              </div>
              <div>
                {solutionRight.map(point => (
                  <CheckItem key={point}>{point}</CheckItem>
                ))}
              </div>
            </CheckGrid>
          </div>
        </OverviewGrid>
      </Card>

      <CompareGrid>
        <CompareCard>
          <CompareTitle>% {redesign.before.title}</CompareTitle>
          <CompareBody>
            <CompareList>
              {redesign.before.points.map(point => (
                <li key={point}>
                  <span>{listIcon('before')}</span>
                  {point}
                </li>
              ))}
            </CompareList>
            <CompareThumb>
              {redesign.before.image ? (
                <img src={redesign.before.image} alt="Before" />
              ) : (
                'UI Preview'
              )}
            </CompareThumb>
          </CompareBody>
        </CompareCard>

        <CompareCard>
          <CompareTitle>% {redesign.after.title}</CompareTitle>
          <CompareBody>
            <CompareList>
              {redesign.after.points.map(point => (
                <li key={point}>
                  <span>{listIcon('after')}</span>
                  {point}
                </li>
              ))}
            </CompareList>
            <CompareThumb>
              {redesign.after.image ? (
                <img src={redesign.after.image} alt="After" />
              ) : (
                'UI Preview'
              )}
            </CompareThumb>
          </CompareBody>
        </CompareCard>
      </CompareGrid>

      <OutcomeCard>
        <OutcomeInfo>
          <OutcomeTitle>
            <span>🏆</span>
            {outcome.title}
          </OutcomeTitle>

          <OutcomeDescription>
            {outcome.description}
          </OutcomeDescription>
        </OutcomeInfo>

        <MetricsRow>
          {outcome.metrics.map((metric, index) => (
            <Metric key={metric.label}>
              <MetricIcon>
                <img src={metric.icon} alt="" />
              </MetricIcon>

              <strong>{metric.value}</strong>

              <span>{metric.label}</span>
            </Metric>
          ))}
        </MetricsRow>
      </OutcomeCard>

      <TakeawayCard>
        <TakeawayLeft>
          <BulbIcon>
            <img src={bulb}></img>
          </BulbIcon>
          <TakeawayText>
            <h3>KEY TAKEAWAY</h3>
            <p>{takeaway.text}</p>
          </TakeawayText>
        </TakeawayLeft>
        <StepsRow>
          {takeaway.steps.map((step, i) => (
            <Step key={step}>
              <div>{stepIcons[i]}</div>
              <span>{step}</span>
            </Step>
          ))}
        </StepsRow>
      </TakeawayCard>
    </Page>
  )
}

export default LongTemplate
