import { ContextProvider } from './src/helpers/Context';
import { ThemeProvider } from 'react-native-paper';
import AppNavigation from './AppNavigation';

const  Tabs =  createBottomTabNavigator();

export default function App() {
  
  return (
    <ContextProvider>
      <ThemeProvider>
        <AppNavigation/>
      </ThemeProvider>
    </ContextProvider>
  );
}