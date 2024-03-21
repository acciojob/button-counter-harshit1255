
import React from "react";
import './../styles/App.css';
import {usesState} from 'react'

const App = () => {
 const [count, setcount] = useState(0)
 function onclick()
  {
    setcount(count++);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onclick={onclick}>Click me</button>
    </div>
  )
}

export default App
