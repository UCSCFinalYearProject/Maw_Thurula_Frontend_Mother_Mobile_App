import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Articles, Components, Home, Profile, Register, Pro } from '../screens';
import AR_Baby  from '../screens/AR/AR_Baby';
import PregnancyTracker from '../screens/Pregnancy_tracking/PregnancyTracker';
import { useScreenOptions, useTranslation } from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const { t } = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: t('navigation.home') }}
      />

      <Stack.Screen
        name="Community"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{ title: t('navigation.articles') }}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Pregnancy_Tracking"
        component={PregnancyTracker}
        options={{ title: t('navigation.home') }}
      />

      <Stack.Screen
        name="AR"
        component={AR_Baby}
        options={{ title: t('navigation.home') }}
      />
    </Stack.Navigator>
  );
};
