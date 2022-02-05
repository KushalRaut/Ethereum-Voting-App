import React from 'react'
import './candidateCard.css'

const CandidateCard = ({ candidate, voteCandidate }) => {
  const voteHandler = (e) => {
    e.preventDefault()
    voteCandidate(Number(e.target.value))
  }

  return (
    <div className="main_card shadow-lg m-4">
      <img src={`${candidate.img}`} className="candidate-img w-75 h-100"></img>

      <hr />
      <div className="body-container">
        <p>Name: {candidate.name} </p>
        <p>Party: {candidate.party} </p>
        <p>DOB: {candidate.dob} </p>

        <p>Vote Count: {candidate.votecount} </p>

        <button value={candidate.id} onClick={voteHandler} className="vote-btn">
          VOTE
        </button>
      </div>
    </div>
  )
}

export default CandidateCard
