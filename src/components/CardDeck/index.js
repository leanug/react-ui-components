import React from 'react'
import Card from './Card'
import data from '../../constants/services'
import styled from 'styled-components'

const CardDeck = () => {
    return (
        <Wrapper>
            { data.map(( single, index ) => {
                return (
                    <Card
                        key={ index } 
                        data={ single }
                    />
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 26rem, 1fr ));
    grid-gap: 3rem 4rem;

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export default CardDeck;