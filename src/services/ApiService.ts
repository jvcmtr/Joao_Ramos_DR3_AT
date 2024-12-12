import { User} from '../Interfaces/User'
import {Restaurant} from '../Interfaces/Restaurant'

class _ApiService {
    private static SingletonInstance: _ApiService | null = null;
    
    private restaurants : Restaurant[] = []
    private users: User[] = []

    constructor() {
      if (_ApiService.SingletonInstance) {
        return _ApiService.SingletonInstance;
      }
      try{
        
        const mockData = require('../../assets/MockData.json');
        const data = JSON.parse(mockData)
        this.restaurants = data.restaurants
        this.users = data.users
      }
      catch(e){
        console.log(e)
      }
      
      _ApiService.SingletonInstance = this;
    }
    
    getRestaurants(str, isFilterByTagOnly = false){
        if(!str){
            return this.restaurants;
        }
        if (typeof(str) != 'string'){
            console.error("ApiService.getRestaurants : argument is not string")
            return []
        }
        if(!isFilterByTagOnly){
          return this.restaurants.filter(r => r.tags.filter(t => t.includes(str)).length > 0 )
        }

        return this.restaurants.filter(r => 
            r.name.includes(str)
            || r.tags.filter(t => t.includes(str)).length > 0
        ).sort((a, b )=> a.name.indexOf(str) - b.name.indexOf(str))
    }

  }
  
  const ApiService = new _ApiService();
  Object.freeze(ApiService);
  export default ApiService;