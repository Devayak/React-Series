import { createElement} from "react";
import {createRoot} from 'react-dom/client'
const root=createRoot(document.querySelector('#root'))
const ReactElement=createElement('h1,null,"hello createElement"')
root.render(ReactElement)