import React from "react"

type InputProps = {
    value: string
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  return (
    <div>
        <input type='text' value={props.value} onChange={props.onChangeHandler} />
    </div>
  )
}

export default Input