import { useState } from 'react'
import './App.css'
import './index.css'
import Authentication from './components/Authenticate';
import SignUpForm from './components/SignUpForm';

 function App() {
 const [token, setToken] = useState(null);
 const [message, setMessage] = useState("");

  return (
    <>
      <Authentication
      token={token}
      setToken={setToken}
      message ={message}
      setMessage ={setMessage}
       />
      <SignUpForm
      token={token}
      setToken ={setToken}
      message={message}
      setMessage={setMessage}
       />
    </>
  )
}

export default App