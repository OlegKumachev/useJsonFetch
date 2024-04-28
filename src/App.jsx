import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DataComponent } from './components/DataComponent'
import { LoadingComponent } from './components/LoadingComponent'
import { ErrorComponent } from './components/ErrorComponent'

function App() {
  const [count, setCount] = useState(0)

  return  (
    <div>
      <LoadingComponent />
      <DataComponent />
      <ErrorComponent />
      
    </div>
  );
}

export default App
