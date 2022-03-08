import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import StyleContainer from './components/StyleContainer';

function App() {
  const personName = {
    firstName: 'Gopi',
    lastName: 'Savaliya'
  }

  const names = [
    {
      firstName: 'Gopi',
      lastName: 'Savaliya'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      firstName: 'Princess',
      lastName: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Gopi' isLoggedIn={true} />
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={names} />
      <hr />
      <Status status='loading' />
      <hr />
      <Heading>Heading</Heading>
      <Oscar>
        <Heading>Oscar Heading</Heading>
      </Oscar>
      <hr />
      <Button handleButtonClick={ (event, id) => {
        console.log('Button Clicked', event, 'id:',id);
      } } />
      <hr />
      <Input value='' onChangeHandler={ (event) => { console.log(event); } } />
      <hr />
      <StyleContainer styles={{ border: '1px solid black', padding: '2rem', margin: '2rem'}} />
    </div>
  );
}

export default App;
