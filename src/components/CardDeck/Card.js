import React from 'react'
import styled from 'styled-components'

const Card = ({ data }) => (
    <Wrapper>
        <div className="icon">
            { data.icon }
        </div>
        <p className="header-4 mb-20">{ data.title }</p> 
        <p className="text">{ data.text }</p> 
    </Wrapper>
)

const Wrapper = styled.div`
    background-color: ${ ({ theme }) => theme.colorBeta };
    border-radius: var(--border-radius-beta);
    padding: 4rem;
    transition: all ease-in 0.25s;

    &.center {
        text-align: center;

        .icon {
            margin: auto;
            margin-bottom: 3rem;
        }
    }
    
    .icon {
        border-radius: var(--border-radius-gamma);
        margin-bottom: 3rem;
    }

    .header-4 {
        font-weight: 500;
    }

    .icon {
        box-shadow: ${ ({ theme }) => theme.shadow };

        svg {
            color: ${ ({ theme }) => theme.colorAlpha };
            transition: all ease-in 0.25s;
        }
    }

    div {
        font-size: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 7rem;
    }

    &:hover {
        background-color: ${ ({ theme }) => theme.colorEpsilon };
        color: ${ ({ theme }) => theme.colorPsi };
        cursor: pointer;
        transform: translateY(-20px);

        svg {
            color: ${ ({ theme }) => theme.colorPsi };
        }
    }
`

export default Card;