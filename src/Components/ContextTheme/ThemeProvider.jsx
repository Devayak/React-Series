import React, { useState } from 'react'
import Context from './Contexts/Context'

const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState('light')
    console.log('themeprovider:',theme);
  return (
    <Context.Provider value={{theme,setTheme}}>
        {children}

    </Context.Provider>
  )
}

export default ThemeProvider