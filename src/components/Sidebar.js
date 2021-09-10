import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import links from '../constants/links'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
    <Wrapper 
        className={`${ 
          isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' 
        }`}
        aria-label="Main sidebar containing navigation links"
    >
      <div className="spacer"></div>
      <div className="btn-container">
        <button 
          className="btn close-btn" 
          aria-label="Close main sidebar" 
          onClick={ toggleSidebar }
        >
          <BsX />
        </button>
      </div>
      <div className="sidebar-content">
        <div className="w-100">
          { links.map(( item,index ) => {
            const { title, url } = item
            return (
              <div key={ index } className="btn-wrapper">
                <Link 
                  className="sidebar-btn" 
                  to={ url }
                >
                  { title }
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
)

const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.colorPsi };
  display: grid;
  grid-template-rows: 1rem auto 1fr 1rem auto 1rem;
  grid-gap: 1rem;
  height: 100%;
  padding: 0rem 2rem;
  position: fixed;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: transform 0.25s ease-out;
  transform: translateX(-100%);
  width: 100vw;
  z-index: 999;
  
  .btn-wrapper {
    padding: 0.8rem 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colorAlpha };
    }
  }

  .sidebar-content {
    align-items: center;
    display: flex;
    width: 100%;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .btn {
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorPsi };
    border: 1px solid ${({ theme }) => theme.colorAlpha };
    border-radius: var(--border-radius-alpha);
    color: ${ ({ theme }) => theme.colorOmega };
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    width: 48px;
  }

  .close-btn {
    font-size: 2.2rem;
  }

  &.show-sidebar {
    transition: transform 0.25s linear;
    transform: translateX(0);
  }

  .sidebar-btn {
    display: block;
    font-weight: 600;
  }

  .theme-toggler-btn-container {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .spacer {
    height: 1rem;
    width: 100%;
  }
`

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired, 
}

export default Sidebar