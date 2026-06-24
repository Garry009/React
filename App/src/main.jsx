import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'

// function Custom()
// {
//     return(
//         <>
//             <h1>Hello React</h1>
//         </>
//     )
// }

const ReactElement= React.createElement('a',
     {className: 'heading',href:"https://www.google.com"},
      'Hello React')

createRoot(document.getElementById('root')).render(
//    <Custom/> 
//ReactElement
<App/>
)
