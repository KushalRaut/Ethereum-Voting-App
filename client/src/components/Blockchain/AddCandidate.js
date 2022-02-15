import React, { useEffect, useState, useRef } from "react";
import {
  AccountInfo,
  NavBarContainer,
  NavbarContent,
  NavBarLogo,
  NavBarText,
  AccountInfoBtn,
  BodyContainer,
  FormWrap,
  InputGroupContainer,
  InputGroup,
  FormLabel,
  InputField,
  SubmitButton,
} from "./AddCandidateElements";
import "../../styles/AddCandidate.css";
import Electionabi from "../../contracts/Election.json";
import { SiHiveBlockchain } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Web3 = require("web3");

const AddCandidate = () => {
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [currentaccount, setcurrentaccount] = useState("");
  const [Electionsm, setElectionsm] = useState();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [imageurl, setImageUrl] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [candidateParty, setCandidateParty] = useState("");
  const [candidateDOB, setCandidateDOB] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateLocation, setCandidateLocation] = useState("");
  const [candidateCitizenNo, setCandidateCitizenNo] = useState("");
  const [candidatePhoneNo, setCandidatePhoneNo] = useState("");

  const fileInputRef = useRef();

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

      const totalCandidates = await election.methods.candidatesCount().call();

      let candidate = [];
      for (let i = 1; i <= totalCandidates; i++) {
        const { id, name, votecount } = await election.methods
          .candidates(i)
          .call();

        candidate[i - 1] = { id, name, votecount };
      }

      setElectionsm(election);
      console.log(candidate);
    } else {
      window.alert("the smart contract is not deployed in current network");
    }
  };

  let navigate = useNavigate();
  const addCandidates = async (name, party, citizenNo, dob, img, email) => {
    await Electionsm.methods
      .addCandidates(name, party, citizenNo, dob, img, email)
      .send({ from: currentaccount })
      .on("transactionhash", () => {
        console.log("successfully added", name);
      });
    navigate("/admin/dashboard");
  };
  let presentAccount = String;
  if (currentaccount) {
    const firstPart = currentaccount.substring(0, 6);
    const lastPart = currentaccount.substring(currentaccount.length - 7);
    presentAccount = firstPart + "...." + lastPart;
  }

  useEffect(async () => {
    if (image) {
      const reader = new FileReader();
      try {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "uploads");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dynbrzezs/image/upload",
          data
        );
        const { url } = uploadRes.data;
        setImageUrl(url);
        console.log(url);
      } catch (err) {
        console.log(err);
      }

      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
      setPreview(reader.result);
    } else {
      setPreview(null);
    }
  }, [image]);

  const submitHandler = async (e) => {
    e.preventDefault();
    let BASE_API_URL = "http://localhost:4000/api/candidate/register";
    const data = new FormData();
    data.append("name", candidateName);
    data.append("email", candidateEmail);
    data.append("location", candidateLocation);
    data.append("citizenship_no", candidateCitizenNo);
    data.append("phone_No", candidatePhoneNo);
    data.append("photo", imageurl);
    addCandidates(
      candidateName,
      candidateParty,
      candidateCitizenNo,
      candidateDOB,
      imageurl,
      candidateEmail
    );
    await axios
      .post(BASE_API_URL, data, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/admin/deshboard");
        }
      });
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   await axios.post();
  // };

  //Fetch Latest Data
  const fetchDataHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <NavBarContainer>
        <NavbarContent>
          <NavBarLogo>
            <NavBarText>
              <SiHiveBlockchain />
              E-Vote Nepal
            </NavBarText>
          </NavBarLogo>
          <AccountInfoBtn onClick={fetchDataHandler}>
            <AccountInfo>Current Account: {presentAccount}</AccountInfo>
          </AccountInfoBtn>
        </NavbarContent>
      </NavBarContainer>
      <BodyContainer>
        <FormWrap onSubmit={submitHandler}>
          <h3 className="pt-2">New Candidate</h3>
          <FormLabel htmlFor="candidate-photo">Photo</FormLabel>
          {preview ? (
            <img src={preview} className="preview-img" alt="no-img" />
          ) : (
            <button
              className="img-btn"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Browse
            </button>
          )}
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
            required
          />

          <InputGroupContainer>
            <InputGroup>
              <FormLabel htmlFor="candidate-name">Name</FormLabel>
              <InputField
                type="text"
                value={candidateName}
                onChange={(e) => {
                  setCandidateName(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="candidate-party">Party</FormLabel>
              <InputField
                type="text"
                value={candidateParty}
                onChange={(e) => {
                  setCandidateParty(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="candidate-email">Email</FormLabel>
              <InputField
                type="text"
                value={candidateEmail}
                onChange={(e) => {
                  setCandidateEmail(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="candidate-citizenno">
                Citizenship Number
              </FormLabel>
              <InputField
                type="text"
                value={candidateCitizenNo}
                onChange={(e) => {
                  setCandidateCitizenNo(e.target.value);
                }}
                required
              />
            </InputGroup>
            <InputGroup>
              <FormLabel htmlFor="candidate-dob">Candidate DOB</FormLabel>
              <InputField
                type="text"
                value={candidateDOB}
                onChange={(e) => {
                  setCandidateDOB(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="candidate-phone">Phone Number</FormLabel>
              <InputField
                type="text"
                value={candidatePhoneNo}
                onChange={(e) => {
                  setCandidatePhoneNo(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="candidate-location">Location</FormLabel>
              <InputField
                type="text"
                value={candidateLocation}
                onChange={(e) => {
                  setCandidateLocation(e.target.value);
                }}
                required
              />
            </InputGroup>
          </InputGroupContainer>

          <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
        </FormWrap>
      </BodyContainer>
    </>
  );
};

export default AddCandidate;
