import 'react-native-gesture-handler';
import React from 'react';
import { DataProvider } from './src/hooks';
import AppNavigation from './src/navigation/App';
export default function App() {
    return (React.createElement(DataProvider, null,
        React.createElement(AppNavigation, null)));
}
