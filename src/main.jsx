import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'

const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <App />
  </QueryClientProvider>
)
