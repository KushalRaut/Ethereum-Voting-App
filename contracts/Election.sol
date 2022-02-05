// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract Election {
    // struct candidate
    struct Candidate {
        uint256 id;
        string name;
        string party;
        string citizenshipNo;
        string dob;
        string img;
        string email;
        uint256 votecount;
    }

    // candidate count
    uint256 public candidatesCount;

    // random vote count assign for demostration
    uint[5] ranvote = [43,35,48,70,50];
    uint i= 5;
    uint public temp;

    // mapping candidate
    mapping(uint256 => Candidate) public candidates;

    //mapping a voter
    mapping(address => bool) public votedornot;

    // constructor
    constructor() {
        // Here the candidates are initialized
        addCandidates("KP Oli","CPN","010570487","22/02/1952","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","kpoli1@nepal.com");
        addCandidates("Sher Bahadur Deuba","NCP","015678998","30/05/1952","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","sherbdrdeuba@nepal.com");
        addCandidates("Gagan Thapa","NCP","015678795","30/05/1982","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","gaganthapa@nepal.com");
        addCandidates("Puspa Kamal Dahal","UML","015676985","30/05/1962","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","puspakdahal@nepal.com");
        addCandidates("Kamal Thapa","RPP","015677867","30/05/1972","https://res.cloudinary.com/dynbrzezs/image/upload/v1642667247/uploads/BRBM_iyeetq.jpg","kamalthapa@nepal.com");
    }

    //setting the addCandidates as public
     function addCandidates(string memory name,string memory party,string memory citizenshipNo,string memory dob,string memory img,string memory email) public{
        candidatesCount++;
        if(i>0){
        temp = ranvote[i-1];    
        candidates[candidatesCount] = Candidate(candidatesCount,name,party,citizenshipNo,dob,img,email,temp);
        i--;
        }else{
        candidates[candidatesCount] = Candidate(candidatesCount,name,party,citizenshipNo,dob,img,email,0);
        }

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

    //function to edit the candidate
    function editCandidates(uint id, string memory name, string memory party,string memory citizenshipNo,string memory dob,string memory email) public{
        candidates[id].name = name;
        candidates[id].party = party;
        candidates[id].citizenshipNo = citizenshipNo;
        candidates[id].dob = dob;
        candidates[id].email = email;

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