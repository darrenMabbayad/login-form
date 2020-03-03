import React from 'react'
import FormField from './FormField';

function Form({ 
    handleSubmit, 
    handleChange, 
    credentials, 
    isRegistered, 
    isValidFirstName,
    isValidLastName, 
    isValidEmail, 
    isValidPassword,
    windowWidth
}) {
    // display a form with this type of layout
    /*

                Heading     
        
        ----------- -----------
        -----------------------
        -----------------------

        -----------------------
        |       Sign Up       |
        -----------------------
          Already Registered?

        Screens of less than 420vw will display the first and last name input fields
        one on top of the other instead of the display flex layout
    */
    return (
        <form onSubmit={event => handleSubmit(event)}>
            {
                isRegistered ?
                    <div style={{width: '100%'}}>
                        <FormField 
                            type='text'
                            value={credentials.emailAddress} 
                            name='emailAddress' 
                            placeholder='Email' 
                            onChange={handleChange}
                            isValidInput={isValidEmail}
                            errorMessage=''
                        />
                        <FormField 
                            type='password'
                            value={credentials.password} 
                            name='password' 
                            placeholder='Password'
                            onChange={handleChange}
                            isValidInput={isValidPassword}
                            errorMessage=''
                        />
                    </div> :
                    <div>
                        {
                            windowWidth < 420 ?
                            <div>
                                <FormField 
                                    type='text'
                                    value={credentials.firstName} 
                                    name='firstName' 
                                    placeholder='First Name' 
                                    onChange={handleChange} 
                                    isValidInput={isValidFirstName}
                                    errorMessage='* Required'
                                />
                                <FormField 
                                    type='text'
                                    value={credentials.lastName} 
                                    name='lastName' 
                                    placeholder='Last Name' 
                                    onChange={handleChange} 
                                    isValidInput={isValidLastName}
                                    errorMessage='* Required'
                                /> 
                            </div> :
                            <div className='flex-name-field-wrapper'>
                                <div className='flex-name-field'>
                                    <FormField 
                                        type='text'
                                        value={credentials.firstName} 
                                        name='firstName' 
                                        placeholder='First Name' 
                                        onChange={handleChange} 
                                        isValidInput={isValidFirstName}
                                        errorMessage='* Required'
                                    />
                                </div>
                                <div className='flex-name-field'>
                                    <FormField 
                                        type='text'
                                        value={credentials.lastName} 
                                        name='lastName' 
                                        placeholder='Last Name' 
                                        onChange={handleChange} 
                                        isValidInput={isValidLastName}
                                        errorMessage='* Required'
                                    />                                           
                                </div>
                            </div>
                        }
                        <FormField 
                            type='text'
                            value={credentials.emailAddress} 
                            name='emailAddress' 
                            placeholder='Email' 
                            onChange={handleChange}
                            isValidInput={isValidEmail}
                            errorMessage='* Must provide a valid email address'
                        />
                        <FormField 
                            type='password'
                            value={credentials.password} 
                            name='password' 
                            placeholder='Password' 
                            onChange={handleChange}
                            isValidInput={isValidPassword}
                            errorMessage='* Password must be 8 or more characters'
                        />   
                    </div>
            }
            <div className='button-wrapper'>
                <button className='login-btn' type='submit' disabled={!(isValidFirstName && isValidLastName && isValidEmail && isValidPassword)}>
                    {isRegistered ? 'Log In' : 'Sign Up'}
                </button>
            </div>
        </form>
    )
}

export default Form