import React from 'react';
import {requestPermissionsAsync} from 'expo-notifications'

import { ContextProvider } from './src/helpers/Context';
import { ThemeProvider } from './src/helpers/Theme';
import AppNavigation from './AppNavigation';

export default function App() {

  return (
    <ContextProvider>
      <ThemeProvider>
        <AppNavigation/>
      </ThemeProvider>
    </ContextProvider>
  );
}