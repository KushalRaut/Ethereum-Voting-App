import { useEffect, useState } from "react";
import "./App.css";
import Electionabi from "./contracts/Election.json";
import Navbar from "./Navbar";
import Body from "./Body";
const Web3 = require("web3");

function App() {
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
      // const candidate1id = candidate1.id;
      // const candidate2id = candidate2.id;
      // const candidate1name = candidate1.name;
      // const candidate2name = candidate2.name;
      // const candidate1votecount = candidate1.votecount;
      // const candidate2votecount = candidate2.votecount;

      setCandidate1(candidate1);
      setCandidate2(candidate2);
      setCandidate3(candidate3);
      setCandidate4(candidate4);
      setCandidate5(candidate5);

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
  };

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar account={currentaccount} />
      <Body
        candidate1={Candidate1}
        candidate2={Candidate2}
        candidate3={Candidate3}
        candidate4={Candidate4}
        candidate5={Candidate5}
        voteCandidate={votecandidate}
      />
    </div>
  );
}

export default App;
