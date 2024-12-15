class _CartService {
    private static SingletonInstance: _CartService | null = null;
    private restaurant: number | undefined = undefined;
    private cart: any[];  
    
    constructor() {
      if (_CartService.SingletonInstance) {
        return _CartService.SingletonInstance;
      }  

      this.cart = [],
      this.restaurant = undefined 

      _CartService.SingletonInstance = this;
    }

    add(obj, restaurantId = undefined){
      if(restaurantId != undefined){
        this.restaurant = restaurantId; 
      }
      this.cart.push(obj)
    }

    getItems(obj){
      return this.cart
    }

    clear(){
      this.cart = []
    }

    restaurantMatch(id){
      if(this.restaurant == undefined){
        return true
      }
      return this.restaurant == id
    }
  }
  
  const CartService = new _CartService();

  export default CartService;