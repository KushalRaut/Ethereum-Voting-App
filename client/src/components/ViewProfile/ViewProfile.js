import React, { useState, useEffect } from 'react'
import { RingLoader } from 'react-spinners'
import { css } from '@emotion/react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../Layouts/Navbar'
import { Link } from 'react-router-dom'
import { RiDashboardLine } from 'react-icons/ri'
import { FaUserEdit, FaVoteYea } from 'react-icons/fa'
import { ImStatsBars } from 'react-icons/im'
import { IoMdChatboxes } from 'react-icons/io'
import { MdSupportAgent, MdDeveloperMode } from 'react-icons/md'
import {
  Container,
  FormButton,
  FormContent,
  FormLabel,
  FormWrap,
  Icon,
  ImageWrapper,
  PreviewImage,
  InputWrapper,
  InputCol1,
  InputCol2,
  FormInput,
  Form,
} from '../Blockchain/EditCandidateElements'
import PPImage from './ppphoto.jpg'

const MainContainer = styled.div`
  height: auto;
  display: flex;
`

const ContentsContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ViewProfile = () => {
  useEffect(() => {
    fetchUserData()
  }, [])

  const [fetching, setFetching] = useState(false)
  const [userData, setUserData] = useState({})

  const color = '#00995a'

  const override = css`
    display: block;
    margin: auto;
    border-color: red;
  `
  const fetchUserData = async () => {
    setFetching(true)

    try {
      axios
        .post('http://localhost:4000/api/user/email', {
          email: sessionStorage.getItem('email'),
        })
        .then(function (response) {
          setUserData(response.data.data)
        })
    } catch (error) {
      console.error(error)
    }
    setFetching(false)
  }

  return (
    <>
      <Navbar />

      <MainContainer>
        <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/dashboard" className="link d-block">
                <RiDashboardLine />
                <span className="mx-3 py-2">Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/profile" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">User</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/vote" className="link d-block">
                <FaVoteYea />
                <span className="mx-3 py-2">Vote</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/walletid" className="link d-block">
                <ImStatsBars />
                <span className="mx-3 py-2">Wallet Id</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/chat" className="link d-block">
                <IoMdChatboxes />
                <span className="mx-3 py-2">Message</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/support" className="link d-block">
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

        <div className="col-12 col-lg-9 col-md-7 col-sm-6 py-3">
          <ContentsContainer>
            {fetching ? (
              <RingLoader color={color} css={override} size={100} />
            ) : (
              <Container>
                <FormWrap>
                  <Icon to="#">Your Details</Icon>
                  <FormContent>
                    <Form action="#">
                      <ImageWrapper>
                        <FormLabel htmlFor="party-name">Photo:</FormLabel>
                        <PreviewImage src={PPImage} alt="no-img" />
                      </ImageWrapper>
                      <InputWrapper>
                        <InputCol1>
                          <FormLabel htmlFor="for">Full Name:</FormLabel>
                          <FormInput
                            type="text"
                            value={userData.name}
                            required
                          />
                          <FormLabel htmlFor="for">E-mail:</FormLabel>
                          <FormInput
                            type="email"
                            value={userData.email}
                            required
                          />
                          <FormLabel htmlFor="for">Location:</FormLabel>
                          <FormInput
                            type="text"
                            value={userData.location}
                            required
                          />
                        </InputCol1>
                        <InputCol2>
                          <FormLabel htmlFor="for">Citizenship No.:</FormLabel>
                          <FormInput
                            type="text"
                            value={userData.citizenship_no}
                            required
                          />
                          <FormLabel htmlFor="for">Phone No:</FormLabel>
                          <FormInput
                            type="text"
                            value={userData.phone_No}
                            required
                          />
                          <FormLabel htmlFor="for">Candidate Id:</FormLabel>
                          <FormInput
                            type="text"
                            value={userData._id}
                            required
                          />
                        </InputCol2>
                      </InputWrapper>
                    </Form>
                  </FormContent>
                </FormWrap>
              </Container>
            )}
          </ContentsContainer>
        </div>
      </MainContainer>
    </>
  )
}

export default ViewProfile
