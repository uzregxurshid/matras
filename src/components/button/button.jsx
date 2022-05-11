import React from 'react'
import './button.scss'
const Button = (props) => {

  return (
    <button className={`spbutton ${props.class}`} style={{ width: props.width, height:props.height }} onClick={props.onClick}>
      {props.text}
      <img className={`spbutton__img ${props.classimg}`} src={props.img} alt={props.alt}/>
    </button>
  )
}

export default Button