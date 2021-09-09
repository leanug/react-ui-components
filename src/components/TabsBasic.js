import React, { useState, useRef, useEffect } from 'react'
import data from '../constants/tabs-basic'
import styled, { css } from 'styled-components'

const TabsBasic = () => {
    /* Tab content element ref */
    const ref = useRef( true )
    const firstRender = ref.current
    const [ value, setValue ] = useState( 0 )
    const [ tab, setTab ] = useState( data[ 0 ] )
    const [ showContent, setShowContent ] = useState( true )

    useEffect(() => {
      /* Don't hide the tab's content on the first render */
      firstRender
          ? ref.current = false
          : setShowContent( false )

      let slider = setInterval(() => {
          setShowContent(true)
          setTab(data[ value ])

      }, 500);
      return () => {
          clearInterval(slider);
      };
    }, [value, firstRender]);
    
    return (
        <Wrapper>
          <div className="btn-container">
              { data.map((item, index) => {
                return (
                  <button 
                    key={ index } 
                    className={ `${ index === value && 'active-btn' }` }
                    onClick={() => setValue( index )}
                    onKeyDown={() => setValue( index )}
                    aria-label={ `Show the content of the ${ item.title } tab` }
                  >
                      { item.title }
                  </button>
                )
              })}
            </div>
          <Info showContent={ showContent } ref={ ref }>
              { tab.content }
          </Info>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    max-width: 70rem;
    margin: 0 auto;

    .btn-container {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax( 13rem, 1fr ));
        grid-gap: 1.5rem 0.5rem;
        margin: 0 auto 4rem auto;
        overflow: auto;
    }

    button {
        background-color: transparent;
        border: none;
        border-radius: var(--border-radius-alpha);
        color: ${({ theme }) => theme.colorAlpha };
        cursor: pointer;
        font-weight: 500;
        line-height: 1;
        padding: 1.5rem 2.5rem;
        text-transform: capitalize;
        transition: background-color 0.25s linear;
    }

    .active-btn {
        background-color: ${({ theme }) => theme.colorBeta };
        color: ${({ theme }) => theme.colorOmega };
        font-weight: 600;
        outline: none;
    }

    button::-moz-focus-inner {
        border: 0;
        outline:none !important;
    }

    focus { outline:none; }
    ::-moz-focus-inner { border:0; }

    :focus, :active {
        outline: 0;
        border: 0;
    }

    button:focus { outline:none !important; }
`

const Info = styled.div`
    color: ${({ theme }) => theme.colorOmega };
    transition: opacity 0.25s ease-out;

    /* Hides & Shows the tab content after one of the buttons is pressed */
    ${({ showContent }) => {
        return showContent
        ? css`
            opacity: 1;
        `
        : css`
            opacity: 0;
        `
    }}
`

export default TabsBasic
