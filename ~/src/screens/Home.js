import React, { useCallback, useState } from 'react';
import { useData, useTheme, useTranslation } from '../hooks/';
import { Block, Button, Image, Text } from '../components/';
import { StyleSheet } from 'react-native';
import TrendingArticle from './Articles/TrendingArticle';
import { Dimensions } from 'react-native';
import PhotoGallery from './PhotoGallary';
import LandingCoursol from '../components/Home/LandingCoursol';
const Home = () => {
    const { t } = useTranslation();
    const [tab, setTab] = useState(1);
    const { following, trending } = useData();
    const [products, setProducts] = useState(following);
    const { assets, colors, fonts, gradients, sizes } = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const handleProducts = useCallback((tab) => {
        setTab(tab);
        setProducts(tab === 0 ? following : trending);
    }, [following, trending, setTab, setProducts]);
    const HomeContent = () => {
        return (React.createElement(Block, { scroll: true, showsVerticalScrollIndicator: false },
            React.createElement(LandingCoursol, null),
            React.createElement(Block, { flex: 0, align: "center", paddingTop: 20 },
                React.createElement(Text, { font: fonts.bold, size: sizes.sm, color: colors.dribbble, style: { width: windowWidth, textAlign: "center" } },
                    t('home.this_week'),
                    " ",
                    t('home.trending'),
                    " ",
                    t('home.articles'))),
            React.createElement(Block, { row: true, wrap: "wrap", justify: "space-between" },
                React.createElement(TrendingArticle, null)),
            React.createElement(Block, { scroll: true, paddingHorizontal: sizes.padding, showsVerticalScrollIndicator: false, contentContainerStyle: { paddingBottom: sizes.l } },
                React.createElement(Block, { row: true, wrap: "wrap", justify: "space-between", marginTop: sizes.sm },
                    React.createElement(Block, { flex: 0, align: "center", padding: 10, marginTop: -10, width: windowWidth, paddingBottom: 20 },
                        React.createElement(Text, { font: fonts.bold, size: sizes.sm, color: colors.dribbble, style: { width: windowWidth, textAlign: "center" } },
                            t('home.this_week'),
                            " ",
                            t('home.trending'),
                            " ",
                            t('home.articles')))))));
    };
    const GallaryContent = () => {
        return (React.createElement(Block, { scroll: true, showsVerticalScrollIndicator: false },
            React.createElement(Block, { row: true, wrap: "wrap", justify: "space-between" },
                React.createElement(PhotoGallery, null))));
    };
    return (React.createElement(Block, null,
        React.createElement(Block, { color: colors.card, flex: 0, align: "center", padding: sizes.padding, flexDirection: "row", justify: 'space-between', gradients: gradients.tertiary },
            React.createElement(Block, { color: colors.card, flex: 0, align: "center", flexDirection: "row" },
                React.createElement(Image, { source: assets.avatar, style: styles.user_avatart, radius: 50 }),
                React.createElement(Block, { flex: 0 },
                    React.createElement(Text, { font: fonts.bold },
                        "  ",
                        t('home.welcome')),
                    React.createElement(Text, null,
                        " ",
                        t('temp_user.name'),
                        " "))),
            React.createElement(Block, { flex: 0, align: "center", radius: 50, width: 100, style: { borderColor: "green", borderWidth: 1 }, padding: sizes.s },
                React.createElement(Text, null, " 2019/15/10  "))),
        React.createElement(Block, { row: true, flex: 0, align: "center", justify: "center", color: colors.card, scrollEnabled: true, paddingBottom: sizes.sm },
            React.createElement(Button, { onPress: () => handleProducts(1) },
                React.createElement(Block, { row: true, align: "center" },
                    React.createElement(Block, { flex: 0, radius: 6, align: "center", justify: "center", marginRight: sizes.s, width: sizes.socialIconSize, height: sizes.socialIconSize, gradient: gradients?.[tab === 1 ? 'primary' : 'secondary'] },
                        React.createElement(Image, { source: assets.extras, color: colors.white, radius: 0 })),
                    React.createElement(Text, { p: true, font: fonts?.[tab === 1 ? 'medium' : 'normal'] }, t('screens.home')))),
            React.createElement(Block, { gray: true, flex: 0, width: 1, marginHorizontal: sizes.sm, height: sizes.socialIconSize }),
            React.createElement(Button, { onPress: () => handleProducts(0) },
                React.createElement(Block, { row: true, align: "center" },
                    React.createElement(Block, { flex: 0, radius: 6, align: "center", justify: "center", marginRight: sizes.s, width: sizes.socialIconSize, height: sizes.socialIconSize, gradient: gradients?.[tab === 0 ? 'primary' : 'secondary'] },
                        React.createElement(Image, { source: assets.extras, color: colors.white, radius: 0 })),
                    React.createElement(Text, { p: true, font: fonts?.[tab === 0 ? 'medium' : 'normal'] }, t('home.photos')))),
            React.createElement(Block, { gray: true, flex: 0, width: 1, marginHorizontal: sizes.sm, height: sizes.socialIconSize }),
            React.createElement(Button, { onPress: () => handleProducts(2) },
                React.createElement(Block, { row: true, align: "center" },
                    React.createElement(Block, { flex: 0, radius: 6, align: "center", justify: "center", marginRight: sizes.s, width: sizes.socialIconSize, height: sizes.socialIconSize, gradient: gradients?.[tab === 2 ? 'primary' : 'secondary'] },
                        React.createElement(Image, { source: assets.extras, color: colors.white, radius: 0 })),
                    React.createElement(Text, { p: true, font: fonts?.[tab === 2 ? 'medium' : 'normal'] }, t('home.music'))))),
        tab == 1 ? React.createElement(HomeContent, null) : React.createElement(React.Fragment, null)));
};
const styles = StyleSheet.create({
    user_avatart: {
        height: 40,
        width: 40
    }
});
export default Home;
