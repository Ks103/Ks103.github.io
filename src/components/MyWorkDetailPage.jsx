import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { projects } from '../data/MyWorkData'
import { getProjectDetail } from '../data/MyWorkDetailData'
import MyWorkLayout from './MyWorkLayout'
import LongTemplate from './templates/LongTemplate'
import ShortTemplate from './templates/ShortTemplate'


const MyWorkDetailPage = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))
  const detail = getProjectDetail(id)

  if (!project || !detail) {
    return <Navigate to="/mywork" replace />
  }

  return (
    <MyWorkLayout>
      {detail.template === 'long' && <LongTemplate data={detail} />}
      {detail.template === 'short' && <ShortTemplate data={detail} />}
    </MyWorkLayout>
  )
}

export default MyWorkDetailPage
