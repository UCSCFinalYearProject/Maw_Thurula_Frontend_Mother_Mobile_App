import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CardStyleInterpolators, } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';
import { useData } from './useData';
import { useTranslation } from './useTranslation';
import Image from '../components/Image';
import Text from '../components/Text';
import useTheme from '../hooks/useTheme';
import Button from '../components/Button';
import Block from '../components/Block';
export default () => {
    const { t } = useTranslation();
    const { user } = useData();
    const navigation = useNavigation();
    const { icons, colors, gradients, sizes } = useTheme();
    const menu = {
        headerStyle: { elevation: 0 },
        headerTitleAlign: 'left',
        headerTitleContainerStyle: { marginLeft: -sizes.sm },
        headerLeftContainerStyle: { paddingLeft: sizes.s },
        headerRightContainerStyle: { paddingRight: sizes.s },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitle: ({ children }) => (React.createElement(Text, { p: true }, children)),
        headerLeft: () => (React.createElement(Button, { onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()) },
            React.createElement(Image, { source: icons.menu, radius: 0, color: colors.icon }))),
        headerRight: () => (React.createElement(Block, { row: true, flex: 0, align: "center", marginRight: sizes.padding },
            React.createElement(TouchableOpacity, { style: { marginRight: sizes.sm }, onPress: () => navigation.navigate('Screens', {
                    screen: 'Pro',
                }) },
                React.createElement(Image, { source: icons.bell, radius: 0, color: colors.icon }),
                React.createElement(Block, { flex: 0, right: 0, width: sizes.s, height: sizes.s, radius: sizes.xs, position: "absolute", gradient: gradients?.primary })),
            React.createElement(TouchableOpacity, { onPress: () => navigation.navigate('Screens', {
                    screen: 'Pro',
                }) },
                React.createElement(Image, { source: icons.basket, radius: 0, color: colors.icon }),
                React.createElement(Block, { flex: 0, padding: 0, justify: "center", position: "absolute", top: -sizes.s, right: -sizes.s, width: sizes.sm, height: sizes.sm, radius: sizes.sm / 2, gradient: gradients?.primary },
                    React.createElement(Text, { white: true, center: true, bold: true, size: 10, lineHeight: 10, paddingTop: 3 }, "3"))))),
    };
    const options = {
        stack: menu,
        components: {
            ...menu,
            headerTitle: () => (React.createElement(Text, { p: true, white: true }, t('navigation.components'))),
            headerRight: () => null,
            headerLeft: () => (React.createElement(Button, { onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()) },
                React.createElement(Image, { source: icons.menu, radius: 0, color: colors.white }))),
        },
        pro: {
            ...menu,
            headerTransparent: true,
            headerTitle: () => (React.createElement(Text, { p: true, white: true, semibold: true }, t('pro.title'))),
            headerRight: () => null,
            headerLeft: () => (React.createElement(Button, { onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()) },
                React.createElement(Image, { source: icons.menu, radius: 0, color: colors.white }))),
        },
        back: {
            ...menu,
            headerRight: () => null,
            headerLeft: () => (React.createElement(Button, { onPress: () => navigation.goBack() },
                React.createElement(Image, { radius: 0, width: 10, height: 18, color: colors.icon, source: icons.arrow, transform: [{ rotate: '180deg' }] }))),
        },
        profile: {
            ...menu,
            headerRight: () => (React.createElement(Block, { row: true, flex: 0, align: "center", marginRight: sizes.padding },
                React.createElement(TouchableOpacity, { style: { marginRight: sizes.sm }, onPress: () => navigation.navigate('Screens', {
                        screen: 'Notifications',
                    }) },
                    React.createElement(Image, { source: icons.bell, radius: 0, color: colors.icon }),
                    React.createElement(Block, { flex: 0, right: 0, width: sizes.s, height: sizes.s, radius: sizes.xs, position: "absolute", gradient: gradients?.primary })),
                React.createElement(TouchableOpacity, { onPress: () => navigation.dispatch(DrawerActions.jumpTo('Screens', { screen: 'Profile' })) },
                    React.createElement(Image, { radius: 6, width: 24, height: 24, source: { uri: user.avatar } })))),
        },
    };
    return options;
};
