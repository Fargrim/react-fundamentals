// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const userNameInputValue = inputRef.current.value;
    onSubmitUsername(userNameInputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} type="text" id="usernameInput" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
