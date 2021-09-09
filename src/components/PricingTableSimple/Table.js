import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = ({ data }) => {
  return (
    <Wrapper>
      <h4 className="mb-10">{ data.pack }</h4>
      <div className="price">{ data.price }</div>
      <div className="time fw-600 mb-30">per { data.time }</div>
      <Link to={ data.buttonLink } className="button button-bg">
        { data.buttonText }
      </Link>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  align-items: center;
  border-radius: var(--border-radius-beta);
  box-shadow: ${({ theme }) => theme.shadow };
  color: ${({ theme }) => theme.colorPsi };
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 2rem;
  text-align: center;

  .price { 
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 6rem;
    letter-spacing: -3px;
    line-height: 1.2;
    margin-right: 1.5rem;
  }
`

Table.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Table
