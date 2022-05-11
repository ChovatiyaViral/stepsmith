import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../../../carousel/Slider';

const useStyle = makeStyles((theme)=>({
    BusinessBg:{
        padding:[[77,0,83]]
    }
}))

export default function Business() {
    const classes = useStyle();
    return (
        <section className={classes.BusinessBg}>
            <Container className="p-0">
                <Slider />
            </Container>
        </section>
    )
}
