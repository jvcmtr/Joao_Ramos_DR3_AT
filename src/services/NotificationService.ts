import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
class _NotificationService {
    private static SingletonInstance: _NotificationService | null = null;  
    constructor() {
      if (_NotificationService.SingletonInstance) {
        return _NotificationService.SingletonInstance;
      }
      
      _NotificationService.SingletonInstance = this;
    }

  sendNotification(title, message){
    PushNotification.localNotification({
      title: title,
      message: message,
    });
  };

  sendAlert(title, message, buttons = [{ text: 'OK', onPress: () => {} }]){
    Alert.alert(title, message, buttons);
  };

  sendConfirmation(title, message, onConfirm = ()=>{}, onCancel =()=>{}){
    let buttons = [{ text: 'OK', onPress: onConfirm }, 
      { text: 'Cancel', onPress: onCancel }]
    Alert.alert(title, message, buttons);
  };

}
  
  const NotificationService = new _NotificationService();
  Object.freeze(NotificationService);
  export default NotificationService;