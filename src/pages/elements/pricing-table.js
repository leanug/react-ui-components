import React from 'react'
import Layout from '../../components/Layout'
import PricingTable from '../../components/PricingTable'
import tables from '../../constants/pricing-tables'
import Seo from "../../components/SEO"

const PricingTablePage = () => {
    return (
        <Layout>
            <Seo 
                title="Pricing Tables"
            />
            <section className="wrapper">
                <PricingTable data={ tables } />
            </section>
        </Layout>
    )
}

export default PricingTablePage
