import React from 'react'
import Icon1 from '../images/otp.svg'
import Icon2 from '../images/chatbot.svg'
import Icon3 from '../images/live.svg'

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from './FeaturesElements'

const Features = () => {
  return (
    <>
      <ServicesContainer id="features">
        <ServicesH1>Other Features</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Multiple Verifications</ServicesH2>
            <ServicesP>
              Otp and facial verification to ensure correct person is logging
              into the account.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>24 Hour Chatbot</ServicesH2>
            <ServicesP>
              Online chatbot to clear up your common voting queries.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Live Video</ServicesH2>
            <ServicesP>
              Candidates can post live videos to be viewed by voters.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Features
