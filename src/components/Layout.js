import React, { useState } from 'react'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import { darkTheme } from '../theme';
import 'normalize.css'
import PropTypes from "prop-types"
import styled, { ThemeProvider, css } from 'styled-components'
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  /* Sidebar menu for small screens */
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
  const toggleSidebar = _ => {
    setIsSidebarOpen(! isSidebarOpen)
  }

  return (
    <ThemeProvider 
      theme={ darkTheme }
    >
      <GlobalStyles />
      <PageWrapper isSidebarOpen={ isSidebarOpen }>
        <Sidebar
          toggleSidebar={ toggleSidebar }
          isSidebarOpen={ isSidebarOpen }
        />
        <Header 
          toggleSidebar={ toggleSidebar }
        />
        <main>
          { children }
        </main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 
    [header-start] auto 
    [header-end main-start] 1fr 
    [main-end footer-start] auto 
    [footer-end];

  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Disables page vertical scrolling when the sidebar is open */
  ${({ isSidebarOpen }) => {
    return isSidebarOpen
    ? css`
      height: 100vh;
      overflow-y: hidden;
    `
    : css`
      min-height: 100vh;
    `
  }}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
