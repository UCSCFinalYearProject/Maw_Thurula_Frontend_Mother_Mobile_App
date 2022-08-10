import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import Storage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import translations from '../constants/translations/';
export const TranslationContext = React.createContext({});
export const TranslationProvider = ({ children, }) => {
    const [locale, setLocale] = useState('en');
    // const [locale, setLocale] = useState('sh');
    // Set the locale once at the beginning of your app.
    i18n.locale = locale;
    // Set the key-value pairs for the different languages you want to support.
    i18n.translations = translations;
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;
    const t = useCallback((scope, options) => {
        return i18n.t(scope, { ...options, locale });
    }, [locale]);
    // get locale from storage
    const getLocale = useCallback(async () => {
        // get preferance gtom storage
        const localeJSON = await Storage.getItem('locale');
        // set Locale / compare if has updated
        setLocale(localeJSON !== null ? localeJSON : Localization.locale);
    }, [setLocale]);
    useEffect(() => {
        getLocale();
    }, [getLocale]);
    useEffect(() => {
        // save preferance to storage
        Storage.setItem('locale', locale);
    }, [locale]);
    const contextValue = {
        t,
        locale,
        setLocale,
        translate: t,
    };
    return (React.createElement(TranslationContext.Provider, { value: contextValue }, children));
};
/*
 * useTranslation hook based on i18n-js
 * Source: https://github.com/fnando/i18n-js
 */
export const useTranslation = () => useContext(TranslationContext);
