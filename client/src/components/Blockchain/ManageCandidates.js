import React, { useEffect, useState } from 'react'
import Electionabi from '../../contracts/Election.json'
import axios from 'axios'
import { MDBDataTable } from 'mdbreact'
import Navbar from '../Layouts/Navbar'
import '../../screens/Voter/voterDashboard.css'
import EditCandidate from './EditCandidate'
import { Link } from 'react-router-dom'
import { RiDashboardLine } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { AiFillFileAdd } from 'react-icons/ai'
import { MdManageAccounts, MdReportProblem } from 'react-icons/md'
const Web3 = require('web3')

const ManageCandidates = () => {
  useEffect(() => {
    loadWeb3()
    LoadBlockchaindata()
  }, [])

  const [currentaccount, setcurrentaccount] = useState('')
  const [candidates, setCandidates] = useState([])
  const [Electionsm, setElectionsm] = useState()
  const [editCandidate, setEditCandidate] = useState(false)
  const [editCandidateObj, setEditCandidateObj] = useState({})

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
      setElectionsm(election)
      console.log(candidates)
    } else {
      window.alert('the smart contract is not deployed in current network')
    }
  }

  const deleteCandidates = async (id) => {
    await Electionsm.methods
      .delCandidates(id)
      .send({ from: currentaccount })
      .on('transactionhash', () => {
        console.log('successfully deleted', id)
      })

    window.location.reload()
  }

  const editCandidates = async (id, name, party, citizenshipNo, dob, email) => {
    await Electionsm.methods
      .editCandidates(id, name, party, citizenshipNo, dob, email)
      .send({ from: currentaccount })
      .on('transactionhash', () => {
        console.log('successfully edited', id)
      })
    setEditCandidate(false)
    window.location.reload()
  }

  const editHandler = (edit) => {
    setEditCandidate(true)
    setEditCandidateObj(edit)
  }

  const candidateData = () => {
    const data = {
      columns: [
        {
          label: 'Candidate Id',
          field: 'id',
          sort: 'asc',
          width: 50,
        },
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Citizenship No.',
          field: 'citizenno',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Party',
          field: 'party',
          sort: 'asc',
          width: 50,
        },
        {
          label: 'DOB',
          field: 'dob',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Actions',
          field: 'actions',
        },
      ],
      rows: [],
    }

    candidates.forEach((candidate) => {
      data.rows.push({
        id: candidate.id,
        name: candidate.name,
        email: candidate.email,
        citizenno: candidate.citizenshipNo,
        party: candidate.party,
        dob: candidate.dob,
        actions: (
          <>
            <button
              className="btn btn-success mx-1"
              onClick={() => {
                editHandler(candidate)
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteCandidates(candidate.id)
              }}
            >
              Del
            </button>
          </>
        ),
      })
    })

    return data
  }

  return (
    <>
      <div>
        <Navbar account={currentaccount} />
        <div className="row dashboard-container">
          {/* Sidebar */}
          <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/dashboard" className="link d-block">
                  <RiDashboardLine />
                  <span className="mx-3 py-2">Dashboard</span>
                </Link>
              </div>
            </div>

            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/addCandidate" className="link d-block">
                  <AiFillFileAdd />
                  <span className="mx-3 py-2">Add Candidate</span>
                </Link>
              </div>
            </div>

            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/manageCandidates" className="link d-block">
                  <FaUserEdit />
                  <span className="mx-3 py-2">Manage Candidate</span>
                </Link>
              </div>
            </div>

            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/chatbot" className="link d-block">
                  <RiQuestionnaireFill />
                  <span className="mx-3 py-2">Manage Chatbot Questions</span>
                </Link>
              </div>
            </div>
            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/manageVoters" className="link d-block">
                  <MdManageAccounts />
                  <span className="mx-3 py-2">Manage Voters</span>
                </Link>
              </div>
            </div>
            <div className="sidebar-items">
              <div className="sidebar-titles py-3 px-1">
                <Link to="/admin/report" className="link d-block">
                  <MdReportProblem />
                  <span className="mx-3 py-2">Report Problem</span>
                </Link>
              </div>
            </div>
          </div>

          {/* DashBoard */}
          <div className="dashboard col-12 col-lg-9 col-md-7 col-sm-6 p-0">
            {editCandidate ? (
              <>
                <EditCandidate
                  candidate={editCandidateObj}
                  editFunction={editCandidates}
                />
              </>
            ) : (
              <>
                <div className="row m-4 py-2 overflow-hidden">
                  <h1>CANDIDATES LIST</h1>
                  <hr />
                  <MDBDataTable striped data={candidateData()} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageCandidates
