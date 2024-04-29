import React from 'react'

function Button(props) {
  return (
    <div>
        <button style={{backgroundColor: 'aquamarine', fontFamily: 'cursive'}} onClick={props.clickFunc}>{props.text}</button>
    </div>
  )
}

export default Button