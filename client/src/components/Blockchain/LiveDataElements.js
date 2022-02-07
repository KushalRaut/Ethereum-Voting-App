import styled from 'styled-components'

export const NavBarContainer = styled.div`
  width: 100%;
  min-height: 90px;
  background-color: #292b2c;
`
export const NavbarContent = styled.div`
  width: 83%;
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
  font-size: 2.1rem;
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
  font-size: 1.3rem;
  color: white;
`
export const LiveContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  min-width: 83%;
  max-width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const PageTitle = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderButtons = styled.button`
  background-color: #01bf71;
  font-size: 1.2rem;
  text-align: center;
  margin-right: 1rem;
  height: 43px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  color: white;
  font-family: 'Encode Sans Expanded', sans-serif;
  padding: 0 0.8rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`
export const FirstRow = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1300px) {
  }
`
export const LongColumn = styled.div`
  width: 50%;
  margin: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(97, 97, 97, 0.52);
  @media screen and (max-width: 1100px) {
    min-width: 100%;
    margin: 0;
  }
`
export const BarGraphContainer = styled.div``
export const ShortColumn = styled.div`
  width: 45%;
  padding-top: 1rem;
  overflow: hidden;
  background-color: white;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(97, 97, 97, 0.52);
  @media screen and (max-width: 1100px) {
    min-width: 100%;
    margin: 0;
  }
`
export const SecondRow = styled.div`
  min-height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5rem;
`
export const LastFetech = styled.div`
  font-size: 1.1rem;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-style: italic;
  padding: 0 1rem;
`
export const LastRow = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
  }
`

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Encode Sans Expanded', sans-serif;
`
export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 0.7rem;
  display: flex;
  justify-content: space-around;
`

export const Card = styled.div`
  margin-bottom: 0.7rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(97, 97, 97, 0.52);
`
export const CardImg = styled.img`
  width: 130px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
`

export const LeadingSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`
export const LineCardContainer = styled.div`
  width: 100%;
  display: flex;
`
