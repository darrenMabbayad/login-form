import React, { useState, useEffect } from 'react'
import Form from './Form'

function Login() {
    //--- Window Width State Variable ---//
    const [windowWidth, setWindowWidth] = useState(window.innerWidth) // used for responsive styles

    //--- Check the size of the window ---//
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {window.removeEventListener('resize', handleResize)}
    }, [])

    //--- Input Form Values State Variables ---//
    const [isRegistered, setIsRegistered] = useState(false)
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
    })

    //--- Form Validation State Variables ---//
    const [isValidFirstName, setIsValidFirstName] = useState(false)
    const [isValidLastName, setIsValidLastName] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    //--- Field Validation Logic ---//
    const patterns = {
        /* 
        name structure is => any letter, ignore case, two or more characters
        email structure is => 
            name: any letter, lowercase, dots, underscores, and hyphens included, any length, followed by an @ symbol
            domain: any letter, lowercase, hyphens included, any length, followed by a dot (.)
            extension: any letter, lowercase
            optional extension: any letter, lowercase, between 2 and 8 characters
        password structure is => any letter, ignore case, any number, special characters included
        */
        name: /^([a-z]{2,})$/i,
        email: /^([a-z\d.-_]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]{2,8})?$/,
        password: /^[\w\W]{8,}$/
    }

    function validateField(name, value) {
        /*
            Check if the first and last names have at least 2 characters, only letters
            Check if the email address has a value and contains the pattern name@domain.extension(.secondExtension is optional)
            Check if the password is more than 7 characters, allow special characters
        */
        if (name === 'firstName') {
            patterns.name.test(value) ? setIsValidFirstName(true) : setIsValidFirstName(false)
        } else if (name === 'lastName') {
            patterns.name.test(value) ? setIsValidLastName(true) : setIsValidLastName(false)
        } else if (name === 'emailAddress') {
            patterns.email.test(value) ? setIsValidEmail(true) : setIsValidEmail(false)
        } else if (name === 'password') {
            patterns.password.test(value) ? setIsValidPassword(true) : setIsValidPassword(false)  
        }
    }

    //--- Input Field Handlers ---//
    function handleChange(event) {
        const { name, value } = event.target

        setCredentials(prev => ({...prev, [name]: value}))
        validateField(name, value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!isRegistered) {
            setIsRegistered(true);
        } else {
            console.log('Yay logged in!')
        }
    }


    return (
        <main>
            <div style={{width: '100%'}}>
                <h1 className='heading'>{isRegistered ? 'Welcome Back!' : 'Create Account'}</h1>
                <div className='form-wrapper'>
                    <Form 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        credentials={credentials} 
                        isRegistered={isRegistered}
                        isValidFirstName={isValidFirstName}
                        isValidLastName={isValidLastName} 
                        isValidEmail={isValidEmail}
                        isValidPassword={isValidPassword}
                        windowWidth={windowWidth}
                    />
                </div>
                {
                    isRegistered ? null :
                    <button className='already-registered-btn' onClick={() => setIsRegistered(prev => !prev)}>
                        <p className='already-registered-btn-text'>Already Registered?</p>
                    </button>
                }
            </div>
        </main>
    )
}

export default Login