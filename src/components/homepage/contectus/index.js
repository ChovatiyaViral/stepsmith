import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Container } from 'react-bootstrap';

const useStyle = makeStyles((theme) => ({
    ContectUsBg: {
        background: '#02abf0'
    },
    ContectUsContent: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '35px 0px',
        '& h1': {
            margin: '0px',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1,
            '& span': {
                color: '#000'
            }
        },
        '& button': {
            borderRadius: 25,
            background: '#fff',
            color: '#000',
            padding: [[16, 40]],
            fontSize: 18,
            lineHeight: 1,
            border:'0px',
            marginLeft:'auto'
        }
    }
}));

export default function ContectUs() {
    const classes = useStyle();
    return (
        <section className={classes.ContectUsBg}>
            <Container>
                <div className={classes.ContectUsContent}>
                    <h1>Let's talk about your <span> project</span></h1>
                    <button>Contact Us</button>
                </div>
            </Container>
        </section>
    )
}
