import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Articles, Components, Home, Profile, Register, Pro } from '../screens';
import AR_Baby from '../screens/AR/AR_Baby';
import MainArticle from '../screens/MainArticles/MainArticle';;
import PregnancyTracker from '../screens/Pregnancy_tracking/PregnancyTracker';
import { useScreenOptions, useTranslation } from '../hooks';
import BabyTracker from '../screens/Baby_tracking/BabyTracker';
import Community from '../screens/Community/Community';
import Prediatrician from '../screens/Prediatrician/Prediatrician';
import PrediatricianProfile from '../screens/PrediatricianProfile/PrediatricianProfile';
import Tools from '../screens/tools/Tools';
import EDD from '../screens/tools/EDD';
import Ovulation from '../screens/tools/Ovulation';
import Ecommerce from '../screens/ECommerce/Ecommerce';
const Stack = createStackNavigator();

export default () => {
  const { t } = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Register}
        options={{ title: t('navigation.home') }}
      />

    {/* <Stack.Screen
        name="Home"
        component={Register}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="baby_care"
        component={BabyTracker}
        options={{ title: t('navigation.home') }}
      />
      <Stack.Screen
        name="tools"
        component={Tools}
        options={{ title: t('navigation.home') }}
      />

      <Stack.Screen
        name="edd"
        component={EDD}
        options={{ title: t('navigation.home') }}
      />

      <Stack.Screen
        name="ovulation"
        component={Ovulation}
        options={{ title: t('navigation.home') }}
      />
      <Stack.Screen
        name="prediatrician"
        component={Prediatrician}
        options={{ title: t('navigation.home') }}
      />
      <Stack.Screen
        name="preProfile"
        component={PrediatricianProfile}
        options={{ title: t('navigation.home') }}
      />

      <Stack.Screen
        name="community"
        component={Community}
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
        name="prediatrcian_article"
        component={MainArticle}
        options={{ title: t('navigation.home') }}
      />
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{ title: t('navigation.articles') }}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Baby_Shop"
        component={Ecommerce}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
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
