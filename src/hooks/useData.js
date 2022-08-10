import React, { useCallback, useContext, useEffect, useState } from 'react';
import Storage from '@react-native-async-storage/async-storage';
import { USERS, FOLLOWING, TRENDING, CATEGORIES, ARTICLES, } from '../constants/mocks';
import { light } from '../constants';
export const DataContext = React.createContext({});
export const DataProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [theme, setTheme] = useState(light);
    const [user, setUser] = useState(USERS[0]);
    const [users, setUsers] = useState(USERS);
    const [following, setFollowing] = useState(FOLLOWING);
    const [trending, setTrending] = useState(TRENDING);
    const [categories, setCategories] = useState(CATEGORIES);
    const [articles, setArticles] = useState(ARTICLES);
    const [article, setArticle] = useState({});
    // get isDark mode from storage
    const getIsDark = useCallback(async () => {
        // get preferance gtom storage
        const isDarkJSON = await Storage.getItem('isDark');
        if (isDarkJSON !== null) {
            // set isDark / compare if has updated
            setIsDark(JSON.parse(isDarkJSON));
        }
    }, [setIsDark]);
    // handle isDark mode
    const handleIsDark = useCallback((payload) => {
        // set isDark / compare if has updated
        setIsDark(payload);
        // save preferance to storage
        Storage.setItem('isDark', JSON.stringify(payload));
    }, [setIsDark]);
    // handle users / profiles
    const handleUsers = useCallback((payload) => {
        // set users / compare if has updated
        if (JSON.stringify(payload) !== JSON.stringify(users)) {
            setUsers({ ...users, ...payload });
        }
    }, [users, setUsers]);
    // handle user
    const handleUser = useCallback((payload) => {
        // set user / compare if has updated
        if (JSON.stringify(payload) !== JSON.stringify(user)) {
            setUser(payload);
        }
    }, [user, setUser]);
    // handle Article
    const handleArticle = useCallback((payload) => {
        // set article / compare if has updated
        if (JSON.stringify(payload) !== JSON.stringify(article)) {
            setArticle(payload);
        }
    }, [article, setArticle]);
    // get initial data for: isDark & language
    useEffect(() => {
        getIsDark();
    }, [getIsDark]);
    // change theme based on isDark updates
    useEffect(() => {
        setTheme(isDark ? light : light);
    }, [isDark]);
    const contextValue = {
        isDark,
        handleIsDark,
        theme,
        setTheme,
        user,
        users,
        handleUsers,
        handleUser,
        following,
        setFollowing,
        trending,
        setTrending,
        categories,
        setCategories,
        articles,
        setArticles,
        article,
        handleArticle,
    };
    return (React.createElement(DataContext.Provider, { value: contextValue }, children));
};
export const useData = () => useContext(DataContext);
