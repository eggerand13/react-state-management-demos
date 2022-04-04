import React from 'react'

function useTheme(){

  const [theme, setTheme] = React.useState("light")

   const toggleTheme = React.useCallback(() => {
      setTheme(theme === "light" ? "dark" : "light") 
   },[theme])

  return [theme, toggleTheme]
}

export default useTheme