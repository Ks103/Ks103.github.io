import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled(Link)`
  position: relative;
  display: flex;
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 12px;
  background-color: ${props => props.theme.body};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 48%;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const NumberBadge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-family: 'Karla', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.55rem;
  z-index: 2;
`

const DotGrid = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: grid;
  grid-template-columns: repeat(3, 4px);
  gap: 4px;
  z-index: 2;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
    opacity: 0.1;
  }
`

const Content = styled.div`
  flex: 1;
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
`

const Category = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.6;
`

const Title = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  line-height: 1.1;
  color: ${props => props.theme.text};
`

const Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${props => props.theme.text};
  opacity: 0.75;
  max-width: 32rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`

const Tag = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.3rem 0.65rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 20px;
  opacity: 0.8;
`

const ArrowLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1.5px solid ${props => props.theme.text};
  border-radius: 50%;
  color: ${props => props.theme.text};
  text-decoration: none;
  margin-top: auto;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`

const ImageWrapper = styled.div`
  flex: 0 0 42%;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;

  img {
    width: auto;
    height: auto;

    max-width: 10rem;
    max-height: 20rem;

    object-fit: contain;
    display: block;
  }

  @media (max-width: 900px) {
    flex: none;
    min-height: 200px;

    img {
      width: 100%;
      height: 100%;
      max-width: 10rem;
      max-height: 20rem;
      object-fit: contain;
    } 
  }
`;


const Placeholder = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.25;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const WorkProjectCard = ({ project, activeTab }) => {
  const { id, number, categoryLabel, title, description, tags, image } = project

  return (
    <Card to={`/mywork/${id}`}>
      {/* <NumberBadge>{number}</NumberBadge> */}
      <DotGrid>
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} />
        ))}
      </DotGrid>

      <Content>
        {/* {activeTab === 'all' && (
          <Category>{categoryLabel}</Category>
        )} */}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        {/* <ArrowLink to={`/mywork/${id}`} aria-label={`View ${title}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </ArrowLink> */}
      </Content>

      {/* <ImageWrapper>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <Placeholder>{title}</Placeholder>
        )}
      </ImageWrapper> */}
    </Card>
  )
}

export default WorkProjectCard
