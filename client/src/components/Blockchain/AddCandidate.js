import React, { useEffect, useState, useRef } from 'react'
import '../../styles/AddCandidate.css'
import Electionabi from '../../contracts/Election.json'
import axios from 'axios'
const Web3 = require('web3')

const AddCandidate = () => {
  useEffect(() => {
    loadWeb3()
    LoadBlockchaindata()
  }, [])

  const [currentaccount, setcurrentaccount] = useState('')
  const [candidates, setCandidates] = useState([{}])
  const [Electionsm, setElectionsm] = useState()
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()
  const [imageurl, setImageUrl] = useState('')
  const [candidateName, setCandidateName] = useState('')
  const [candidateParty, setCandidateParty] = useState('')
  const [candidateDOB, setCandidateDOB] = useState('')
  const [candidateSlogan, setCandidateSlogan] = useState('')
  const fileInputRef = useRef()

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
        const { id, name, votecount } = await election.methods
          .candidates(i)
          .call()

        candidate[i - 1] = { id, name, votecount }
      }

      setCandidates(candidate)
      setElectionsm(election)
      console.log(candidate)
    } else {
      window.alert('the smart contract is not deployed in current network')
    }
  }

  const addCandidates = async (name, party, dob, img, slogan) => {
    await Electionsm.methods
      .addCandidates(name, party, dob, img, slogan)
      .send({ from: currentaccount })
      .on('transactionhash', () => {
        console.log('successfully added', name)
      })
  }

  useEffect(async () => {
    if (image) {
      const reader = new FileReader()
      try {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'uploads')
        const uploadRes = await axios.post(
          'https://api.cloudinary.com/v1_1/dynbrzezs/image/upload',
          data
        )
        const { url } = uploadRes.data
        setImageUrl(url)
        console.log(url)
      } catch (err) {
        console.log(err)
      }

      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
      setPreview(reader.result)
    } else {
      setPreview(null)
    }
  }, [image])

  const submitHandler = (e) => {
    e.preventDefault()
    addCandidates(
      candidateName,
      candidateParty,
      candidateDOB,
      imageurl,
      candidateSlogan
    )
  }

  return (
    <div className="add-container shadow-lg">
      <form className="px-3" onSubmit={submitHandler}>
        <h3 className="pt-2">New Candidate</h3>
        <label htmlFor="party-name" className="form-label">
          Candidate photo
        </label>
        {preview ? (
          <img src={preview} className="preview-img" />
        ) : (
          <button
            className="img-btn"
            onClick={(e) => {
              e.preventDefault()
              fileInputRef.current.click()
            }}
          >
            Browse
          </button>
        )}
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file && file.type.substr(0, 5) === 'image') {
              setImage(file)
            } else {
              setImage(null)
            }
          }}
        />

        <label htmlFor="party-name" className="form-label">
          Candidate Name
        </label>
        <input
          type="text"
          className="d-block w-100 party"
          value={candidateName}
          onChange={(e) => {
            setCandidateName(e.target.value)
          }}
        />
        <label htmlFor="party-name" className="form-label">
          Candidate Party
        </label>
        <input
          type="text"
          className="d-block w-100 party"
          value={candidateParty}
          onChange={(e) => {
            setCandidateParty(e.target.value)
          }}
        />
        <label htmlFor="party-name" className="form-label">
          Candidate DOB
        </label>
        <input
          type="text"
          className="d-block w-100 party"
          value={candidateDOB}
          onChange={(e) => {
            setCandidateDOB(e.target.value)
          }}
        />
        <label htmlFor="party-name" className="form-label">
          Candidate Slogan
        </label>
        <textarea
          type="text"
          className="d-block w-100 party"
          value={candidateSlogan}
          onChange={(e) => {
            setCandidateSlogan(e.target.value)
          }}
        />
        <button className="w-100 mt-3 submit-button text-white">Submit</button>
      </form>
    </div>
  )
}

export default AddCandidate
