import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { projects } from '../data/MyWorkData'
import { getProjectDetail } from '../data/MyWorkDetailData'
import MyWorkLayout from './MyWorkLayout'
import LongTemplate from './templates/LongTemplate'
import ShortTemplate from './templates/ShortTemplate'

const BackLink = styled(Link)`
  position: fixed;
  top: 2rem;
  left: calc(5rem + 4vw);
  z-index: 4;
  display: inline-flex;
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

const MyWorkDetailPage = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))
  const detail = getProjectDetail(id)

  if (!project || !detail) {
    return <Navigate to="/mywork" replace />
  }

  return (
    <MyWorkLayout>
      <BackLink to="/mywork" aria-label="Back to projects">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </BackLink>

      {detail.template === 'long' && <LongTemplate data={detail} />}
      {detail.template === 'short' && <ShortTemplate data={detail} />}
    </MyWorkLayout>
  )
}

export default MyWorkDetailPage
