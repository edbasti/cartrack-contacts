import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: 1px solid #FFFFFF;
  padding: 25px 12px 18px;
  background: linear-gradient(
    45deg, #A9A9A9, #EDEDED
  );
`

const Title = styled.span`
  color: #8B4513;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const SubHead = styled.span`
  color: #000000;
  font-weight: 300;
  margin: 6px 10px;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: #000000;
  font-weight: 300;
  font-size: .5rem;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Actions = styled.div`
  margin-top: 10px;
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`

const Action = styled.button`
  margin: 0 5px;
  display: flex;
  padding: 8px 14px;
  justifyContent: space-between;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: #FFFFFF;
  }
`

const Card = ({
  title,
  subHead,
  detail1,
  detail2,
  detail3,
  actions
}) => (
  <StyledContainer>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <Title>Contact: {title}</Title>
      <SubHead>({subHead})</SubHead>
    </div>
    <div style={{ marginTop: "10px", marginLeft: "6px", display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
      <img src="avatar.png" style={{ width: "50%" }} />
      <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h4>Company Details</h4>
        <Description>{detail1}</Description>
        <Description>{detail2}</Description>
        <Description>{detail3}</Description>
      </div>
    </div>
    <Actions>
      {actions.map(({ label, onClick }) => (
        <Action onClick={onClick}>{label}</Action>
      ))}
    </Actions>
  </StyledContainer>
)

export default Card