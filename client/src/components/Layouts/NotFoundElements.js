import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Encode Sans Expanded', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Text = styled.h1`
  font-size: 2.5rem;
`

export const ImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const SuggestText = styled.h3`
  width: 90%;
  text-align: center;
  margin-bottom: 1rem;
`
export const LoadBtn = styled.button`
  width: 180px;
  height: 50px;
  background-color: #01bf71;
  color: white;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #D3D3D3;

  &:hover{
      transform: scale(1.1);
      transition: 0.5s ease-in-out ;
  }
`
