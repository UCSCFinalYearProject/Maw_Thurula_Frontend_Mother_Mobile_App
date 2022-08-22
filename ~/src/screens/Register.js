import React, { useCallback, useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useData, useTheme, useTranslation } from '../hooks/';
import * as regex from '../constants/regex';
import { Block, Button, Input, Image, Text, Checkbox } from '../components/';
const isAndroid = Platform.OS === 'android';
const Register = () => {
    const { isDark } = useData();
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [isValid, setIsValid] = useState({
        name: false,
        email: false,
        password: false,
        agreed: false,
    });
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: '',
        agreed: false,
    });
    const { assets, colors, gradients, sizes } = useTheme();
    const handleChange = useCallback((value) => {
        setRegistration((state) => ({ ...state, ...value }));
    }, [setRegistration]);
    const handleSignUp = useCallback(() => {
        if (!Object.values(isValid).includes(false)) {
            /** send/save registratin data */
            console.log('handleSignUp', registration);
        }
    }, [isValid, registration]);
    useEffect(() => {
        setIsValid((state) => ({
            ...state,
            name: regex.name.test(registration.name),
            email: regex.email.test(registration.email),
            password: regex.password.test(registration.password),
            agreed: registration.agreed,
        }));
    }, [registration, setIsValid]);
    return (React.createElement(Block, { safe: true, marginTop: sizes.md },
        React.createElement(Block, { paddingHorizontal: sizes.s },
            React.createElement(Block, { flex: 0, style: { zIndex: 0 } },
                React.createElement(Image, { background: true, resizeMode: "cover", padding: sizes.sm, radius: sizes.cardRadius, source: assets.background, height: sizes.height * 0.3 },
                    React.createElement(Button, { row: true, flex: 0, justify: "flex-start", onPress: () => navigation.goBack() },
                        React.createElement(Image, { radius: 0, width: 10, height: 18, color: colors.white, source: assets.arrow, transform: [{ rotate: '180deg' }] }),
                        React.createElement(Text, { p: true, white: true, marginLeft: sizes.s }, t('common.goBack'))),
                    React.createElement(Text, { h4: true, center: true, white: true, marginBottom: sizes.md }, t('register.title')))),
            React.createElement(Block, { keyboard: true, behavior: !isAndroid ? 'padding' : 'height', marginTop: -(sizes.height * 0.2 - sizes.l) },
                React.createElement(Block, { flex: 0, radius: sizes.sm, marginHorizontal: "8%", shadow: !isAndroid },
                    React.createElement(Block, { blur: true, flex: 0, intensity: 90, radius: sizes.sm, overflow: "hidden", justify: "space-evenly", tint: colors.blurTint, paddingVertical: sizes.sm },
                        React.createElement(Text, { p: true, semibold: true, center: true }, t('register.subtitle')),
                        React.createElement(Block, { row: true, center: true, justify: "space-evenly", marginVertical: sizes.m },
                            React.createElement(Button, { outlined: true, gray: true, shadow: !isAndroid },
                                React.createElement(Image, { source: assets.facebook, height: sizes.m, width: sizes.m, color: isDark ? colors.icon : undefined })),
                            React.createElement(Button, { outlined: true, gray: true, shadow: !isAndroid },
                                React.createElement(Image, { source: assets.apple, height: sizes.m, width: sizes.m, color: isDark ? colors.icon : undefined })),
                            React.createElement(Button, { outlined: true, gray: true, shadow: !isAndroid },
                                React.createElement(Image, { source: assets.google, height: sizes.m, width: sizes.m, color: isDark ? colors.icon : undefined }))),
                        React.createElement(Block, { row: true, flex: 0, align: "center", justify: "center", marginBottom: sizes.sm, paddingHorizontal: sizes.xxl },
                            React.createElement(Block, { flex: 0, height: 1, width: "50%", end: [1, 0], start: [0, 1], gradient: gradients.divider }),
                            React.createElement(Text, { center: true, marginHorizontal: sizes.s }, t('common.or')),
                            React.createElement(Block, { flex: 0, height: 1, width: "50%", end: [0, 1], start: [1, 0], gradient: gradients.divider })),
                        React.createElement(Block, { paddingHorizontal: sizes.sm },
                            React.createElement(Input, { autoCapitalize: "none", marginBottom: sizes.m, label: t('common.name'), placeholder: t('common.namePlaceholder'), success: Boolean(registration.name && isValid.name), danger: Boolean(registration.name && !isValid.name), onChangeText: (value) => handleChange({ name: value }) }),
                            React.createElement(Input, { autoCapitalize: "none", marginBottom: sizes.m, label: t('common.email'), keyboardType: "email-address", placeholder: t('common.emailPlaceholder'), success: Boolean(registration.email && isValid.email), danger: Boolean(registration.email && !isValid.email), onChangeText: (value) => handleChange({ email: value }) }),
                            React.createElement(Input, { secureTextEntry: true, autoCapitalize: "none", marginBottom: sizes.m, label: t('common.password'), placeholder: t('common.passwordPlaceholder'), onChangeText: (value) => handleChange({ password: value }), success: Boolean(registration.password && isValid.password), danger: Boolean(registration.password && !isValid.password) })),
                        React.createElement(Block, { row: true, flex: 0, align: "center", paddingHorizontal: sizes.sm },
                            React.createElement(Checkbox, { marginRight: sizes.sm, checked: registration?.agreed, onPress: (value) => handleChange({ agreed: value }) }),
                            React.createElement(Text, { paddingRight: sizes.s },
                                t('common.agree'),
                                React.createElement(Text, { semibold: true, onPress: () => {
                                        Linking.openURL('https://www.creative-tim.com/terms');
                                    } }, t('common.terms')))),
                        React.createElement(Button, { onPress: handleSignUp, marginVertical: sizes.s, marginHorizontal: sizes.sm, gradient: gradients.primary, disabled: Object.values(isValid).includes(false) },
                            React.createElement(Text, { bold: true, white: true, transform: "uppercase" }, t('common.signup'))),
                        React.createElement(Button, { primary: true, outlined: true, shadow: !isAndroid, marginVertical: sizes.s, marginHorizontal: sizes.sm, onPress: () => navigation.navigate('Pro') },
                            React.createElement(Text, { bold: true, primary: true, transform: "uppercase" }, t('common.signin')))))))));
};
export default Register;
