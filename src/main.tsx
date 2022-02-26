import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './styles/GlobalStyles'

import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
      <Home />
      <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
