
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Rout from  './Components/reactrouter/src/Component/Rout.jsx'
import { Root } from 'postcss'
// import Rout from './Components/Router/Rout.jsx'

createRoot(document.getElementById('root')).render(
 <App/>
)
// createRoot(document.getElementById('root')).render(
// <Root/>
// )

