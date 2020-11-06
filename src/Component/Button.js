import React from 'react'

const Button = ({ color, text, ...restProps }) => {
    return (
      <button style={{ color: color, width:"50px",height:"30px" }} {...restProps}>
        {text}
      </button>
    ); 
  };

export default Button
