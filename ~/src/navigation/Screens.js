import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Articles, Components, Home, Profile, Register, Pro ,Pregnancy_Tracker } from '../screens';
import { useScreenOptions, useTranslation } from '../hooks';
const Stack = createStackNavigator();
export default () => {
    const { t } = useTranslation();
    const screenOptions = useScreenOptions();
    return (React.createElement(Stack.Navigator, { screenOptions: screenOptions.stack },
        React.createElement(Stack.Screen, { name: "Home", component: Home, options: { title: t('navigation.home') } }),
        React.createElement(Stack.Screen, { name: "Pregnancy_Tracking", component: Pregnancy_Tracker, options: { title: t('navigation.home') } }),
        React.createElement(Stack.Screen, { name: "Community", component: Components, options: screenOptions.components }),
        React.createElement(Stack.Screen, { name: "Components", component: Components, options: screenOptions.components }),
        React.createElement(Stack.Screen, { name: "Articles", component: Articles, options: { title: t('navigation.articles') } }),
        React.createElement(Stack.Screen, { name: "Pro", component: Pro, options: screenOptions.pro }),
        React.createElement(Stack.Screen, { name: "Profile", component: Profile, options: { headerShown: false } }),
        React.createElement(Stack.Screen, { name: "Register", component: Register, options: { headerShown: false } })));
};
