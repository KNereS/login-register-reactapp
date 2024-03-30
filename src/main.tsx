import React from 'react'
import ReactDOM from 'react-dom/client'
import PageTitle from './App.tsx'
import Form from './Form.tsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='container'>
      <PageTitle />
      <Form />
    </div>
  </React.StrictMode>,
)
