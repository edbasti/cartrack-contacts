import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'

const StyledRoot = styled.div`
  padding: 50px 12px;
`

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`

const Parent = ({ item }) => {

  const onPhoneClick = () => alert('You clicked phone')
  const onWebsiteClick = () => alert('You clicked website')
  const onEmailClick = () => alert('You clicked email')

  const buttons = [
    {
      label: (
        <>
          { item.phone }
        </>
      ),
      onClick: onPhoneClick,
    },
    {
      label: (
        <>
          { item.website }
        </>
      ),
      onClick: onWebsiteClick,
    },
    {
      label: (
        <>
          { item.email }
        </>
      ),
      onClick: onEmailClick,
    }
  ]

  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          title={item.name}
          subHead={item.username}
          detail1={item.company.name}
          detail2={item.company.catchPhrase}
          detail3={item.company.bs}
          actions={buttons}
        />
      </StyledContainer>
    </StyledRoot>
  )
}

export default Parent