import { createContext, useState, useLayoutEffect} from 'react';
import ApiService from '../services/ApiService'
import CacheService from '../services/StorageService'
import { getRestaurant } from './utils';

const Context = createContext();
export default Context;


export const ContextProvider = ({ children }) => {
  const [dt, setData] = useState([]);
  const [currRestaurant, setCurrent] = useState(0);
  const [Loading, setLoading] = useState(true)

  useLayoutEffect(()=>{
    const initData = async () => {
      let data = ApiService.getRestaurants()
      setData(data)
      setLoading(false)
    };

    initData();
  },[])

  return (
    <Context.Provider value={{
        isLoading: Loading,
        setLoading: setLoading, 
        data: dt, 
        setData: setData,
        restaurant: getRestaurant(currRestaurant, dt),
        setRestaurant: (restaurant) => setCurrent(restaurant.id)
    }}>

      {children}
    </Context.Provider>
  );
};

