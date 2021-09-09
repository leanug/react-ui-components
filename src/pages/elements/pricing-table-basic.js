import React from 'react'
import Layout from '../../components/Layout'
import PricingTable from '../../components/PricingTable'
import PricingTableSimple from '../../components/PricingTableSimple'
import tables from '../../constants/pricing-tables'
import Seo from "../../components/SEO"

const PricingTablePage = () => {
    return (
        <Layout>
            <Seo 
                title="Pricing Tables"
            />
            <section className="wrapper mt-gamma">
                <div className="section-margin-top">
                    <PricingTable data={ tables } />
                </div>
                <div className="section-margin">
                    <PricingTableSimple data={ tables } />
                </div>
            </section>
        </Layout>
    )
}

export default PricingTablePage
