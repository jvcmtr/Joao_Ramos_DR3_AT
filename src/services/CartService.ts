class _CartService {
    private static SingletonInstance: _CartService | null = null;
    
    constructor() {
      if (_CartService.SingletonInstance) {
        return _CartService.SingletonInstance;
      }  
      _CartService.SingletonInstance = this;
    }

  }
  
  const CartService = new _CartService();
  Object.freeze(CartService);
  export default CartService;