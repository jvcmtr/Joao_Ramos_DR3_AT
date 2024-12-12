class _StorageService {
    private static SingletonInstance: _StorageService | null = null;  
    constructor() {
      if (_StorageService.SingletonInstance) {
        return _StorageService.SingletonInstance;
      }
      
      _StorageService.SingletonInstance = this;
    }

  }
  
  const StorageService = new _StorageService();
  Object.freeze(StorageService);
  export default StorageService;