import React from 'react'
import CardDeck from '../../components/CardDeck'
import Layout from '../../components/Layout'
import Seo from "../../components/SEO"

const ServicesPage = () => {
    return (
        <Layout>
            <Seo 
                title="Services Component"
            />
             <section className="wrapper mt-gamma section-margin-bottom">
                <CardDeck />
            </section>
        </Layout>
    )
}

export default ServicesPage
