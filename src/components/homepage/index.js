import React from 'react';
import Business from './business';
import About from './About'
import OurService from './ourservice';
import Partnership from './partnership';
import Testimonials from './testimonial';
import ContectUs from './contectus';
import Layout from '../../layout';

export default function Homepage() {
    return (
        <>
            <Layout>
                <Business />
                <About />
                <OurService />
                <Partnership />
                <Testimonials />
                <ContectUs />
            </Layout>
        </>
    )
}
