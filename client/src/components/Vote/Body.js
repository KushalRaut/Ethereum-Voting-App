import React, { useState } from "react";
import "./body.css";

const Body = ({
  candidate1,
  candidate2,
  candidate3,
  candidate4,
  candidate5,
  voteCandidate,
}) => {
  const [Candidate, setCandidate] = useState("");

  const onchange = (e) => {
    setCandidate(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (Candidate.id !== 0) voteCandidate(Number(Candidate));
    else window.alert("Failed");
  };
  return (
    <div>
      <div className="tables">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Candidate No.</th>
              <th scope="col">Candidate Name</th>
              <th scope="col">Vote Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{candidate1.name}</td>
              <td>{candidate1.votecount}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{candidate2.name}</td>
              <td>{candidate2.votecount}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{candidate3.name}</td>
              <td>{candidate3.votecount}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>{candidate4.name}</td>
              <td>{candidate4.votecount}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>{candidate5.name}</td>
              <td>{candidate5.votecount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="forms">
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
      </div>
    </div>
  );
};

export default Body;
