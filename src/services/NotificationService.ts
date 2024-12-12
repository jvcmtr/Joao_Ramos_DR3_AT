class _NotificationService {
    private static SingletonInstance: _NotificationService | null = null;  
    constructor() {
      if (_NotificationService.SingletonInstance) {
        return _NotificationService.SingletonInstance;
      }
      
      _NotificationService.SingletonInstance = this;
    }

  }
  
  const NotificationService = new _NotificationService();
  Object.freeze(NotificationService);
  export default NotificationService;