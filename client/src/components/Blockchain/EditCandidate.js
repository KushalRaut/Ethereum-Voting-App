import React, { useEffect, useState, useRef } from 'react'
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  ImageWrapper,
  PreviewImage,
  UploadButton,
  UploadText,
  InputWrapper,
  InputCol1,
  InputCol2,
  FormInput,
  Form,
  Text,
} from './EditCandidateElements'
import { BiImageAdd } from 'react-icons/bi'

const EditCandidate = ({ candidate, editFunction }) => {
  const [image, setImage] = useState()
  const [preview, setPreview] = useState()
  const [candidateName, setCandidateName] = useState(candidate.name)
  const [candidateParty, setCandidateParty] = useState(candidate.party)
  const [candidateDOB, setCandidateDOB] = useState(candidate.dob)
  const [candidateEmail, setCandidateEmail] = useState(candidate.email)
  const [candidateCitizenNo, setCandidateCitizenNo] = useState(
    candidate.citizenshipNo
  )
  console.log(candidate)

  const fileInputRef = useRef()

  useEffect(async () => {
    if (image) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
      setPreview(reader.result)
    } else {
      setPreview(null)
    }
  }, [image])

  const submitHandler = (e) => {
    e.preventDefault()
    editFunction(
      candidate.id,
      candidateName,
      candidateParty,
      candidateCitizenNo,
      candidateDOB,
      candidateEmail
    )
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="#">Edit Candidate</Icon>
          <FormContent>
            <Form action="#" onSubmit={submitHandler}>
              <ImageWrapper>
                <FormLabel htmlFor="party-name">Photo:</FormLabel>
                <PreviewImage src={candidate.img} />
              </ImageWrapper>
              <InputWrapper>
                <InputCol1>
                  <FormLabel htmlFor="for">Full Name:</FormLabel>
                  <FormInput
                    type="text"
                    value={candidateName}
                    onChange={(e) => {
                      setCandidateName(e.target.value)
                    }}
                    required
                  />
                  <FormLabel htmlFor="for">E-mail:</FormLabel>
                  <FormInput
                    type="email"
                    value={candidateEmail}
                    onChange={(e) => {
                      setCandidateEmail(e.target.value)
                    }}
                    required
                  />
                  <FormLabel htmlFor="for">Party:</FormLabel>
                  <FormInput
                    type="text"
                    value={candidateParty}
                    onChange={(e) => {
                      setCandidateParty(e.target.value)
                    }}
                    required
                  />
                </InputCol1>
                <InputCol2>
                  <FormLabel htmlFor="for">Candidate Id:</FormLabel>
                  <FormInput type="text" value={candidate.id} required />
                  <FormLabel htmlFor="for">Citizenship No:</FormLabel>
                  <FormInput
                    type="text"
                    value={candidateCitizenNo}
                    onChange={(e) => {
                      setCandidateCitizenNo(e.target.value)
                    }}
                    required
                  />
                  <FormLabel htmlFor="for">Candidate DOB:</FormLabel>
                  <FormInput
                    type="text"
                    value={candidateDOB}
                    onChange={(e) => {
                      setCandidateDOB(e.target.value)
                    }}
                    required
                  />
                </InputCol2>
              </InputWrapper>
              <FormButton>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default EditCandidate
