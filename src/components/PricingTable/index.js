import React from 'react'
import data from '../../constants/pricing-tables'
import styled from 'styled-components'
import Table from './Table'

const PricingTable = () => {
  return (
    <Wrapper>
      { data.map(( table, index ) => {
        return (
          <Table key={ index } data={ table } />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem 4rem;
  
  @media screen and ( min-width: 576px ) {
    grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
  }
`

export default PricingTable
