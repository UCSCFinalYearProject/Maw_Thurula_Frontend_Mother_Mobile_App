import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Animated, Linking, StyleSheet } from 'react-native';
import { useIsDrawerOpen, createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer';
import Screens from './Screens';
import { Block, Text, Switch, Button, Image } from '../components';
import { useData, useTheme, useTranslation } from '../hooks';
const Drawer = createDrawerNavigator();
/* drawer menu screens navigation */
const ScreensStack = () => {
    const { colors } = useTheme();
    const isDrawerOpen = useIsDrawerOpen();
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.88],
    });
    const borderRadius = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 16],
    });
    const animatedStyle = {
        borderRadius: borderRadius,
        transform: [{ scale: scale }],
    };
    useEffect(() => {
        Animated.timing(animation, {
            duration: 200,
            useNativeDriver: true,
            toValue: isDrawerOpen ? 1 : 0,
        }).start();
    }, [isDrawerOpen, animation]);
    return (React.createElement(Animated.View, { style: StyleSheet.flatten([
            animatedStyle,
            {
                flex: 1,
                overflow: 'hidden',
                borderColor: colors.card,
                borderWidth: isDrawerOpen ? 1 : 0,
            },
        ]) },
        React.createElement(Screens, null)));
};
/* custom drawer menu */
const DrawerContent = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { isDark, handleIsDark } = useData();
    const [active, setActive] = useState('Home');
    const { assets, colors, gradients, sizes, fonts } = useTheme();
    const labelColor = colors.text;
    const handleNavigation = useCallback((to) => {
        setActive(to);
        navigation.navigate(to);
    }, [navigation, setActive]);
    const handleWebLink = useCallback((url) => Linking.openURL(url), []);
    // screen list for Drawer menu
    const screens = [
        { name: t('screens.home'), to: 'Home', icon: assets.home },
        { name: t('screens.articles'), to: 'Articles', icon: assets.components },
        { name: t('screens.community'), to: 'Community', icon: assets.home },
        { name: t('screens.pediatrician'), to: 'Pediatrician', icon: assets.document },
        { name: t('screens.baby_names'), to: 'Baby_Names', icon: assets.rental },
        { name: t('screens.tools'), to: 'Tools', icon: assets.profile },
        { name: t('screens.online_clinic_card'), to: 'Online_Clinic_Card', icon: assets.settings },
        { name: t('screens.baby_shop'), to: 'Baby_Shop', icon: assets.register },
        { name: t('screens.register'), to: 'Register', icon: assets.register },
    ];
    // const screens = [
    //   {name: t('screens.home'), to: 'Home', icon: assets.home},
    //   {name: t('screens.community'), to: 'Community', icon: assets.home},
    //   {name: t('screens.components'), to: 'Components', icon: assets.components},
    //   {name: t('screens.articles'), to: 'Articles', icon: assets.document},
    //   {name: t('screens.rental'), to: 'rental', icon: assets.rental},
    //   {name: t('screens.profile'), to: 'Profile', icon: assets.profile},
    //   {name: t('screens.settings'), to: 'settings', icon: assets.settings},
    //   {name: t('screens.register'), to: 'Register', icon: assets.register},
    //   {name: t('screens.extra'), to: 'extra', icon: assets.extras},
    // ];
    return (React.createElement(DrawerContentScrollView, { ...props, scrollEnabled: true, removeClippedSubviews: true, renderToHardwareTextureAndroid: true, contentContainerStyle: { paddingBottom: sizes.padding } },
        React.createElement(Block, { paddingHorizontal: sizes.padding },
            React.createElement(Block, { flex: 0, row: true, align: "center", marginBottom: sizes.l },
                React.createElement(Image, { radius: 0, width: 33, height: 33, source: assets.logo, marginRight: sizes.sm }),
                React.createElement(Block, null,
                    React.createElement(Text, { size: 12, semibold: true }, t('app.name')),
                    React.createElement(Text, { size: 12, semibold: true }, t('app.company')))),
            screens?.map((screen, index) => {
                const isActive = active === screen.to;
                return (React.createElement(Button, { row: true, justify: "flex-start", marginBottom: sizes.s, key: `menu-screen-${screen.name}-${index}`, onPress: () => handleNavigation(screen.to) },
                    React.createElement(Block, { flex: 0, radius: 6, align: "center", justify: "center", width: sizes.md, height: sizes.md, marginRight: sizes.s, gradient: gradients[isActive ? 'primary' : 'white'] },
                        React.createElement(Image, { radius: 0, width: 14, height: 14, source: screen.icon, color: colors[isActive ? 'white' : 'black'] })),
                    React.createElement(Text, { p: true, semibold: isActive, color: labelColor }, screen.name)));
            }),
            React.createElement(Block, { flex: 0, height: 1, marginRight: sizes.md, marginVertical: sizes.sm, gradient: gradients.menu }),
            React.createElement(Text, { semibold: true, transform: "uppercase", opacity: 0.5 }, t('app.name') + t('app.organization')),
            React.createElement(Button, { row: true, justify: "flex-start", marginTop: sizes.sm, marginBottom: sizes.s, onPress: () => handleWebLink('https://github.com/creativetimofficial') },
                React.createElement(Block, { flex: 0, radius: 6, align: "center", justify: "center", width: sizes.md, height: sizes.md, marginRight: sizes.s, gradient: gradients.white },
                    React.createElement(Image, { radius: 0, width: 14, height: 14, color: colors.black, source: assets.documentation })),
                React.createElement(Text, { p: true, color: labelColor }, t('menu.ideas_and_accusations'))),
            React.createElement(Block, { row: true, justify: "space-between", marginTop: sizes.sm },
                React.createElement(Text, { color: labelColor }, t('darkMode')),
                React.createElement(Switch, { checked: isDark, onPress: (checked) => {
                        handleIsDark(checked);
                        Alert.alert(t('alert.title'), t('alert.message_1'));
                    } })))));
};
/* drawer menu navigation */
export default () => {
    const { gradients } = useTheme();
    return (React.createElement(Block, { gradient: gradients.light },
        React.createElement(Drawer.Navigator, { drawerType: "slide", overlayColor: "transparent", sceneContainerStyle: { backgroundColor: 'transparent' }, drawerContent: (props) => React.createElement(DrawerContent, { ...props }), drawerStyle: {
                flex: 1,
                width: '60%',
                borderRightWidth: 0,
                backgroundColor: 'transparent',
            } },
            React.createElement(Drawer.Screen, { name: "Screens", component: ScreensStack }))));
};
