// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract Election {
    // struct candidate
    struct Candidate {
        uint256 id;
        string name;
        string party;
        string dob;
        string img;
        string slogan;
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
         addCandidates("KP Oli","CPN","22/02/1952","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","I love comedy Nepal");
        addCandidates("Sher Bahadur Deuba","NCP","30/05/1952","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","I don't do anthing");
    }

    //setting the addCandidates as public
     function addCandidates(string memory name,string memory party,string memory dob,string memory img,string memory slogan) public{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount,name,party,dob,img,slogan,0);
    }

    //function to delete the canidate
     function delCandidates(uint id) public{
        while(id < candidatesCount){
            candidates[id] = candidates[id+1];
            id += 1;
        }
        delete candidates[candidatesCount];
        candidatesCount--;
    }



    //setting up the event that is to be triggered once the transaction is done i.e voting
     event votesuccess(
        uint id,
        string name,
        string party,
        uint votecount
    );

    function Vote(uint256 _id) public {
        //make sure that the candiate has not votes
        require(!votedornot[msg.sender], "You have already voted");

        //make sure that the candidate is valid
        require(candidates[_id].id != 0, "The id does not exist");

        //now we increase the vote count of the candidate
        candidates[_id].votecount += 1;

        //now setting the voted value of the voter to be true
        votedornot[msg.sender] = true;

        emit votesuccess( _id, candidates[_id].name,candidates[_id].party, candidates[_id].votecount);
    }
}
