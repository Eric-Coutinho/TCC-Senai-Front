import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from './components/Navbar/navbar.jsx';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <Analytics />
      <NavbarComponent />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
