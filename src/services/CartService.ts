class _CartService {
    private static SingletonInstance: _CartService | null = null;
    
    constructor() {
      if (_CartService.SingletonInstance) {
        return _CartService.SingletonInstance;
      }  

      this.cart = [],
      this.restaurant = undefined

      _CartService.SingletonInstance = this;
    }

    add(obj){
      this.cart.push(obj)
    }
    getItems(obj){
      return this.cart
    }
    clear(){
      this.cart = []
    }
    restaurantMatch(id){
      return this.restaurant == id
    }
  }
  
  const CartService = new _CartService();
  Object.freeze(CartService);
  export default CartService;