import { User} from '../Interfaces/User'
import {Restaurant} from '../Interfaces/Restaurant'
import { getRandRestaurant, getRandFood } from '../helpers/RandImg';

class _ApiService {
    private static SingletonInstance: _ApiService | null = null;
    
    private restaurants : Restaurant[] = []
    private users: User[] = []

    constructor() {
      if (_ApiService.SingletonInstance) {
        return _ApiService.SingletonInstance;
      }
        
      const mockData = require('../../assets/MockData.json');

      this.restaurants = mockData.restaurants
      
      for (let i = 0; i < mockData.restaurants.length; i++) {
        let url = getRandRestaurant();
        this.restaurants[i].profileImage = url;
        this.restaurants[i].thumnail = url;
        
        for (let j = 0; j < this.restaurants[i].items.length; j++) {
          this.restaurants[i].items[j].image = getRandFood()
        }
        
      }

      this.users = mockData.users
      
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
        if(isFilterByTagOnly){
          return this.restaurants.filter(r => r.tags.filter(t => t.includes(str)).length > 0 )
        }

        return this.restaurants.filter(r => 
            r.name.includes(str)
            // || r.tags.filter(t => t.includes(str)).length > 0
        ).sort((a, b )=> a.name.indexOf(str) - b.name.indexOf(str))
    }

    getItemInRestaurant(restaurantId, str){
      if(!this.restaurants){
        return []
      }
      const r = this.restaurants.filter(r=> r.id == restaurantId)

      if(r.length==0){
        return []
      }

      const foods = r[0].items
      if(!foods){
        return []
      }
      
      if(!str){
        return foods;
      }
      if (typeof(str) != 'string'){
          console.error("ApiService.getRestaurants : argument is not string")
          return []
      }

      return foods.filter(r => 
          r.name.includes(str)
      ).sort((a, b )=> a.name.indexOf(str) - b.name.indexOf(str))
    }

  }
  
  const ApiService = new _ApiService();
  Object.freeze(ApiService);
  export default ApiService;