import React, { useState } from "react";
import "./body.css";
import CandidateCard from "./CandidateCard";
import Gagan from "./LeaderImages/GTNCP.jpg";
import SherBD from "./LeaderImages/SBDNCP.jpg";
import BabuRB from "./LeaderImages/BRBM.jpg";
import KPOli from "./LeaderImages/KPOLICPN.jpg";
import PKDM from "./LeaderImages/PKDM.jpg";
import KTRPP from "./LeaderImages/KTRPP.jpg";
import BidDB from "./LeaderImages/BDBP.jpg";
import MKNPM from "./LeaderImages/MKPM.jpg";
import PMS from "./LeaderImages/PMSNCP.jpg";

const Body = ({
  candidate1,
  candidate2,
  candidate3,
  candidate4,
  candidate5,
  candidate6,
  candidate7,
  candidate8,
  candidate9,
  voteCandidate,
}) => {
  const [Candidate, setCandidate] = useState("");

  return (
    <div>
      <div className="vote-body">
        <h1 className="w-100 text-center">CANDIDATE LIST</h1>
        <CandidateCard
          className="candidate-card"
          candidateName="Gagan Thapa"
          candidateId="1"
          candidateVC={candidate1.votecount}
          candidateImg={Gagan}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Sher Bahadur Deuba"
          candidateId="2"
          candidateVC={candidate2.votecount}
          candidateImg={SherBD}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Baburam Bhattarai"
          candidateId="3"
          candidateVC={candidate3.votecount}
          candidateImg={BabuRB}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="KP Oli"
          candidateId="4"
          candidateVC={candidate4.votecount}
          candidateImg={KPOli}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Puspa Kamal Dahal"
          candidateId="5"
          candidateVC={candidate5.votecount}
          candidateImg={PKDM}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Kamal Thapa"
          candidateId="6"
          candidateVC={candidate6.votecount}
          candidateImg={KTRPP}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Bidya Devi Bhandari"
          candidateId="7"
          candidateVC={candidate7.votecount}
          candidateImg={BidDB}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Madhav Kumar Nepal"
          candidateId="8"
          candidateVC={candidate8.votecount}
          candidateImg={MKNPM}
          voteCandidate={voteCandidate}
        ></CandidateCard>
        <CandidateCard
          className="candidate-card"
          candidateName="Prakash Man Singh"
          candidateId="9"
          candidateVC={candidate9.votecount}
          candidateImg={PMS}
          voteCandidate={voteCandidate}
        ></CandidateCard>
      </div>
      {/* <div className="forms">
        <form onSubmit={onsubmit}>
          <select name="candidate" className="form-control" onChange={onchange}>
            <option defaultValue value="">
              Select
            </option>
            <option value="1">{candidate1.name}</option>
            <option value="2">{candidate2.name}</option>
            <option value="3">{candidate3.name}</option>
            <option value="4">{candidate4.name}</option>
            <option value="5">{candidate5.name}</option>
          </select>
          <button className="btn btn-primary mt-2 btn-md w-100">
            Vote Candidate{""}
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Body;
