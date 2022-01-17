import { useEffect, useState } from "react";
import Electionabi from "../../contracts/Election.json";
import Navbar from "./Navbar";
import Body from "./Body";
import "./body.css";
const Web3 = require("web3");

const Vote = () => {
  
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [currentaccount, setcurrentaccount] = useState("");

  const [loader, setloader] = useState(true);

  const [Electionsm, SetElectionsm] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();
  const [Candidate3, setCandidate3] = useState();
  const [Candidate4, setCandidate4] = useState();
  const [Candidate5, setCandidate5] = useState();
  const [Candidate6, setCandidate6] = useState();
  const [Candidate7, setCandidate7] = useState();
  const [Candidate8, setCandidate8] = useState();
  const [Candidate9, setCandidate9] = useState();

  //Metamask popup
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum Browser Detected . Please install metamask");
    }
  };

  //load the data from blockchain
  const LoadBlockchaindata = async () => {
    const web3 = window.web3;
    setloader(true);
    
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    
    setcurrentaccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );

      const candidate1 = await election.methods.candidates(1).call();
      const candidate2 = await election.methods.candidates(2).call();
      const candidate3 = await election.methods.candidates(3).call();
      const candidate4 = await election.methods.candidates(4).call();
      const candidate5 = await election.methods.candidates(5).call();
      const candidate6 = await election.methods.candidates(6).call();
      const candidate7 = await election.methods.candidates(7).call();
      const candidate8 = await election.methods.candidates(8).call();
      const candidate9 = await election.methods.candidates(9).call();

      setCandidate1(candidate1);
      setCandidate2(candidate2);
      setCandidate3(candidate3);
      setCandidate4(candidate4);
      setCandidate5(candidate5);
      setCandidate6(candidate6);
      setCandidate7(candidate7);
      setCandidate8(candidate8);
      setCandidate9(candidate9);

      SetElectionsm(election);
      setloader(false);
    } else {
      window.alert("the smart contract is not deployed in current network");
    }
  };

  const votecandidate = async (candidateid) => {
    // setLoader showed some errors

    await Electionsm.methods
      .Vote(candidateid)
      .send({ from: currentaccount })
      .on("transactionhash", () => {
        console.log("Successfully ran");
      });

    window.location.reload();
  };

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vote-container">
      <Navbar account={currentaccount} />
      <Body
        candidate1={Candidate1}
        candidate2={Candidate2}
        candidate3={Candidate3}
        candidate4={Candidate4}
        candidate5={Candidate5}
        candidate6={Candidate6}
        candidate7={Candidate7}
        candidate8={Candidate8}
        candidate9={Candidate9}
        voteCandidate={votecandidate}
      />
    </div>
  );
};

export default Vote;
