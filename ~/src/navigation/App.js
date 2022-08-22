import React, { useEffect } from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Menu from './Menu';
import { useData, ThemeProvider, TranslationProvider } from '../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block } from '../components';
export default () => {
    const { isDark, theme, setTheme } = useData();
    /* set the status bar based on isDark constant */
    useEffect(() => {
        Platform.OS === 'android' && StatusBar.setTranslucent(true);
        StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
        return () => {
            StatusBar.setBarStyle('default');
        };
    }, [isDark]);
    // load custom fonts
    const [fontsLoaded] = useFonts({
        'OpenSans-Light': theme.assets.OpenSansLight,
        'OpenSans-Regular': theme.assets.OpenSansRegular,
        'OpenSans-SemiBold': theme.assets.OpenSansSemiBold,
        'OpenSans-ExtraBold': theme.assets.OpenSansExtraBold,
        'OpenSans-Bold': theme.assets.OpenSansBold,
        "Bindumathi": theme.assets.Bindumathi
    });
    if (!fontsLoaded) {
        return React.createElement(AppLoading, null);
    }
    const navigationTheme = {
        ...DefaultTheme,
        dark: isDark,
        colors: {
            ...DefaultTheme.colors,
            border: 'rgba(0,0,0,0)',
            text: String(theme.colors.text),
            card: String(theme.colors.card),
            primary: String(theme.colors.primary),
            notification: String(theme.colors.primary),
            background: String(theme.colors.background),
        },
    };
    return (React.createElement(TranslationProvider, null,
        React.createElement(ThemeProvider, { theme: theme, setTheme: setTheme },
            React.createElement(NavigationContainer, { theme: navigationTheme },
                React.createElement(Menu, null)))));
};
const MauthurulaLoading = () => {
    return (React.createElement(SafeAreaView, null,
        React.createElement(Block, { flex: 0, align: "center" },
            React.createElement(Text, null, "Loading  Maw Thurula"))));
};
