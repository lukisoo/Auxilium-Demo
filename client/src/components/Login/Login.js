import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo.png";
import ReactDOM from 'react-dom';
import DelayLink from 'react-delay-link';


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
        <div>
            <div>
            <Link to="/">
                <img style={{position: "absolute", height: "8vh", top: "3vh", left: "1.5vw"}} src={logo} alt="Logo"/>
            </Link>
            </div>
            <div class="userBoxes">
                    {error && <Alert className="w-75 mx-auto" variant="danger">{error}</Alert>}
                    <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <div disabled={loading} style={{color: "#CFDBD5"}} className="text-center mt-2">
                            Need an account? <Link style={{color: "#CFDBD5"}} to="/signup"><em>Sign Up Here</em></Link><br/><br/>
                        </div>


                         <DelayLink delay={2000} to="/profile"><p style={{height: "4.3vh", paddingTop: "0.3vh", marginTop: "2vh", color: "black", backgroundColor: "#F5CB5C", borderColor: "black", borderRadius: "0.4vw", width: "50%", margin: "0 auto 0 auto"}} className="newbutton">Log In</p></DelayLink> 
                    </Form>
            </div>

        </div>
        </>
    )
}

export default Login
