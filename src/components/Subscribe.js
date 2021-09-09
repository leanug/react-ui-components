import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
    return (
        <Wrapper>
            <h2 className="header-1">Subscribe to our Newsletter!</h2>
            <div className="form">
                <input type="text" placeholder="Email address" name="mail" required />
                <input className="button button-bg" type="submit" value="Subscribe"></input>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    margin: auto;
    max-width: 70rem;
    text-align: center;
    
    @media screen and ( min-width: 768px ) {
        .form {
            display: grid;
            grid-template-columns: repeat( 3, 1fr );
            grid-template-rows: 1fr;
            max-width: 60rem;
            min-width: 28rem;
            margin: auto;
        }
    }

    h2 {
        margin-bottom: 3rem;
    }

    input[type=text] {
        border-radius: var(--border-radius-alpha);
        grid-column: 1 / span 3;
        grid-row: 1 / 1;
        height: 5rem;
        position: relative;
        border: 1px solid ${({ theme }) => theme.colorEpsilon };
        padding: 0 2rem;

        @media screen and ( max-width: 768px ) {
            width: 100%;
        }
    }

    input[type=submit] {
        grid-column: 3 / span 3;
        grid-row: 1 / 1;
        height: 5rem;
        position: relative;

        @media screen and ( max-width: 768px ) {
            grid-column: 1 / span 3;
            margin-top: 2rem;
            width: 100%;
        }
    }
`

export default Subscribe
