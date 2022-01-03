import React from "react";
import "./candidateCard.css";

const CandidateCard = ({
  candidateName,
  candidateId,
  candidateVC,
  candidateImg,
  voteCandidate,
}) => {
  const voteHandler = (e) => {
    e.preventDefault();
    voteCandidate(Number(e.target.value));
  };

  return (
    <div className="main_card shadow-lg m-4">
      <div className="img-container">
        <img src={candidateImg} className="w-75 h-100"></img>
      </div>
      <hr className="mx-auto"></hr>
      <div className="body-container">
        <div className="m-2">
          <p className="">Name: {candidateName}</p>
        </div>
        <div className="m-2">
          <p className="">Vote Count: {candidateVC}</p>
        </div>
        <div id="btn-container" className="m-2">
          <button
            id="vote"
            value={candidateId}
            onClick={voteHandler}
            className="btn btn-primary"
          >
            VOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
