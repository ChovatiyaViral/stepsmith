import React from 'react'
import TestimonialImage from '../../../images/Group3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    TestimonialBg: {
        display: 'block',
        padding: [[51, 0, 100]],
        background: 'rgba(2, 171, 240,0.1)',
        '& h5': {
            fontSize: '50px',
            fontWeight: 700,
            lineHeight: 1,
            textAlign: 'center',
            color: '#02abf0',
            margin: '0px',
            paddingBottom: '49px'
        },
        '& .slick-slider': {
            position: 'relative',
            overflow: 'hidden',
            '& .slick-dots': {
                position: 'static',
                '& li': {
                    '& button': {
                        '&:hover': {
                            color: '#02abf0',
                            '&::before': {
                                fontSize: '10px',
                                color: '#02abf0'
                            }
                        },
                        '&::before': {
                            fontSize: '10px',
                        }
                    },
                    '&.slick-active': {
                        '& button': {
                            '&::before': {
                                color: '#02abf0'
                            }
                        }
                    }

                }
            },
        }

    },
    TestimonialBox: {
        padding: '20px 16px',
        borderRadius: '10px',
        background: '#fff',
        margin: [[5, 0, 5, 29]],
        opacity: 0.6,
        boxShadow: '1px 1px 10px #7f7c7c',
        '&:hover': {
            opacity: 1
        },
        '& p': {
            fontSize: '14px',
            lineHeight: '18px',
            color: '#666666',
            margin: '0px',
            fontWeight: 400
        }
    },
    TestimonialTop: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        border: '0px',
        padding: [[0, 0, 20, 0]],
        '& img': {
            display: 'block',
            width: '81px'
        },
        '& h3': {
            fontSize: '20px',
            fontWeight: 700,
            color: '#333333',
            lineHeight: 1,
            margin: '0px',
            paddingLeft: '20px',
            display: 'inline',
            width: 'calc(100% - 81px)',
            '& span': {
                display: 'block',
                fontSize: '16px',
                fontWeight: 400,
                color: '#666666',
                paddingTop: '4px'
            }
        }
    }
}));

export default function Testimonial() {
    const classes = useStyle();
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className={classes.TestimonialBg}>
            <h5>Testimonials</h5>
            <Slider {...settings}>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
                <div>
                    <div className={classes.TestimonialBox}>
                        <div className={classes.TestimonialTop}>
                            <Link href="#"><img src={TestimonialImage} width="80px" alt="" /></Link>
                            <h3>Rean John Uehara <span>CEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat pellentesque lorem,
                        at
                        elementum tortor lacinia id. Duis iaculis euismod mauris ullamcorper dictum.</p>
                    </div>
                </div>
            </Slider>
        </section >
    )
}
