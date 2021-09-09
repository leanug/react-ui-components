import React from 'react'
import Fact from './Fact'
import data from '../../constants/facts'
import styled from 'styled-components'

const Facts = () => (
    <Wrapper>
        { data.map(( item, index ) => {
            return (
                <Fact
                    key= { index }
                    { ...item }
                />
            )
        })}
    </Wrapper>
)

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 20rem, 1fr));
    grid-gap: 3rem;
    row-gap: 3rem;
    
    @media screen and (max-width: 576px) {
        margin: auto;
    }
`

export default Facts;