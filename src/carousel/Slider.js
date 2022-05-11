import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
import SliderImage from '../images/Shape1.png'
import { Col, Row } from 'react-bootstrap';

export default function Slider() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    };
    

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <Carousel.Caption>
                            <h5>Business Efficient</h5>
                            <h1>website Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque feugiat pellentesque lorem,at elementum tortor lacinia id.
                            Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula ligula arcu,
                             vitae fringilla ipsum commodo ac.</p>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img src={SliderImage} width="551px" height="430px" alt=""/>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <Carousel.Caption>
                            <h5>Business Efficient</h5>
                            <h1>website Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque feugiat pellentesque lorem,at elementum tortor lacinia id.
                            Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula ligula arcu,
                             vitae fringilla ipsum commodo ac.</p>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img src={SliderImage} width="551px" height="430px" alt=""/>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <Carousel.Caption>
                            <h5>Business Efficient</h5>
                            <h1>website Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque feugiat pellentesque lorem,at elementum tortor lacinia id.
                            Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula ligula arcu,
                             vitae fringilla ipsum commodo ac.</p>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img src={SliderImage} width="551px" height="430px" alt=""/>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <Carousel.Caption>
                            <h5>Business Efficient</h5>
                            <h1>website Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque feugiat pellentesque lorem,at elementum tortor lacinia id.
                            Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula ligula arcu,
                             vitae fringilla ipsum commodo ac.</p>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img src={SliderImage} width="551px" height="430px" alt=""/>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <Carousel.Caption>
                            <h5>Business Efficient</h5>
                            <h1>website Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque feugiat pellentesque lorem,at elementum tortor lacinia id.
                            Duis iaculis euismod mauris ullamcorper dictum. Nunc vehicula ligula arcu,
                             vitae fringilla ipsum commodo ac.</p>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img src={SliderImage} width="551px" height="430px" alt=""/>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}
