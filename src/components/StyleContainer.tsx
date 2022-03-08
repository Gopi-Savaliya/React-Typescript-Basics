import React from 'react'

type StyleContainerProps = {
    styles: React.CSSProperties
}

function StyleContainer(props: StyleContainerProps) {
  return (
    <div style={props.styles} >StyleContainer</div>
  )
}

export default StyleContainer