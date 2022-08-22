import React, { useCallback, useEffect } from 'react';
import { Linking, StatusBar } from 'react-native';
import { useTheme, useTranslation } from '../hooks/';
import { Block, Button, Image, Text } from '../components/';
const Pro = () => {
    const { t } = useTranslation();
    const { assets, colors, gradients, sizes } = useTheme();
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        return () => {
            StatusBar.setBarStyle('dark-content');
        };
    }, []);
    const handleWebLink = useCallback((url) => Linking.openURL(url), []);
    return (React.createElement(Image, { background: true, source: assets.background, padding: sizes.padding, style: { flex: 1 } },
        React.createElement(Block, { safe: true, justify: "center" },
            React.createElement(Block, { card: true, flex: 0, padding: sizes.sm, marginBottom: sizes.sm },
                React.createElement(Text, { h4: true, center: true, semibold: true, marginBottom: sizes.sm }, t('pro.title')),
                React.createElement(Text, { marginBottom: sizes.padding }, t('pro.appTemplate')),
                React.createElement(Text, { semibold: true }, t('pro.components', { count: 11 })),
                React.createElement(Text, { semibold: true }, t('pro.screens', { count: 18 })),
                React.createElement(Text, { semibold: true }, t('pro.support')),
                React.createElement(Text, { marginVertical: sizes.padding }, t('pro.saveTime')),
                React.createElement(Text, null, t('pro.takeAdvantage')),
                React.createElement(Block, { row: true, flex: 0, justify: "space-evenly", marginVertical: sizes.padding },
                    React.createElement(Image, { source: assets.ios, color: colors.icon, style: { height: 38, width: 82 } }),
                    React.createElement(Image, { source: assets.android, color: colors.icon, style: { height: 38, width: 140 } })),
                React.createElement(Button, { gradient: gradients.primary, onPress: () => handleWebLink('https://www.creative-tim.com/product/soft-ui-pro-react-native') },
                    React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, t('pro.buyNow')))))));
};
export default Pro;
