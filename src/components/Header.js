import React from 'react'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = ({ toggleSidebar }) => {
    return (
        <Header className="wrapper-fluid">
            <div>
                <span className="logo">UI Components</span>
            </div>
            <div>
                {links.map(( item, index ) => {
                    return (
                        <Link
                            key={ index }
                            className="nav-btn"
                            to={ item.url }
                        >
                            { item.title }
                        </Link>
                    )
                })}
                <button 
                    onClick={ toggleSidebar }
                    onKeyPress={ toggleSidebar }
                    aria-label="scroll to contact section"
                    className="aside-btn"
                >
                    <FaBars className="icon" />
                </button>
            </div>
        </Header>
    )
}

const Header = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 8rem;
    justify-content: space-between;
    transition: color 0.3s linear;

    .logo {
        display: flex;
        font-family: var(--dos-font);
        margin-right: 3rem;
    }

    .nav-btn {
        color: ${({ theme }) => theme.psi };
        margin: 0 1rem;
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        transition: color 0.25s linear;
        font-family: var(--secondary-font);

        @media screen and ( max-width: 576px ) {
            display: none;
        }
    }

    div {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .aside-btn {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colorAlpha };
        border-radius: var(--border-radius-alpha);
        font-size: 2rem;
        width: 48px;
        height: 48px;

        .icon {
            color: ${({ theme }) => theme.colorOmega };
            margin-top: 6px;
        }

        @media screen and (min-width: 678px) {
            display: none;
        }
    }
`

export default Navbar