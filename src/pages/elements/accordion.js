import React from 'react'
import Accordion from "../../components/Accordion"
import accordionItems from '../../constants/accordion'
import Layout from '../../components/Layout'
import Seo from "../../components/SEO"

const AccordionPage = () => {
    return (
        <Layout>
            <Seo 
                title="Accordion Component"
            />
            <div className="wrapper">
                <div className="w-700 mx-auto">
                    <Accordion data={ accordionItems } />
                </div>
            </div>
        </Layout>
    )
}

export default AccordionPage
