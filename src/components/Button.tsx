import React from "react"

type ButtonProps = {
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button(props: ButtonProps) {
  return (
    <div>
        <button onClick={(event) => { props.handleButtonClick(event, 1) }} >Click Me</button>
    </div>
  )
}

export default Button