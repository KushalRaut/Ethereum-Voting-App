import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { IoMdChatboxes } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { MdSupportAgent, MdDeveloperMode } from "react-icons/md";
import "../../styles/ManifestoForm.css";
import axios from "axios";

toast.configure(ToastContainer);

const CandidateManifesto = () => {
  const BASE_API_URL =
    "http://localhost:4000/api/candidate/manifesto/61eeaefcbd6e8e008157ae53";

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [message, setMessage] = useState();
  const [partyName, setPartyName] = useState();
  const [partySymbol, setPartySymbol] = useState();
  const [manifestoWords, setManifestoWords] = useState();
  const [manifestoDescription, setManifestoDescription] = useState();
  const [responseData, setResponseData] = useState();
  const fileInputRef = useRef();

  let navigate = useNavigate();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
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
    const data = new FormData();
    data.append("partyImage", image);
    data.append("partyName", partyName);
    data.append("partySymbol", partySymbol);
    data.append("manifestoWords", manifestoWords);
    data.append("manifestoDescription", manifestoDescription);

    const response = await axios.post(BASE_API_URL, data, {
      "Content-Type": "multipart/form-data",
    });
    if (response.status === 200) {
      setResponseData(response.data);
      console.log(response.message);
      console.log(response.data);
      toast.success("Succesful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/candidate/dashboard");
    } else {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Navbar />

      <div className="row">
        {/* Sidebar */}
        <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/dashboard" className="link d-block">
                <RiDashboardLine />
                <span className="mx-3 py-2">Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/profile" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">User</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/live" className="link d-block">
                <RiLiveFill />
                <span className="mx-3 py-2">Go Live</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/results" className="link d-block">
                <ImStatsBars />
                <span className="mx-3 py-2">Analytics</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/chat" className="link d-block">
                <IoMdChatboxes />
                <span className="mx-3 py-2">Message</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/support" className="link d-block">
                <MdSupportAgent />
                <span className="mx-3 py-2">Support</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/developers" className="link d-block">
                <MdDeveloperMode />
                <span className="mx-3 py-2">Developers</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Manifesto from */}

        <div className="manifesto col-12 col-lg-9 col-md-7 col-sm-6">
          <div className="manifesto-form-container col-10 col-lg-4 my-4 shadow-lg">
            <form onSubmit={submitHandler}>
              <div className="form-group px-5 py-4">
                <h2>New Manifesto</h2>
                <label htmlFor="partyImage" className="form-label">
                  Party Image
                </label>
                {preview ? (
                  <img src={preview} className="preview-img" />
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
                />

                <label htmlFor="partyName" className="form-label">
                  Party Name
                </label>
                <input
                  id="partyName"
                  type="text"
                  className="d-block w-100 party"
                  value={partyName}
                  onChange={(e) => {
                    setPartyName(e.target.value);
                  }}
                />

                <label htmlFor="form-label" className="form-label">
                  Party Symbol
                </label>
                <input
                  type="text"
                  className="d-block w-100 party"
                  value={partySymbol}
                  onChange={(e) => {
                    setPartySymbol(e.target.value);
                  }}
                />

                <label htmlFor="manifestoWords" className="form-label">
                  Manifesto Focus Areas
                </label>
                <input
                  id="manifestoWords"
                  type="text"
                  value={manifestoWords}
                  className="d-block w-100 manifesto-words"
                  onChange={(e) => {
                    setManifestoWords(e.target.value);
                  }}
                />

                <label htmlFor="manifestoDescription" className="form-label">
                  Manifesto Detail Description
                </label>
                <textarea
                  id="manifestoDescription"
                  type="text"
                  className="d-block w-100 manifesto-desc"
                  value={manifestoDescription}
                  onChange={(e) => {
                    setManifestoDescription(e.target.value);
                  }}
                />

                <button className="w-100 mt-3 submit-button text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateManifesto;
