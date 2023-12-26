import './App.css'
import { useRef, useState } from 'react'
import Form from './Form';
import Confirm from './Confirm';

function App() {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false);
  const inputRef = useRef();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleSubmit = (value ) => {
    const isValidEmail = emailRegex.test(value);
    if(!isValidEmail) {
      setError(true);
      return;
    }
    setInput(value);
  }

  let cssClass = error ? 'error' : ''

  return (
    <>
      {
        input != '' ? <Confirm input={input} /> :
          <Form
            ref={inputRef}
            handleSubmit={handleSubmit}
            cssClass={cssClass}
            error={error}
          />
      }
    </>
  )
}

export default App
