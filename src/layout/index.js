import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            {
                props.children
            }
            <Footer />
        </>
    )
}
