// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const userNameInputValue = event.target.elements.usernameInput.value;
    onSubmitUsername(userNameInputValue);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setError(inputValue === inputValue.toLowerCase() ? null : 'Username must be lower case!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleInputChange} type="text" id="usernameInput" />
      </div>
      <button disabled={error} type="submit">Submit</button>
      <span>{error}</span>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
