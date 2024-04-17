import { useState } from 'react'


export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username, 
          password,
        }),
      })
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>  <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="button">Submit</button>
      </form>
    </>
  )
}

