import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
import {getPermissionsAsync, scheduleNotificationAsync, requestPermissionsAsync} from 'expo-notifications';

class _NotificationService {
    private static SingletonInstance: _NotificationService | null = null;  
    constructor() {
      if (_NotificationService.SingletonInstance) {
        return _NotificationService.SingletonInstance;
      }
      
      _NotificationService.SingletonInstance = this;
    }


  async sendNotification(title, message){
      const per = await this.hasPermission()
      console.log(per)
      await Notifications.scheduleNotificationAsync({
        content: {
          title: title,
          body: message,
          data: { key: new Date().getTime() },
        },
        trigger: { seconds: 1 },
      })
      // PushNotification.localNotification({
    //   title: title,
    //   message: message,
    // });
  };

  async getPermission(){
    return await requestPermissionsAsync();
  }

  async hasPermission(){
    const permission = await getPermissionsAsync();
    if (!permission.granted) {
      await this.getPermission()
    }
    return permission
  }

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