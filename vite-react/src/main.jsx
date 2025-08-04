import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import New from './new.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New/>
  </StrictMode>,
)
