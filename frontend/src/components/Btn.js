import React from 'react'
import { Button } from 'react-bootstrap'
import RequireAuth from './RequireAuth'

const Btn = (props) => {
    return <Button variant="info" href={props.link}>{props.label}</Button>
}

export default RequireAuth(Btn)