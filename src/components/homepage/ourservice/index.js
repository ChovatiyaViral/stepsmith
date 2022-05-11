import { Link, makeStyles } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import OurServiceImage from '../../../images/Shape1.png';

const useStyle = makeStyles((theme) => ({
    OurServiceBg: {
        background: 'rgba(0, 0, 0,0.1)',
        padding: [[50, 0, 0]],
        position: 'relative',
        '& h5': {
            fontSize: '50px',
            fontWeight: 700,
            textAlign: 'center',
            color: '#02abf0',
            margin: '0px',
            paddingBottom: '29px',
            '& span': {
                color: '#000'
            }
        },
        '& p': {
            color: '#666666',
            lineHeight: '22px',
            textAlign: 'center',
            margin: '0px',
            padding: '0px 55px 54px',
            fontSize: '14px',
        }
    },
    OurServiceBox: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingBottom: '111px',
        '& img': {
            width: '88px'
        }
    },
    ServiceContent: {
        display: 'inline',
        width: 'calc(100% - 147px)',
        paddingLeft: '71px',
        '& h6': {
            fontSize: '30px',
            fontWeight: 900,
            lineHeight: 1,
            color: '#333333',
            margin: ' 0px',
            paddingBottom: '15px',
        },
        '& p': {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '18px',
            color: '#666666',
            textAlign: 'left',
            margin: '0px',
            padding: '0px'
        }
    }

}));

export default function OurService() {
    const classes = useStyle();
    return (
        <section className={classes.OurServiceBg}>
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto text-center">
                        <h5>Our <span>Service</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at ele-mentum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula
                        ligula arcu, vitae fringilla ipsum commodo ac.</p>
                    </Col>
                </Row>
                <Row className="row">
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className={classes.OurServiceBox}>
                            <Link href="#"><img src={OurServiceImage} alt="" /></Link>
                            <div className={classes.ServiceContent}>
                                <h6>Mobile Development</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat
                                pellentesque lorem, at elementum tortor lacinia id.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
