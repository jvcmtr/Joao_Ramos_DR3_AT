import { createContext, useState, useLayoutEffect} from 'react';
import ApiService from './ApiService'
import CacheService from './StorageService'

const Context = createContext();
export default Context;


export const ContextProvider = ({ children }) => {
  const [dt, setData] = useState({});
  const [Loading, setLoading] = useState(true)

  useLayoutEffect(()=>{
    const initData = async () => {
    };

    initData();
  },[])

  return (
    <Context.Provider value={{
        isLoading: Loading,
        setLoading: setLoading, 
        data: dt, 
        setData: setData 
    }}>

      {children}
    </Context.Provider>
  );
};

