import React from 'react'
import Layout from '../../components/Layout'
import Seo from "../../components/SEO"
import Tabs from "../../components/Tabs"

const TabsPage = () => {
    return (
        <Layout>
            <Seo 
                title="Tabs Page"
            />
            <div className="wrapper">
                <Tabs />    
            </div>
        </Layout>
    )
}

export default TabsPage
