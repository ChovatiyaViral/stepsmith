import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PartnershipImage from '../../../images/Group3.png';

const useStyle = makeStyles((theme) => ({
    PartnershipBg: {
        padding: [[58, 0, 89]],
        '& h5': {
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: 1,
            textAlign: 'center',
            color: '#02abf0',
            margin: '0px',
            paddingBottom: '39px',
            '& span': {
                color: '#000'
            }
        }
    },
    PartnershipBox: {
        display: 'block',
        textAlign: 'center',
        '& h1': {
            fontSize: '30px',
            fontWeight: 900,
            lineHeight: 1,
            color: ' #333333',
            margin: '0px',
            padding: [[30, 0, 21]]
        },
        '& p': {
            fontSize: '14px',
            margin: '0px',
            lineHeight: '19px',
            color: '#666666',
        }
    }
}));

export default function Partnership() {
    const classes = useStyle();
    return (
        <section className={classes.PartnershipBg}>
            <Container>
                <h5>Partnership <span>Model</span></h5>
                <Row>
                    <Col lg={4} md={4}>
                        <div className={classes.PartnershipBox}>
                            <Link href="#"><img src={PartnershipImage} alt=""/></Link>
                            <h1>Fixed Price Model</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque
                            lorem, at elementum tortor lacinia id.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className={classes.PartnershipBox}>
                            <Link href="#"><img src={PartnershipImage} alt=""/></Link>
                            <h1>Fixed Price Model</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque
                            lorem,
                            at elementum tortor lacinia id.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className={classes.PartnershipBox}>
                            <Link href="#"><img src={PartnershipImage} alt=""/></Link>
                            <h1>Fixed Price Model</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque
                            lorem,
                            at elementum tortor lacinia id.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
