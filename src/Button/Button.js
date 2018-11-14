import React from 'react'
import './Button.css'

const Button = ({ onClick, children }) => (
  <button className="Button" type='button' onClick={onClick}>
    {children}
  </button>
)

export default Button