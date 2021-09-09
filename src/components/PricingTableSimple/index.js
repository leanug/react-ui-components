import React from 'react'
import styled from 'styled-components'
import tables from '../../constants/pricing-tables'
import Table from './Table'

const PricingTableSimple = () => {
  return (
    <Wrapper>
      { tables.map(( table, index ) => {
        return (
          <Table key={ index } data={ table } />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem 5rem;
  
  @media screen and ( min-width: 576px ) {
    grid-template-columns: repeat( auto-fit, minmax( 30rem, 1fr ));
  }
`

export default PricingTableSimple
