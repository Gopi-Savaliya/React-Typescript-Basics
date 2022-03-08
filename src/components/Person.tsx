import { PersonProps } from './Person.type'

function Person(props: PersonProps) {
  return (
    <div>
        {props.name.firstName} {props.name.lastName}
    </div>
  )
}

export default Person