import { createContext, useState, useLayoutEffect} from 'react';
import {LightTheme} from './appColours.js'
import {DarkTheme }from './appColours.js'

const light = 'light'
const dark = 'dark'

const ColourPalete = createContext();
export default ColourPalete;


export const ThemeProvider = ({ children }) => {
  const [curTheme, setTheme] = useState(light);

    const getPallete = () =>{
        return curTheme == light? LightTheme : DarkTheme
    }

  return (
    <ColourPalete.Provider value={{
        toggleTheme : ()=> setTheme(curTheme==light? dark : light),
        currentTheme : curTheme,
        ...getPallete()
    }}>
      {children}
    </ColourPalete.Provider>
  );
};

