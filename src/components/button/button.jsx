import React from 'react'
import './button.scss'
const Button = (props) => {

  return (
    <button className='sp_button' style={{ width: props.width, height:props.height }} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button