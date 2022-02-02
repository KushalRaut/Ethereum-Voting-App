import React from 'react'
import {
  Wrapper,
  TextWrapper,
  Text,
  ImageWrapper,
  Image,
  SuggestText,
  LoadBtn,
} from './NotFoundElements'
import NotFoundImg from '../Homepage/images/notfound.svg'

const NotFound = () => {
  const loadWalletHandler = () => {
    window.location.reload()
  }

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Text>Opps we couldn't detect Metamask connected to this site</Text>
        </TextWrapper>
        <ImageWrapper>
          <Image src={NotFoundImg} alt="not found svg" />
        </ImageWrapper>
        <SuggestText>
          Don't worry make sure you are logged in metamask and click button
          below to load your blockchain wallet
        </SuggestText>
        <LoadBtn
          onClick={() => {
            loadWalletHandler()
          }}
        >
          Load your Wallet
        </LoadBtn>
      </Wrapper>
    </>
  )
}

export default NotFound
