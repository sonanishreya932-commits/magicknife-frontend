
console.log("🔥 MAIN.JSX IS RUNNING!");
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

console.log("🔥 RENDERING APP...");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
