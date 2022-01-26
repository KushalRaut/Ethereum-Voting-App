import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  font-family: 'Encode Sans Expanded', sans-serif;
  background: #e7e9eb;
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 24px;
  text-decoration: none;
  color: #212529;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }

  &:hover {
    color: #212529;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #212529;
  max-width: 900px;
  width: 90%;
  z-index: 1;
  margin: 0 auto;
  padding: 35px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 600px) {
    height: 89%;
    max-height: auto;
    margin: 5px auto;
  }
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  display: block;
  width: 100%;
  font-weight: bold;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  text-align: start;
`

export const PreviewImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid rgb(189, 189, 189);
`
export const UploadButton = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  border: 2px solid rgb(189, 189, 189);
  background-color: rgb(189, 189, 189);
`
export const UploadText = styled.span`
  color: white;
  position: relative;
  top: 19px;
  left: 35px;
  font-size: 3rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: white;
  min-height: 250px;
`

export const InputCol1 = styled.div`
  width: 50%;
  height: 250px;

  @media screen and (max-width: 680px) {
    min-width: 100%;
  }
`
export const InputCol2 = styled.div`
  width: 50%;
  height: 250px;

  @media screen and (max-width: 680px) {
    min-width: 100%;
  }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  margin-top: 12px;
  font-size: 14px;
  color: #fff;
  font-size: 17px;
  display: block;
`

export const FormInput = styled.input`
  border: none;
  border-radius: 3px;
  height: 38px;
  width: 90%;
  padding: 12px;
  margin: 2px;
  display: block;
`

export const FormButton = styled.button`
  background: #01bf71;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: block;
  margin: 8px auto;
  width: 200px;

  &:hover {
    background-color: #fff;
    color: black;
    transition: 0.4s ease-in-out;
  }
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`
