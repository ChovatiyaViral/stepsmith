import React from 'react'
import AboutImage from '../../../images/Group3.png'
import RoundCircle from '../../../images/Ellipse6.png'
import { Link, makeStyles } from '@material-ui/core';
import { Col, Container, Row } from 'react-bootstrap';

const useStyle = makeStyles((theme) => ({
    AboutBg: {
        background: 'rgba(2, 171, 240,0.1)',
        padding: [[30,0,116]],
        position: 'relative',
        '&::before':{
            content:'',
            position:'absolute',
            backgroundImage:`url(${RoundCircle})`,
            width:'623px',
            height:'623px'
        },    
        '& h5':{
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: 1,
            color: '#02abf0',
            margin: '0px',
            paddingBottom: '16px',
            '& span':{
                color: '#000'
            }
        },
        '& p':{
            lineHeight: '24px',
            color:'#666666', 
            paddingRight: '90px',
            marginBottom: '30px'
        }
    },    
    BtnPrimary:{
        background:' #4dc4f4',
        borderRadius:'30px',
        color:'#fff',
        fontSize:'18px',
        fontWeight:400,
        padding:[[15,50]],
        border:'0px',
        '&:hover':{
            background: '#fff',
            color:'#000'
        }
    },
    AboutImg:{
        '& img':{
            width:'531px'
        },
    }

}));
export default function About() {
    const classes = useStyle();
    return (
        <section className={classes.AboutBg}>
            <Container>
                <Row>
                    <Col lg={6} className="d-flex flex-wrap align-content-center">
                        <h5>About <span>Us</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque
                        lorem, at elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum. Nunc
                        vehicula ligula arcu, vitae fringilla ipsum commodo ac.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque
                        lorem, at elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum. Nunc
                        vehicul aligula arcu, vitae fringilla ipsum commodo ac.</p>
                        <button className={classes.BtnPrimary} >Read More...</button>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <Link href="#" className={classes.AboutImg}><img src={AboutImage} alt=""/></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
