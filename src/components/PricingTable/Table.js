import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = ({ data }) => {
  return (
    <Wrapper>
      <div className="mb-20">
        <span className="price">{ data.price }</span>
        <span className="time">/ { data.time }</span>
      </div>
      <h4 className="mb-20">{ data.pack }</h4>
      <p className="text">{ data.text }</p>
      <hr className="line" />
      <ul className="list-group">
        { data.options.map(( option, index ) => {
          return (
            <li key={ index }>
              <div className="icon-wrapper"><BiCheckCircle /></div>
              <div>{ option }</div>
            </li>
          )
        })}
      </ul>
      <Link to={ data.buttonLink } className="button button-bg">{ data.buttonText }</Link>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colorZeta };
  border-radius: var(--border-radius-beta);
  box-shadow: ${({ theme }) => theme.shadow };
  padding: 4rem;
  transition: all 0.25s linear;

  .price { 
    font-family: var(--secondary-font);
    font-weight: 600;
    font-size: 6rem;
    letter-spacing: -3px;
    line-height: 1;
    margin-right: 1.5rem;
  }

  .time {
    font-family: var(--secondary-font);
    font-weight: 600;
  }

  .line {
    border: 1px solid ${({ theme }) => theme.colorBeta };
    margin: 2.5rem 0;
  }

  ul { 
    list-style: none; 
  }

  .icon-wrapper {
    margin-right: 2rem;
    margin-top: 0.4rem;
  }

  li {
    display: flex;

    svg {
      color: ${({ theme }) => theme.colorGamma };
      font-size: 2rem;
      transition: color 0.25s linear;
    }
  }

  li:not(:last-child) { 
    margin-bottom: 1rem; 
  }

  .list-group {
    margin-bottom: 3.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colorEpsilon };
    color: ${({ theme }) => theme.colorPsi };

    svg {
      color: ${({ theme }) => theme.colorPsi };
    }

    .button {
      background-color: ${({ theme }) => theme.colorPsi };
    }
  }
`

Table.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Table
