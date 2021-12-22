// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract Election {
    // struct candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 votecount;
    }

    // candidate count
    uint256 public candidatesCount;

    // mapping candidate
    mapping(uint256 => Candidate) public candidates;

    //mapping a voter
    mapping(address => bool) public votedornot;

    // constructor
    constructor() {
        // Here the candidates are initialized
        addCandidates("KP Oli");
        addCandidates("Sher Bahadur Deuba");
        addCandidates("Gagan Thapa");
        addCandidates("Puspa Kamal Dahal");
        addCandidates("Dr.Baburam Bhattarai");
    }

    //setting the addCandidates as private
    function addCandidates(string memory name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    //setting up the event that is to be triggered once the transaction is done i.e voting
    event electionupdated(uint256 id, string name, uint256 votecount);

    function Vote(uint256 _id) public {
        //make sure that the candiate has not votes
        require(!votedornot[msg.sender], "You have already voted");

        //make sure that the candidate is valid
        require(candidates[_id].id != 0, "The id does not exist");

        //now we increase the vote count of the candidate
        candidates[_id].votecount += 1;

        //now setting the voted value of the voter to be true
        votedornot[msg.sender] = true;

        emit electionupdated(
            _id,
            candidates[_id].name,
            candidates[_id].votecount
        );
    }
}
