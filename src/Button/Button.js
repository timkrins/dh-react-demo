import React from 'react'
import './Button.css'

const Button = ({ color, onClick, disabled, children }) => (
  <button
    className="Button btn btn-light"
    type='button'
    disabled={disabled}
    onClick={onClick}
    style={{ backgroundColor: color }}
  >
    {children}
  </button>
)

export default Button