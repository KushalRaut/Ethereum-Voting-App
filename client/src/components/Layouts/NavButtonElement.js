import styled from 'styled-components'

export const NavButton = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: '14px 48px';
  color: #010606;
  font-size: '20px';
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: black;
  }
`
