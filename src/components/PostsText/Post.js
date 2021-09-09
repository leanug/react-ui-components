import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Displays a single post card
 * 
 * @param { string } excerpt
 * @param { object } frontmatter
 */
const Post = ({ excerpt, frontmatter }) => {
    const { title, category, slug } = frontmatter
  
    return (
      <Wrapper>
          <Link to={`/blog/${ slug }`}>
              <div>
                  <span className="category">{ category }</span>
                  <h5 className="mt-20 mb-20">{ title }</h5>
                  <p className="mb-20">{ excerpt }</p>
                  <div className="read-more">
                      <span>Read More</span><BsArrowRightShort className="icon" />
                  </div>
              </div>
          </Link>
      </Wrapper>
    )
} 
  
const Wrapper = styled.article`
    border-radius: var(--border-radius-beta);
    padding: 3rem;
    background-color: ${({ theme }) => theme.colorZeta };
    transition: box-shadow 0.25s linear;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow };
    }

    .category {
      font-size: 1.4rem;
      font-weight: 400;
    }

    a,
    a:hover {
      color: ${({ theme }) => theme.colorPsi };
    }
  
    .img {
      border-radius: var(--border-radius-beta);
    }

    .shadow {
      box-shadow: ${({ theme }) => theme.shadow};
    }

    /* Excerpt */
    p {
      font-weight: 400;
      margin-top: 1rem;
    }

    /* Image zoom hover effect */
    .img-hover-zoom {
        border-radius: var(--border-radius-beta);
        /* [1.1] Set it as per your need */
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
        width: 100%;
    }

    /* [2] Transition property for smooth transformation of images */
    .img-hover-zoom img {
        transition: transform .5s ease;
    }

    /* [3] Finally, transforming the image when container gets hovered */
    .img-hover-zoom:hover img {
        transform: scale(1.1);
    }

    .read-more {
        display: flex;
        align-items: center;

        span {
            font-weight: 600;
        }
    }

    .icon {
        font-size: 2.5rem;
        margin-left: 0.8rem;
        position: relative;
        right: 0;
        transition: right linear 0.25s;
    }

    &:hover {
        .icon {
            right: -8px;
        }
    }
`
  
Post.propTypes = {
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.object.isRequired
};
  
export default Post