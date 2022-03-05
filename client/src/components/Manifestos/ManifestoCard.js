import React from 'react'
import styled from 'styled-components'
import NCPSym from './NCPSym.jpg'

const CardContainer = styled.div`
  width: 95%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: white;
`

const CardImage = styled.img`
  object-fit: cover;
  margin: auto;
  display: block;
  height: 300px;
  width: 400px;
  object-fit: contain;
`

const CardTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const ManifestoCard = ({ manifesto }) => {
  console.log(manifesto)
  const createdAt = manifesto.createdAt
  const date = new Date(createdAt)
  return (
    <CardContainer>
      <CardTitle>Manifesto by: {manifesto.partyName}</CardTitle>
      <span className="fs-5">
        <b>Manifesto Keywords</b> : <i>{manifesto.manifestoWords}</i>
      </span>

      <CardImage src={manifesto.partyImage} />
      <span className="fs-5">{manifesto.manifestoDescription}</span>
      <span>
        <i>
          Posted at:
          {date.getDate() +
            ' ' +
            date.toLocaleString('default', { month: 'long' }) +
            ' ' +
            date.getFullYear() +
            ' at ' +
            date.getUTCHours() +
            ':' +
            date.getUTCMinutes()}
        </i>
      </span>
    </CardContainer>
  )
}

export default ManifestoCard
