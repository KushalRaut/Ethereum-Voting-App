import { useEffect, useState } from 'react'
import Electionabi from '../../contracts/Election.json'
import Navbar from './Navbar'
import Body from './Body'
import './body.css'

const Web3 = require('web3')

const Vote = () => {
  useEffect(() => {
    loadWeb3()
    LoadBlockchaindata()
  }, [])

  const [currentaccount, setcurrentaccount] = useState('')

  const [candidates, setCandidates] = useState([])

  const [Electionsm, SetElectionsm] = useState()

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
      SetElectionsm(election)
    } else {
      window.alert('the smart contract is not deployed in current network')
    }
  }

  console.log(candidates)
  const votecandidate = async (candidateid) => {
    // setLoader showed some errors

    await Electionsm.methods
      .Vote(candidateid)
      .send({ from: currentaccount })
      .on('transactionhash', () => {
        console.log('Successfully ran')
      })

    window.location.reload()
  }

  return (
    <>
      <div className="vote-container">
        <Navbar account={currentaccount} />
        <Body candidates={candidates} voteCandidate={votecandidate} />
      </div>
    </>
  )
}

export default Vote
