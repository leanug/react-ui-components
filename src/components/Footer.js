import React from 'react'
import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper className="wrapper-fluid small-font mb-20 mt-20">
            <div>
                <FaCircle className="icon" /><span>Gatsby</span>
            </div>
            <div>
                <FaCircle className="icon" /><span>Styled Components</span>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;

    @media screen and ( min-width: 576px ) {
        display: flex;
    }

    div {
        display: flex;
        align-items: center;
        margin-right: 2rem;
    }

    .icon {
        color: ${({ theme }) => theme.colorAlpha };
        margin-right: 8px;
        width: 8px;
    }
`

export default Footer
