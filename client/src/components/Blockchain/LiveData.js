import React, { useState, useEffect } from 'react'
import Electionabi from '../../contracts/Election.json'
import {
  AccountInfo,
  LiveContainer,
  NavBarContainer,
  NavbarContent,
  NavBarLogo,
  NavBarText,
  Wrapper,
  Header,
  PageTitle,
  HeaderButtons,
  ButtonsContainer,
  FirstRow,
  LongColumn,
  ShortColumn,
  SecondRow,
  LastFetech,
  LastRow,
  SectionTitle,
  BarGraphContainer,
  Card,
  CardImg,
  CardText,
  CardsContainer,
  LeadingSectionContainer,
  LineCardContainer,
} from './LiveDataElements'
import { SiHiveBlockchain } from 'react-icons/si'
import PieChart from '../../screens/Voter/Voter-Components/PieChart'
import BarGraph from '../../screens/Voter/Voter-Components/BarGraph'
import LineChart from '../../screens/Voter/Voter-Components/LineChart'

const Web3 = require('web3')

const LiveData = () => {
  useEffect(() => {
    loadWeb3()
    LoadBlockchaindata()
  }, [])

  const [currentaccount, setcurrentaccount] = useState('')
  const [candidates, setCandidates] = useState([])
  const [Electionsm, setElectionsm] = useState()

  //Metamask popup
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Non-Ethereum Browser Detected . Please install metamask')
    }
  }

  //load the data from blockchain
  const LoadBlockchaindata = async () => {
    const web3 = window.web3
    //you need to make a loader and set it to true here

    const accounts = await web3.eth.getAccounts()
    const account = accounts[0]

    setcurrentaccount(account)

    const networkId = await web3.eth.net.getId()

    const networkData = Electionabi.networks[networkId]

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      )

      const totalCandidates = await election.methods.candidatesCount().call()

      let candidate = []
      for (let i = 1; i <= totalCandidates; i++) {
        const { id, name, votecount, party, citizenshipNo, dob, img, email } =
          await election.methods.candidates(i).call()

        candidate[i - 1] = {
          id,
          name,
          votecount,
          party,
          citizenshipNo,
          dob,
          img,
          email,
        }
      }

      setCandidates(candidate)
      setElectionsm(election)
    } else {
      window.alert('the smart contract is not deployed in current network')
    }
  }
  let presentAccount
  if (currentaccount) {
    const firstPart = currentaccount.substring(0, 6)
    const lastPart = currentaccount.substring(currentaccount.length - 5)
    presentAccount = firstPart + '....' + lastPart
  }
  return (
    <>
      <NavBarContainer>
        <NavbarContent>
          <NavBarLogo>
            <NavBarText>
              <SiHiveBlockchain />
              E-Vote Nepal
            </NavBarText>
          </NavBarLogo>
          <AccountInfo>Current Account: {presentAccount}</AccountInfo>
        </NavbarContent>
      </NavBarContainer>
      <LiveContainer>
        <Wrapper>
          <Header>
            <PageTitle>View Realtime Results</PageTitle>
            <ButtonsContainer>
              <HeaderButtons>Fetch Latest Data</HeaderButtons>
              <HeaderButtons>Go Back</HeaderButtons>
            </ButtonsContainer>
          </Header>
          <FirstRow>
            <ShortColumn>
              <SectionTitle>&nbsp;&nbsp;Doughnut Chart</SectionTitle>
              <PieChart candidates={candidates} />
            </ShortColumn>
            <LongColumn>
              <SectionTitle>Bar Graph</SectionTitle>
              <BarGraphContainer>
                <BarGraph candidates={candidates} />
              </BarGraphContainer>
            </LongColumn>
          </FirstRow>
          <SecondRow>
            <LastFetech>Last Update: 2022-02-03 12:58 AM</LastFetech>
          </SecondRow>
          <LastRow>
            <LongColumn>
              <SectionTitle>Top 3 Candidates</SectionTitle>
              <CardsContainer>
                <Card>
                  <CardImg src="" alt="no-img" />
                  <CardText>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                  </CardText>
                </Card>
                <Card>
                  <CardImg
                    src="https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg"
                    alt="no-img"
                  />
                  <CardText>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                  </CardText>
                </Card>
                <Card>
                  <CardImg src="" alt="no-img" />
                  <CardText>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                    <p>Name: Kushal Raut</p>
                  </CardText>
                </Card>
              </CardsContainer>
            </LongColumn>
            <ShortColumn>
              <LeadingSectionContainer>
                <SectionTitle>Leading Party</SectionTitle>
                <LineCardContainer>
                  <LineChart candidates={candidates} />
                </LineCardContainer>
              </LeadingSectionContainer>
            </ShortColumn>
          </LastRow>
        </Wrapper>
      </LiveContainer>
    </>
  )
}

export default LiveData
