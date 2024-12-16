class _CartService {
    private static SingletonInstance: _CartService | null = null;
    private restaurant: number | undefined = undefined;
    private cart: any[];  
    public changes :number = 0
    
    constructor() {
      if (_CartService.SingletonInstance) {
        return _CartService.SingletonInstance;
      }  

      this.cart = [],
      this.changes = 0
      this.restaurant = undefined 

      _CartService.SingletonInstance = this;
    }

    add(obj, restaurantId = undefined){
      obj.id = new Date().getTime()
      if(restaurantId != undefined){
        this.restaurant = restaurantId; 
      }
      this.cart.push(obj)
      this.changes += 1
    }

    remove(obj){
      this.cart = this.cart.filter(i => i.id != obj.id)
      this.changes += 1
    }

    getItems(){
      return this.cart
    }

    clear(){
      this.cart = []
      this.changes += 1
    }

    restaurantMatch(id){
      if(this.restaurant == undefined){
        return true
      }
      return this.restaurant == id
    }

    getRestaurant(){
      return this.restaurant
    }
  }
  
  const CartService = new _CartService();

  export default CartService;