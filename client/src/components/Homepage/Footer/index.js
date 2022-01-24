import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { SiHiveBlockchain } from 'react-icons/si'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/siginin">How It Works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Services</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/siginin">Call Us Now</FooterLink>
                <FooterLink to="/siginin">Leave Email</FooterLink>
                <FooterLink to="/siginin">Message Us</FooterLink>
                <FooterLink to="/siginin">Complain</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Developers</FooterLinkTitle>
                <FooterLink to="/siginin">Nirajan Kuwor</FooterLink>
                <FooterLink to="/siginin">Apurwa Dhakal</FooterLink>
                <FooterLink to="/siginin">Nishan Rana</FooterLink>
                <FooterLink to="/siginin">Kushal Raut</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin" target="_blank">
                  Facebook
                </FooterLink>
                <FooterLink to="/siginin">Instagram</FooterLink>
                <FooterLink to="/siginin">Twitter</FooterLink>
                <FooterLink to="/siginin">Github</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                <SiHiveBlockchain /> E-VOTE NEPAL
              </SocialLogo>
              <WebsiteRights>
                E-Vote Nepal © 2022-01-12 All rights reserved.{' '}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
