import React from 'react'
import Layout from '../../components/Layout'
import Seo from "../../components/SEO"
import TabsBasic from "../../components/TabsBasic"

const TabsPage = () => {
    return (
        <Layout>
            <Seo 
                title="Tabs Page"
            />
            <div className="wrapper">
                <TabsBasic />
            </div>
        </Layout>
    )
}

export default TabsPage
