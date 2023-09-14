// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({ className, style, children }) => {
  const fullStyles = {
    ...style,
    fontStyle: 'italic'
  }
  return <div className={`${className} box`} style={fullStyles}>{children}</div>
}

const smallBox = <Box className="box box--small" style={{ backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box className="box box--medium" style={{ backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box className="box box--large" style={{ backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
