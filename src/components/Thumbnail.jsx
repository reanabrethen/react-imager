import React from 'react'

function Thumbnail(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <img key={props.path} onClick={()=>props.clickFunc(props.imageNum)} style={{width: 150, padding: 30}} src={props.path} />
    </div>
  )
}

export default Thumbnail