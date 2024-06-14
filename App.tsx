import React from 'react';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
export default App;
