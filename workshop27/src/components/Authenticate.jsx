import { useState } from 'react'

export default function Authentication ({ token }) {
    const [successMessage, setSuccessMessage] = useState (null);
    const [error, setError] = useState(null);

    async function handleClick(){
        try{
            fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${your-token-here}` 
                }
              });
              const result = await response.json();
              setSuccessMessage(result.message);
        }
        catch(error){
            setError(error.message);
        }
    }
    return (
    <>
       <h2>Authenticate</h2>
       {successMessage && <p>{successMessage}</p>}
       {error && <p>{error}</p>}
    <button onClick ={handleClick}> 
        Authenticate Token!
    </button>
    </>
    )
}