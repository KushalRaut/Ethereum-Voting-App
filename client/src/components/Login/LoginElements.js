import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  font-family: 'Encode Sans Expanded', sans-serif;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );

  @media screen and (max-width: 900px) {
    padding: 5rem 0;
  }
`

export const Wrapper = styled.div`
  width: 68%;
  padding: 2rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`

export const ImgWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: auto;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: auto;
  object-fit: scale-down;

  @media screen and (max-width: 900px) {
    margin: 2rem;
    padding: 0 2rem;
  }
`

export const FormWrap = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const FormContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 95%;
    margin: 2rem auto;
  }
`

export const Form = styled.form`
  background: white;
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const SiteLogo = styled(Link)`
  display: block;
  font-size: 3rem;
  color: #01bf71;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 1px solid black;
  border-radius: 4px;
  height: 50px;
`

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  cursor: pointer;
`

export const Text = styled(Link)`
  text-align: start;
  margin-top: 24px;
  color: black;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    font-weight: bold;
  }
`
export const ErrorText = styled.span`
  color: white;
`
