import React from 'react'

function FormField({type, value, name, placeholder, onChange, isValidInput, errorMessage}) {
    const containerStyles = {
        marginBottom: '1em'
    }

    const tooltipStyles = {
        color: '#696969',
        fontWeight: 'bold',
        fontSize: '0.825rem',
    }

    const inputStyles = {
        border: 'none',
        borderBottom: 'solid #e3e3e3 1px',
        width: '100%',
        padding: '0.5rem',
        marginBottom: '0.25em'
    }

    return (
        <div style={containerStyles}>
            <input 
                style={inputStyles}
                type={type}
                value={value} 
                name={name} 
                placeholder={placeholder}
                onChange={event => onChange(event)} 
            />
            {!isValidInput ? <div><p style={tooltipStyles}>{errorMessage}</p></div> : null}
        </div>
    )
}

export default FormField
