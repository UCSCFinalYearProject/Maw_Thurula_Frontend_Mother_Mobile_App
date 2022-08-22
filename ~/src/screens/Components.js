import React, { useLayoutEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useHeaderHeight } from '@react-navigation/stack';
import { useTheme } from '../hooks/';
import { Block, Button, Input, Image, Switch, Modal, Text } from '../components/';
// buttons example
const Buttons = () => {
    const [showModal, setModal] = useState(false);
    const [quantity, setQuantity] = useState('01');
    const { assets, colors, gradients, sizes } = useTheme();
    return (React.createElement(Block, { paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Buttons"),
        React.createElement(Block, null,
            React.createElement(Button, { flex: 1, gradient: gradients.primary, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "Primary")),
            React.createElement(Button, { flex: 1, gradient: gradients.secondary, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "Secondary")),
            React.createElement(Button, { flex: 1, gradient: gradients.info, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "info")),
            React.createElement(Button, { flex: 1, gradient: gradients.success, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "success")),
            React.createElement(Button, { flex: 1, gradient: gradients.warning, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "warning")),
            React.createElement(Button, { flex: 1, gradient: gradients.danger, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "danger")),
            React.createElement(Button, { flex: 1, gradient: gradients.light, marginBottom: sizes.base },
                React.createElement(Text, { bold: true, transform: "uppercase" }, "light")),
            React.createElement(Button, { flex: 1, gradient: gradients.dark, marginBottom: sizes.base },
                React.createElement(Text, { white: true, bold: true, transform: "uppercase" }, "dark")),
            React.createElement(Block, { row: true, justify: "space-between", marginBottom: sizes.base },
                React.createElement(Button, { flex: 1, row: true, gradient: gradients.dark, onPress: () => setModal(true) },
                    React.createElement(Block, { row: true, align: "center", justify: "space-between", paddingHorizontal: sizes.sm },
                        React.createElement(Text, { white: true, bold: true, transform: "uppercase", marginRight: sizes.sm }, quantity),
                        React.createElement(Image, { source: assets.arrow, color: colors.white, transform: [{ rotate: '90deg' }] }))),
                React.createElement(Button, { flex: 1, gradient: gradients.dark, marginHorizontal: sizes.s },
                    React.createElement(Text, { white: true, bold: true, transform: "uppercase", marginHorizontal: sizes.s }, "Delete")),
                React.createElement(Button, { gradient: gradients.dark },
                    React.createElement(Text, { white: true, bold: true, transform: "uppercase", marginHorizontal: sizes.sm }, "Save for later")))),
        React.createElement(Modal, { visible: showModal, onRequestClose: () => setModal(false) },
            React.createElement(FlatList, { keyExtractor: (index) => `${index}`, data: ['01', '02', '03', '04', '05'], renderItem: ({ item }) => (React.createElement(Button, { marginBottom: sizes.sm, onPress: () => {
                        setQuantity(item);
                        setModal(false);
                    } },
                    React.createElement(Text, { p: true, white: true, semibold: true, transform: "uppercase" }, item))) }))));
};
// texts example
const Typography = () => {
    const { sizes } = useTheme();
    return (React.createElement(Block, { marginTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Typography"),
        React.createElement(Block, null,
            React.createElement(Text, { h1: true }, "Heading 1"),
            React.createElement(Text, { h2: true }, "Heading 2"),
            React.createElement(Text, { h3: true }, "Heading 3"),
            React.createElement(Text, { h4: true }, "Heading 4"),
            React.createElement(Text, { h5: true }, "Heading 5"),
            React.createElement(Text, { p: true }, "Paragraph"),
            React.createElement(Text, { marginBottom: sizes.xs }, "Text"))));
};
// inputs example
const Inputs = () => {
    const { colors, sizes } = useTheme();
    return (React.createElement(Block, { color: colors.card, marginTop: sizes.m, paddingTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Inputs"),
        React.createElement(Block, null,
            React.createElement(Input, { placeholder: "Regular", marginBottom: sizes.sm }),
            React.createElement(Input, { placeholder: "Search", marginBottom: sizes.sm }),
            React.createElement(Input, { search: true, label: "Search", marginBottom: sizes.sm, placeholder: "Search with label" }),
            React.createElement(Input, { success: true, placeholder: "Success", marginBottom: sizes.sm }),
            React.createElement(Input, { danger: true, placeholder: "Error", marginBottom: sizes.sm }),
            React.createElement(Input, { disabled: true, placeholder: "Disabled", marginBottom: sizes.sm }))));
};
// switch example
const Switches = () => {
    const { colors, sizes } = useTheme();
    const [switch1, setSwitch1] = useState(true);
    const [switch2, setSwitch2] = useState(false);
    return (React.createElement(Block, { color: colors.card, paddingVertical: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Switches"),
        React.createElement(Block, null,
            React.createElement(Block, { row: true, flex: 0, align: "center", justify: "space-between" },
                React.createElement(Text, null,
                    "Switch is ",
                    switch1 ? 'ON' : 'OFF'),
                React.createElement(Switch, { checked: switch1, onPress: (checked) => setSwitch1(checked) })),
            React.createElement(Block, { row: true, flex: 0, align: "center", justify: "space-between", marginTop: sizes.s },
                React.createElement(Text, null,
                    "Switch is ",
                    switch2 ? 'ON' : 'OFF'),
                React.createElement(Switch, { checked: switch2, onPress: (checked) => setSwitch2(checked) })))));
};
// social example
const Social = () => {
    const { sizes } = useTheme();
    return (React.createElement(Block, { paddingVertical: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Social"),
        React.createElement(Block, { row: true, justify: "space-evenly" },
            React.createElement(Button, { social: "facebook" }),
            React.createElement(Button, { social: "twitter" }),
            React.createElement(Button, { social: "dribbble" }))));
};
// cards example
const Cards = () => {
    const { assets, colors, gradients, sizes } = useTheme();
    return (React.createElement(Block, { marginTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Cards"),
        React.createElement(Block, null,
            React.createElement(Block, { card: true, row: true },
                React.createElement(Image, { resizeMode: "contain", source: assets?.card1, style: { height: 114 } }),
                React.createElement(Block, { padding: sizes.s, justify: "space-between" },
                    React.createElement(Text, { p: true }, "Adventures - Multi day trips with meals and stays."),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Block, { row: true, align: "center" },
                            React.createElement(Text, { p: true, semibold: true, marginRight: sizes.s, color: colors.link }, "Read Article"),
                            React.createElement(Image, { source: assets.arrow, color: colors.link })))))),
        React.createElement(Block, { row: true, marginTop: sizes.sm },
            React.createElement(Block, { card: true, marginRight: sizes.sm },
                React.createElement(Image, { resizeMode: "cover", source: assets?.card2, style: { width: '100%' } }),
                React.createElement(Block, { padding: sizes.s, justify: "space-between" },
                    React.createElement(Text, { p: true, marginBottom: sizes.s }, "New ways to meet your business goals."),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Block, { row: true, align: "center" },
                            React.createElement(Text, { p: true, semibold: true, marginRight: sizes.s, color: colors.link }, "Read Article"),
                            React.createElement(Image, { source: assets.arrow, color: colors.link }))))),
            React.createElement(Block, { card: true },
                React.createElement(Image, { resizeMode: "cover", source: assets?.card3, style: { width: '100%' } }),
                React.createElement(Block, { padding: sizes.s, justify: "space-between" },
                    React.createElement(Text, { p: true, marginBottom: sizes.s }, "The highest status people."),
                    React.createElement(TouchableOpacity, null,
                        React.createElement(Block, { row: true, align: "center" },
                            React.createElement(Text, { p: true, semibold: true, marginRight: sizes.s, color: colors.link }, "Read Article"),
                            React.createElement(Image, { source: assets.arrow, color: colors.link })))))),
        React.createElement(Block, { card: true, marginTop: sizes.sm },
            React.createElement(Image, { resizeMode: "cover", source: assets?.card4, style: { width: '100%' } }),
            React.createElement(Text, { h5: true, bold: true, transform: "uppercase", gradient: gradients.primary, marginTop: sizes.sm }, "Trending"),
            React.createElement(Text, { p: true, marginTop: sizes.s, marginLeft: sizes.xs, marginBottom: sizes.sm }, "The most beautiful and complex UI Kits built by Creative Tim."),
            React.createElement(Block, { row: true, marginLeft: sizes.xs, marginBottom: sizes.xs },
                React.createElement(Image, { source: assets.avatar1, style: { width: sizes.xl, height: sizes.xl, borderRadius: sizes.s } }),
                React.createElement(Block, { marginLeft: sizes.s },
                    React.createElement(Text, { p: true, semibold: true }, "Mathew Glock"),
                    React.createElement(Text, { p: true, gray: true }, "Posted on 28 February")))),
        React.createElement(Block, { card: true, padding: 0, marginTop: sizes.sm },
            React.createElement(Image, { background: true, resizeMode: "cover", source: assets.card5, radius: sizes.cardRadius },
                React.createElement(Block, { color: "rgba(0,0,0,0.3)", padding: sizes.padding },
                    React.createElement(Text, { h4: true, white: true, marginBottom: sizes.sm }, "Flexible office space means growth."),
                    React.createElement(Text, { p: true, white: true }, "Rather than worrying about switching offices every couple years, you can instead stay in the same location."),
                    React.createElement(Block, { row: true, marginLeft: sizes.xs, marginTop: sizes.xxl },
                        React.createElement(Image, { source: assets.avatar2, style: {
                                width: sizes.xl,
                                height: sizes.xl,
                                borderRadius: sizes.s,
                            } }),
                        React.createElement(Block, { marginLeft: sizes.s },
                            React.createElement(Text, { p: true, white: true, semibold: true }, "Devin Coldewey"),
                            React.createElement(Text, { p: true, white: true }, "Marketing Manager"))))))));
};
// Photo gallery example
const Gallery = () => {
    const { assets, sizes } = useTheme();
    const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
    const IMAGE_VERTICAL_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
    const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
    const IMAGE_VERTICAL_MARGIN = (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
    return (React.createElement(Block, { marginTop: sizes.m, paddingHorizontal: sizes.padding },
        React.createElement(Text, { p: true, semibold: true, marginBottom: sizes.s }, "Carousel"),
        React.createElement(Block, { marginBottom: sizes.xxl },
            React.createElement(Image, { resizeMode: "cover", source: assets.carousel1, style: { width: '100%' } }),
            React.createElement(Text, { p: true, secondary: true, marginTop: sizes.sm }, "Private Room \u2022 1 Guests \u2022 1 Sofa"),
            React.createElement(Text, { h4: true, marginVertical: sizes.s }, "Single room in center"),
            React.createElement(Text, { p: true, lineHeight: 26 }, "As Uber works through a huge amount of internal management turmoil, the company is also consolidating.")),
        React.createElement(Block, null,
            React.createElement(Block, { row: true, align: "center", justify: "space-between" },
                React.createElement(Text, { h5: true, semibold: true }, "Album 1"),
                React.createElement(Button, null,
                    React.createElement(Text, { p: true, primary: true, semibold: true }, "View all"))),
            React.createElement(Block, { row: true, justify: "space-between", wrap: "wrap" },
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo1, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo2, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo3, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo4, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo5, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }),
                React.createElement(Image, { resizeMode: "cover", source: assets?.photo6, marginBottom: IMAGE_MARGIN, style: {
                        height: IMAGE_SIZE,
                        width: IMAGE_SIZE,
                    } }))),
        React.createElement(Block, null,
            React.createElement(Block, { row: true, align: "center", justify: "space-between" },
                React.createElement(Text, { h5: true, semibold: true }, "Album 2"),
                React.createElement(Button, null,
                    React.createElement(Text, { p: true, primary: true, semibold: true }, "View all"))),
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
                        } }))))));
};
const Components = () => {
    const { assets, sizes } = useTheme();
    const navigation = useNavigation();
    const headerHeight = useHeaderHeight();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackground: () => (React.createElement(Image, { radius: 0, resizeMode: "cover", width: sizes.width, height: headerHeight, source: assets.header })),
        });
    }, [assets.header, navigation, sizes.width, headerHeight]);
    return (React.createElement(Block, { safe: true },
        React.createElement(Block, { scroll: true, showsVerticalScrollIndicator: false, contentContainerStyle: { paddingVertical: sizes.padding } },
            React.createElement(Block, null,
                React.createElement(Buttons, null),
                React.createElement(Typography, null),
                React.createElement(Inputs, null),
                React.createElement(Switches, null),
                React.createElement(Social, null),
                React.createElement(Cards, null),
                React.createElement(Gallery, null)))));
};
export default Components;
