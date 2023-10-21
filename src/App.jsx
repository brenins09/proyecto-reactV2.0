//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import elemento1 from './components/componente-uno/ElementOne';
import leon from '../src/assets/leon.jpg'

//const elemento1 = <h1>Hello world! one</h1>;
const name = "james rodriguez";
const element = <h1>Hello {`2+2 = ${2+2} ${name}`}</h1>
const objExample = {
name: 'jhon', 
lasName: 'vargas', 
age: 30, 
city: 'new york'
};
const fullName = (
  <div>
    <h1>Hola este es el nombre completo {formatName(objExample)}</h1>
    <h2>Hola este es el nombre completo {formatName(objExample)}</h2>
  </div>
  )
const valorAtributo = 2

function formatName(user) {
  return user.name + ' ' + user.lasName;
}

function renderAge(user){
  return (
    <>
      <h1>La edad es de: {user.age}</h1>
      <h2>La edad es de: {user.age}</h2>
    </>
  )
}

function App() {
  //const [count, setCount] = useState(0)
  const elemento2 = <h1 id='id-unico' tabIndex={valorAtributo} className='hola2'>Hello world! two</h1>

  return (
    <div>
      {elemento1}
      {elemento2}
      {element}
      <p style={{
        border: 'red solid',
        borderRadius: '18px',
        backgroundColor: 'yellow'
        }}
      >
        el nombre completo es: {formatName(objExample)}</p>
      {fullName}
      {renderAge(objExample)}
      <img src={leon} alt="react logo"/>
    </div>
  )
}

export default App
