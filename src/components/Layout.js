import React from 'react'
import  Jumbotron  from 'react-bootstrap/Jumbotron'
import { Container } from 'react-bootstrap'

export const Layout = (props) => (
    <Container>
        {props.children}
        </Container>
)