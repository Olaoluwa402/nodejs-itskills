import React from 'react'

const Button = ({style, text}) => {
  return (
    <button style={{cursor:'pointer', padding:'10px 20px',
    marginTop:'20px',
    borderRadius:'10px', ...style}}>
        {text}
    </button>
  )
}

export default Button
