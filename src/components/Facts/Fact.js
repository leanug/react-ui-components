import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Fact = ({ title, text }) => {
    return (
        <Wrapper>
            <div>{ title }</div>
            <p>{ text }</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    font-family: var(--secondary-font);

    div,
    p {
        text-align: center;
    }

    div {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;

        @media screen and (min-width: 576px) {
            font-size: 5rem;
        }
    }

    span {
        display: inline-block;
        display: flex;
        font-size: 2.4rem;
        justify-content: center;
    }
`

Fact.defaultProp = {
    text: 'Default text',
    title: 'Default title,'
}

Fact.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string
}

export default Fact;