import React, { useState } from "react"
import { BsCaretRightFill } from 'react-icons/bs'
import data from '../constants/tabs'
import styled from 'styled-components'

const Tabs = () => {
    const [ value, setValue ] = useState( 0 )
    const { duties, time, position } = data[ value ]

    return (
        <Wrapper>
            <div className="btn-container">
                { data.map(( item, index ) => {
                    return (
                    <button 
                        key={ index } 
                        className={ `button ${ index === value && 'active-btn' }` }
                        onClick={() => setValue( index )}
                        aria-label={ item.company }
                    >
                        { item.company }
                    </button>)
                })}
                </div>
            <div className="job-info">
                <div className="header-4 mb-20">{ position }</div>
                <span className="time">{ time }</span>
                { duties.map(( item ) => (
                    <div key={item.id} className="job-desc">
                        <BsCaretRightFill className="icon" />
                        <p className="w-700 job-desc-item">{item.name}</p>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-gap: 5rem;
    max-width: 90rem;
    margin: 0 auto;

    @media screen and ( min-width: 768px ) {
        grid-template-columns: 1fr 5fr;
    }

    .btn-container {
        grid-template-columns: repeat( auto-fill, minmax( 13rem, 1fr ));
        grid-gap: 1.5rem 0.5rem;
        margin: 0 auto;
        overflow: auto;

        @media screen and ( min-width: 768px ) {
            grid-template-rows: repeat( auto-fill, 6rem );
        }
    }

    .button {
        background-color: transparent;
        border: none;
        border-radius: var(--border-radius-alpha);
        color: ${({ theme }) => theme.colorAlpha };
        cursor: pointer;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 0.5rem;
        padding: 1.8rem 2.6rem;
        text-align: left;
        text-transform: capitalize;
        transition: box-shadow 0.25s linear;
    }

    .time {
        border-radius: var(--border-radius-alpha);
        border: 1px solid ${({ theme }) => theme.colorDelta };
        padding: 0.8rem 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .active-btn {
        color: ${({ theme }) => theme.colorOmega };
        font-weight: 600;
        outline: none;
        box-shadow: ${({ theme}) => theme.shadow};
    }

    .job-desc {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 2rem;
        align-items: flex-start;
        margin-top: 2rem;
    }

    .job-desc-item {
        margin-bottom: 0;
    }

    .icon {
        color: ${({ theme }) => theme.colorDelta };
        font-size: 1.5rem;
        margin-top: 0.8rem;
    }

    button::-moz-focus-inner {
        border: 0;
        outline:none !important;
    }

    focus { outline:none; }
    ::-moz-focus-inner { border:0; }
    button:focus { outline:none !important; }

    :focus, :active {
        outline: 0;
        border: 0;
    }

`

export default Tabs