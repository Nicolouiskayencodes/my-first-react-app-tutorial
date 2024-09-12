import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Description, Foods, Convert } from './Greeting.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Description />
    <Foods />
    <Convert />
    <App />
  </StrictMode>,
)
