import React from 'react'
import Layout from "../components/Layout"
import Seo from '../components/SEO'
import styled from 'styled-components'

const IndexPage = () => {
    return (
        <Layout>
            <Seo 
                title="UI Components"
            />
            <Wrapper>
                <div>
                    <span>Welcome, pick a component from the menu.</span>
                </div>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.article`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default IndexPage
