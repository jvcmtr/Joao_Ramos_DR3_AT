import { createContext, useState, useLayoutEffect} from 'react';
import LightTheme from './appColours.js'
import DarkTheme from './appColours.js'

const light = 'light'
const dark = 'dark'

const ColourPalete = createContext();
export default Context;


export const ThemeProvider = ({ children }) => {
  const [curTheme, setTheme] = useState(light);

    const getPallete = () =>{
        return curTheme == light? LightTheme : DarkTheme
    }

  return (
    <Context.Provider value={{
        toggleTheme : ()=> setTheme(curTheme==light? dark : light),
        currentTheme : curTheme,
        ...getPallete()
    }}>
      {children}
    </Context.Provider>
  );
};

