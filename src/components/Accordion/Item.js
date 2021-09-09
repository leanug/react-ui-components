import React, { useState, useRef, useEffect } from 'react'
import { BsPlus, BsDash } from 'react-icons/bs'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

/**
 * Returns individual accordion items.
 * 
 * @param { string } info The text of the accordion's button.
 * @param { string } title The content of the accordion.
 */
const Item = ({ title, info }) => {
  const [ showInfo, setShowInfo ] = useState( false )
  /* Height of the accordion's content to be used in the height transition */
  const [ height, setHeight ] = useState( 0 )
  const innerContent = useRef( null );
    
    /* useEffect will run on stageCanvasRef value assignment */
    useEffect( () => {
      if ( innerContent.current ){
        setHeight ( innerContent.current.offsetHeight )
      }
    }, [ innerContent ]);

  return (
    <Wrapper>
      <button 
        onKeyDown={() => setShowInfo( ! showInfo )} 
        onClick={() => setShowInfo( ! showInfo )}
      >
        <span>
          { showInfo ? <BsDash /> : <BsPlus /> }
        </span>
        <span className="fw-500">{ title }</span>
      </button>
      <Content height={height} showInfo={ showInfo }>
        <InnerContent ref={ innerContent }>
        { info }
        </InnerContent>
      </Content>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  margin-bottom: 1rem;

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.colorZeta };
    border: none;
    border-radius: var(--border-radius-alpha );
    color: ${({ theme }) => theme.colorOmega };
    cursor: pointer;
    display: flex;
    line-height: 1;
    padding: 2rem;
    text-align: left;
    width: 100%;

    span {
      margin-right: 1.5rem;
    }
  }
`

/* Accordion content */
const Content = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  /* Show / hide the content when the button is pressed */
  ${({ showInfo, height }) => {
    return showInfo
      ? css`
          max-height: ${ `${ height + 60 }px` }; 
        `
      : css`
          max-height: 0;
        `
  }}
`

const InnerContent = styled.div`
  padding: 1rem 2rem;
`

Item.propTypes = {
  info: PropTypes.string,
  title: PropTypes.string,
}

export default Item;