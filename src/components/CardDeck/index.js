import React from 'react'
import Card from './Card'
import data from '../../constants/services'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardDeck = ({ styleClass }) => {
    return (
        <Wrapper>
            { data.map(( single, index ) => {
                return (
                    <Card
                        key={ index } 
                        data={ single }
                        styleClass={ styleClass } 
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

CardDeck.defaultProps = {
    styleClass: 'style-1',
}

CardDeck.propTypes = {
    styleClass: PropTypes.string,
}

export default CardDeck;