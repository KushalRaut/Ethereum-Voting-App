import React, { useState } from 'react'
import './body.css'
import CandidateCard from './CandidateCard'

const Body = ({ candidates, voteCandidate }) => {
  console.log(candidates)
  return (
    <div>
      <div className="vote-body">
        <h1 className="w-100 text-center">CANDIDATE LIST</h1>
        {candidates.length > 0 &&
          candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              voteCandidate={voteCandidate}
            />
          ))}
      </div>
    </div>
  )
}

export default Body
