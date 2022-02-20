import React, { useState } from 'react'
import styled from 'styled-components'
import {
  NavBarContainer,
  NavbarContent,
  NavBarLogo,
  NavBarText,
} from '../Blockchain/LiveDataElements'
import { SiHiveBlockchain } from 'react-icons/si'
import WalletImg from '../Homepage/images/forotp.svg'
import axios from 'axios'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.div`
  width: 400px;
  border: 2px solid #01bf71;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const WalletIdText = styled.p`
  word-wrap: break-word;
`

const GetWalletId = () => {
  const [walletId, setWalletId] = useState('')
  const getemail = sessionStorage.getItem('email')
  console.log(getemail)
  const values = {
    email: getemail,
  }

  const BASE_API_URL = 'http://localhost:4000/api/wallet/allmetaids'

  const onSubmitHandler = (values) => {
    console.log(values)
    axios
      .post(BASE_API_URL, values, {
        'Content-Type': 'application/json',
      })
      .then((response) => {
        console.log(response)
        if (response.data.status) {
          setWalletId(response.data.metakey)
        } else {
          setWalletId('Unknown Error Occured')
        }
      })
  }

  return (
    <div>
      <NavBarContainer>
        <NavbarContent>
          <NavBarLogo>
            <NavBarText>
              <SiHiveBlockchain />
              E-Vote Nepal
            </NavBarText>
          </NavBarLogo>
        </NavbarContent>
      </NavBarContainer>
      <Container>
        <FormContainer className="p-3">
          <img src={WalletImg} className="img-fluid p-2 mb-2" alt="wallet" />
          <div className="d-flex align-items-center justify-content-center">
            <label className="w-25 text-center">Your Email</label>
            <input
              type="text"
              className="w-75 p-1 pl-0 border border-success rounded text-secondary"
              value={getemail}
            />
          </div>
          <button
            className="btn btn-success my-3 d-block w-50 mx-auto border border-success rounded"
            onClick={() => {
              onSubmitHandler()
            }}
          >
            Get Wallet Key
          </button>
          {walletId && <p className='text-center'>Your Walley Private key is</p>}
          <WalletIdText className="w-75 text-center">{walletId}</WalletIdText>
        </FormContainer>
      </Container>
    </div>
  )
}

export default GetWalletId
