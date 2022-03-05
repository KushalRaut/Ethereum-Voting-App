import React from 'react'
import styled from 'styled-components'
import ComingSoonImg from './comingsoon.svg'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Encode Sans Expanded', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SoonText = styled.h1`
  font-weight: 500;
  font-size: 3rem;
`

const SoonImg = styled.img`
  width: 600px;
  height: 600px;
`

const ComingSoon = () => {
  return (
    <>
      <Container>
        <SoonText>COMING SOON!!!</SoonText>
        <SoonImg src={ComingSoonImg} alt="Coming Soon" />
      </Container>
    </>
  )
}

export default ComingSoon
