import React, { useCallback } from 'react';
import { Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Block, Button, Image, Text } from '../components/';
import { useData, useTheme, useTranslation } from '../hooks/';
const isAndroid = Platform.OS === 'android';
const Profile = () => {
    const { user } = useData();
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { assets, colors, sizes } = useTheme();
    const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
    const IMAGE_VERTICAL_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
    const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
    const IMAGE_VERTICAL_MARGIN = (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
    const handleSocialLink = useCallback((type) => {
        const url = type === 'twitter'
            ? `https://twitter.com/${user?.social?.twitter}`
            : `https://dribbble.com/${user?.social?.dribbble}`;
        try {
            Linking.openURL(url);
        }
        catch (error) {
            alert(`Cannot open URL: ${url}`);
        }
    }, [user]);
    return (React.createElement(Block, { safe: true, marginTop: sizes.md },
        React.createElement(Block, { scroll: true, paddingHorizontal: sizes.s, showsVerticalScrollIndicator: false, contentContainerStyle: { paddingBottom: sizes.padding } },
            React.createElement(Block, { flex: 0 },
                React.createElement(Image, { background: true, resizeMode: "cover", padding: sizes.sm, paddingBottom: sizes.l, radius: sizes.cardRadius, source: assets.background },
                    React.createElement(Button, { row: true, flex: 0, justify: "flex-start", onPress: () => navigation.goBack() },
                        React.createElement(Image, { radius: 0, width: 10, height: 18, color: colors.white, source: assets.arrow, transform: [{ rotate: '180deg' }] }),
                        React.createElement(Text, { p: true, white: true, marginLeft: sizes.s }, t('profile.title'))),
                    React.createElement(Block, { flex: 0, align: "center" },
                        React.createElement(Image, { width: 64, height: 64, marginBottom: sizes.sm, source: { uri: user?.avatar } }),
                        React.createElement(Text, { h5: true, center: true, white: true }, user?.name),
                        React.createElement(Text, { p: true, center: true, white: true }, user?.department),
                        React.createElement(Block, { row: true, marginVertical: sizes.m },
                            React.createElement(Button, { white: true, outlined: true, shadow: false, radius: sizes.m, onPress: () => {
                                    alert(`Follow ${user?.name}`);
                                } },
                                React.createElement(Block, { justify: "center", radius: sizes.m, paddingHorizontal: sizes.m, color: "rgba(255,255,255,0.2)" },
                                    React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, t('common.follow')))),
                            React.createElement(Button, { shadow: false, radius: sizes.m, marginHorizontal: sizes.sm, color: "rgba(255,255,255,0.2)", outlined: String(colors.white), onPress: () => handleSocialLink('twitter') },
                                React.createElement(Ionicons, { size: 18, name: "logo-twitter", color: colors.white })),
                            React.createElement(Button, { shadow: false, radius: sizes.m, color: "rgba(255,255,255,0.2)", outlined: String(colors.white), onPress: () => handleSocialLink('dribbble') },
                                React.createElement(Ionicons, { size: 18, name: "logo-dribbble", color: colors.white }))))),
                React.createElement(Block, { flex: 0, radius: sizes.sm, shadow: !isAndroid, marginTop: -sizes.l, marginHorizontal: "8%", color: "rgba(255,255,255,0.2)" },
                    React.createElement(Block, { row: true, blur: true, flex: 0, intensity: 100, radius: sizes.sm, overflow: "hidden", tint: colors.blurTint, justify: "space-evenly", paddingVertical: sizes.sm, renderToHardwareTextureAndroid: true },
                        React.createElement(Block, { align: "center" },
                            React.createElement(Text, { h5: true }, user?.stats?.posts),
                            React.createElement(Text, null, t('profile.posts'))),
                        React.createElement(Block, { align: "center" },
                            React.createElement(Text, { h5: true },
                                (user?.stats?.followers || 0) / 1000,
                                "k"),
                            React.createElement(Text, null, t('profile.followers'))),
                        React.createElement(Block, { align: "center" },
                            React.createElement(Text, { h5: true },
                                (user?.stats?.following || 0) / 1000,
                                "k"),
                            React.createElement(Text, null, t('profile.following'))))),
                React.createElement(Block, { paddingHorizontal: sizes.sm },
                    React.createElement(Text, { h5: true, semibold: true, marginBottom: sizes.s, marginTop: sizes.sm }, t('profile.aboutMe')),
                    React.createElement(Text, { p: true, lineHeight: 26 }, user?.about)),
                React.createElement(Block, { paddingHorizontal: sizes.sm, marginTop: sizes.s },
                    React.createElement(Block, { row: true, align: "center", justify: "space-between" },
                        React.createElement(Text, { h5: true, semibold: true }, t('common.album')),
                        React.createElement(Button, null,
                            React.createElement(Text, { p: true, primary: true, semibold: true }, t('common.viewall')))),
                    React.createElement(Block, { row: true, justify: "space-between", wrap: "wrap" },
                        React.createElement(Image, { resizeMode: "cover", source: assets?.photo1, style: {
                                width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
                                height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
                            } }),
                        React.createElement(Block, { marginLeft: sizes.m },
                            React.createElement(Image, { resizeMode: "cover", source: assets?.photo2, marginBottom: IMAGE_VERTICAL_MARGIN, style: {
                                    height: IMAGE_VERTICAL_SIZE,
                                    width: IMAGE_VERTICAL_SIZE,
                                } }),
                            React.createElement(Image, { resizeMode: "cover", source: assets?.photo3, style: {
                                    height: IMAGE_VERTICAL_SIZE,
                                    width: IMAGE_VERTICAL_SIZE,
                                } }))))))));
};
export default Profile;
