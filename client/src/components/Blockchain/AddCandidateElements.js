import styled from 'styled-components'

export const NavBarContainer = styled.div`
  width: 100%;
  min-height: 90px;
  background-color: #292b2c;
`
export const NavbarContent = styled.div`
  width: 95%;
  min-height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0 0.7rem;
  }
`
export const NavBarLogo = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`
export const NavBarText = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.9rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: white;

  @media screen and (max-width: 660px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`

export const AccountInfoBtn = styled.button`
  background-color: transparent;
  border: none;
`
export const AccountInfo = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: white;
`
export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Encode Sans Expanded', sans-serif;
`
export const FormWrap = styled.form`
  width: 70%;
  background-color: rgb(247, 247, 247);
  border: 1px solid rgb(189, 189, 189);
  border-radius: 4px;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`
export const InputGroupContainer = styled.div`
  width: 100%;
  display: flex;
`

export const InputGroup = styled.div`
  width: 50%;
`
export const FormLabel = styled.label`
  margin-top: 0.9rem;
  font-size: 1rem;
`
export const InputField = styled.input`
  display: block;
  width: 92%;
  align-self: flex-start;
  height: 38px;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 4px;
`
export const SubmitButton = styled.button`
  height: 45px;
  border: 1px solid #fff;
  background-color: #01BF71;
  font-weight: 500;
  border-radius: 4px;
  width: 25%;
  margin: 1rem auto;
  color: #fff;
  font-size: 1.2rem;
`
